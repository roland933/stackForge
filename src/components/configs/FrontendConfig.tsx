
import { dependencies } from "@/const/dependencies/react/dependencies";
import { FrontendFrameworks } from "@/const/frameworks/frameworks";

import { useState } from "react";
import { useFrontend } from "../wizard/steps/frontend/hooks/useFrontend";
import { Frameworks } from "./common/Frameworks";
import { Dependencies } from "./common/Dependencies";
import { ConfigHeader } from "./common/ConfigHeader";
import { ConfigSection } from "./common/ConfigSection";

export type FrontendConfigData = {
    framework: string;
    dependencies: string[];
};

type FrontendConfigProps = {
    onChange: (config: FrontendConfigData) => void;
};

export function FrontendConfig({ onChange }: FrontendConfigProps) {

    const { frontend } = useFrontend();

    const [framework, setFramework] = useState<string>(frontend.framework);

    const [selectedDependencies, setSelectedDependencies] = useState<string[]>(frontend.dependencies);


    const handleSelectFramework = (id:string) => {
        setFramework(id)
       
        onChange({
            framework:id,
            dependencies:frontend.dependencies
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


            <ConfigHeader title="Framework" subTitle=" Choose your frontend framework." />

            <Frameworks framework={framework}
                frameworks={FrontendFrameworks}
                handleSelectFramework={handleSelectFramework}
               />


           
            <Dependencies selectedDependencies={selectedDependencies}
                handleToggleDependency={handleToggleDependency}
                dependencies={dependencies}

            />

       </ConfigSection>
    );
}