
import { FrontendFrameworks } from "@/const/frameworks/frameworks";

import { useState } from "react";
import { useFrontend } from "../wizard/steps/frontend/hooks/useFrontend";
import { Frameworks } from "./common/Frameworks";
import { Dependencies } from "./common/Dependencies";
import { ConfigHeader } from "./common/ConfigHeader";
import { ConfigSection } from "./common/ConfigSection";
import type { DependenciType } from "@/const/dependencies/DependencyType";
import { useDependencies } from "./hooks/useDependencies";

export type FrontendConfigData = {
    framework: string;
    dependencies: DependenciType[];
};

type FrontendConfigProps = {
    onChange: (config: FrontendConfigData) => void;
};

export function FrontendConfig({ onChange }: FrontendConfigProps) {

    const { frontend } = useFrontend();

    const [framework, setFramework] = useState<string>(frontend.framework);

    const selectedFramework = FrontendFrameworks.find((item) => item.id === framework);

    const availableDependencies = selectedFramework?.dependencies ?? [];


    const {
        selectedDependencies,
        toggleDependency,
        resetDependencies,
    } = useDependencies({
        initialDependencies: frontend.dependencies,
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


            <ConfigHeader title="Framework" subTitle=" Choose your frontend framework." />

            <Frameworks framework={framework}
                frameworks={FrontendFrameworks}
                handleSelectFramework={handleSelectFramework}
            />



            <Dependencies selectedDependencies={selectedDependencies}
                handleToggleDependency={toggleDependency}
                dependencies={availableDependencies}

            />

        </ConfigSection>
    );
}