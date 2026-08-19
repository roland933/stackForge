

import { BackendFrameworks } from "@/const/frameworks/frameworks";

import { useState } from "react";
import { Frameworks } from "./common/Frameworks";
import { Dependencies } from "./common/Dependencies";
import { ConfigHeader } from "./common/ConfigHeader";
import { ConfigSection } from "./common/ConfigSection";
import { useBackend } from "../wizard/steps/backend/hooks/useBackend";
import { LaravelDependencies } from "@/const/dependencies/laravel/LaravelDependencies";

export type BackendConfigData = {
    framework: string;
    dependencies: string[];
};

type BackendConfigDataProps = {
    onChange: (config: BackendConfigData) => void;
};

export function BackendConfig({ onChange }: BackendConfigDataProps) {

    const { backend } = useBackend();

    const [framework, setFramework] = useState<string>(backend.framework);

    const [selectedDependencies, setSelectedDependencies] = useState<string[]>(backend.dependencies);

    const handleSelectFramework = (id:string) => {
        setFramework(id)
       
        onChange({
            framework:id,
            dependencies:backend.dependencies
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

            <ConfigHeader title="Framework" subTitle=" Choose your backend framework." />

            <Frameworks 
                framework={framework}
                frameworks={BackendFrameworks}
                handleSelectFramework={handleSelectFramework}
               />


           
            <Dependencies selectedDependencies={selectedDependencies}
                handleToggleDependency={handleToggleDependency}
                dependencies={LaravelDependencies}

            />

       </ConfigSection>
    );
}