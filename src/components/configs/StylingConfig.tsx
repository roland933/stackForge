

import { useState } from "react";
import { Frameworks } from "./common/Frameworks";
import { Dependencies } from "./common/Dependencies";
import { ConfigHeader } from "./common/ConfigHeader";
import { ConfigSection } from "./common/ConfigSection";

import { useStyling } from "@/hooks/configs/useStyling";
import { StylingFrameworks } from "@/const/frameworks/stylingFrameworks";
import type { DependenciType } from "@/const/dependencies/DependencyType";
import { useDependencies } from "./hooks/useDependencies";

export type StylingConfigData = {
    framework: string;
    dependencies: DependenciType[];
};

type StylingConfigDataProps = {
    onChange: (config: StylingConfigData) => void;
};

export function StylingConfig({ onChange }: StylingConfigDataProps) {

    const { styling } = useStyling();

    const [framework, setFramework] = useState<string>(styling.framework);

    const selectedFramework = StylingFrameworks.find((item) => item.id === framework);

    const availableDependencies = selectedFramework?.dependencies ?? [];


    const {
        selectedDependencies,
        toggleDependency,
        resetDependencies,
    } = useDependencies({
        initialDependencies: styling.dependencies,
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

            <ConfigHeader title="Framework" subTitle="Choose your css framework." />

            <Frameworks
                framework={framework}
                frameworks={StylingFrameworks}
                handleSelectFramework={handleSelectFramework}
            />


            <Dependencies
                selectedDependencies={selectedDependencies}
                handleToggleDependency={toggleDependency}
                dependencies={availableDependencies}

            />

        </ConfigSection>
    );
}