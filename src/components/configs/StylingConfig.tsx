

import { useState } from "react";
import { Frameworks } from "./common/Frameworks";
import { Dependencies } from "./common/Dependencies";
import { ConfigHeader } from "./common/ConfigHeader";
import { ConfigSection } from "./common/ConfigSection";

import { useStyling } from "@/hooks/configs/useStyling";
import { StylingFrameworks } from "@/const/frameworks/stylingFrameworks";

export type StylingConfigData = {
    framework: string;
    dependencies: string[];
};

type StylingConfigDataProps = {
    onChange: (config: StylingConfigData) => void;
};

export function StylingConfig({ onChange }: StylingConfigDataProps) {

    const { styling } = useStyling();

    const [framework, setFramework] = useState<string>(styling.framework);

    const [selectedDependencies, setSelectedDependencies] = useState<string[]>(styling.dependencies);

    const handleSelectFramework = (id:string) => {
        setFramework(id)
       
        onChange({
            framework:id,
            dependencies:styling.dependencies
        })
    }

    const handleToggleDependency = (id: string) => {
        
        setSelectedDependencies((current) => {
            const next = current.includes(id)
                ? current.filter((dependency) => dependency !== id)
                : [...current, id];

               
            onChange({
                framework,
                dependencies: next,
            });

            return next;
        });
    };

    return (
        <ConfigSection >

            <ConfigHeader title="Framework" subTitle="Choose your css framework." />

            <Frameworks 
                framework={framework}
                frameworks={StylingFrameworks}
                handleSelectFramework={handleSelectFramework}
               />

           
            <Dependencies selectedDependencies={selectedDependencies}
                handleToggleDependency={handleToggleDependency}
                dependencies={styling.dependencies}

            />

       </ConfigSection>
    );
}