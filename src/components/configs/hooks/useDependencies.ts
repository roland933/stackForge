import { useState } from "react";
import type { DependenciType } from "@/const/dependencies/DependencyType";

type UseDependenciesProps = {
    initialDependencies?: DependenciType[];
    availableDependencies: DependenciType[];
    framework: string;
    onChange: (config: {
        framework: string;
        dependencies: DependenciType[];
    }) => void;
};

export function useDependencies({
    initialDependencies = [],
    availableDependencies,
    framework,
    onChange,
}: UseDependenciesProps) {

    const [selectedDependencies, setSelectedDependencies] =
        useState<DependenciType[]>(initialDependencies);

    const toggleDependency = (id: string) => {
        setSelectedDependencies((current) => {
            const exists = current.some(
                (dependency) => dependency.id === id
            );

            const next = exists
                ? current.filter(
                    (dependency) => dependency.id !== id
                )
                : [
                    ...current,
                    availableDependencies.find(
                        (dependency) => dependency.id === id
                    )!,
                ];

            onChange({
                framework,
                dependencies: next,
            });

            return next;
        });
    };

    const resetDependencies = () => {
        setSelectedDependencies([]);

        
    };

    return {
        selectedDependencies,
        toggleDependency,
        resetDependencies,
    };
}