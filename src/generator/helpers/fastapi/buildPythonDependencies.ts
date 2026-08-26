import { resolveDatabaseDependencies } from "@/helpers/resolveDatabaseDependencies";
import { pythonPackages } from "../../registry/pythonPackages";
import type { StackForgeConfig } from "../../types/StackForgeConfig";

export function buildPythonDependencies(
    config: StackForgeConfig
): string {

    const dependencies: Record<string, string> = {
        ...pythonPackages.fastapi.packages,
    };

    config.backend.dependencies.forEach((dependency) => {

        const packageConfig =
            pythonPackages[
                dependency.id as keyof typeof pythonPackages
            ];

        if (!packageConfig) {
            return;
        }

        Object.assign(
            dependencies,
            packageConfig.packages
        );
    });

    const requiredDependencies =  resolveDatabaseDependencies(config.database?.id);

    requiredDependencies.forEach((dependency) => {

        const packageConfig =
            pythonPackages[
                dependency as keyof typeof pythonPackages
            ];

        if (!packageConfig) {
            return;
        }

        Object.assign(
            dependencies,
            packageConfig.packages
        );
    });

    return Object.entries(dependencies)
        .map(([name, version]) => `${name}==${version}`)
        .join("\n");
}