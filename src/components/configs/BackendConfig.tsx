

import { BackendFrameworks } from "@/const/frameworks/frameworks";

import { useState } from "react";
import { Frameworks } from "./common/Frameworks";
import { Dependencies } from "./common/Dependencies";
import { ConfigHeader } from "./common/ConfigHeader";
import { ConfigSection } from "./common/ConfigSection";
import { useBackend } from "../wizard/steps/backend/hooks/useBackend";
import type { DependenciType } from "@/const/dependencies/DependencyType";
import { useDependencies } from "./hooks/useDependencies";


export type BackendConfigData = {
    framework: string;
    dependencies: DependenciType[];

};

type BackendConfigDataProps = {
    onChange: (config: BackendConfigData) => void;
};

export function BackendConfig({ onChange }: BackendConfigDataProps) {

    const { backend } = useBackend();

    const [framework, setFramework] = useState<string>(backend.framework);

    const selectedFramework = BackendFrameworks.find(  (item) => item.id === framework);
    
    const availableDependencies = selectedFramework?.dependencies ?? [];


    const {
        selectedDependencies,
        toggleDependency,
        resetDependencies,
    } = useDependencies({
        initialDependencies: backend.dependencies,
        availableDependencies,
        framework,
        onChange,
    });

    const handleSelectFramework = (id: string) => {
        setFramework(id)
        resetDependencies()
        onChange({
            framework: id,
            dependencies: [],
        });

    }


    return (
        <ConfigSection >

            <ConfigHeader title="Framework" subTitle=" Choose your backend framework." />

            <Frameworks
                framework={framework}
                frameworks={BackendFrameworks}
                handleSelectFramework={handleSelectFramework}
            />


            <Dependencies selectedDependencies={selectedDependencies}
                handleToggleDependency={toggleDependency}
                dependencies={availableDependencies}

            />

        </ConfigSection>
    );
}