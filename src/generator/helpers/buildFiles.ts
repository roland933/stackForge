import { buildNginx } from "../builders/buildNginx";
import { loadFastApiTemplates } from "../templates/loadFastApiTemplates";
import { loadLaravelTemplates } from "../templates/loadLaravelTemplates";
import { loadReactTemplates } from "../templates/loadReactTemplates";
import type { StackForgeConfig } from "../types/StackForgeConfig";
import { buildDockerCompose } from "./buildDockerCompose";
import { buildDockerFiles } from "./buildDockerFiles";
import { buildFastApiDockerCompose } from "./fastapi/buildFastApiDockerCompose";
import { buildPythonDependencies } from "./fastapi/buildPythonDependencies";
import { buildReactApp } from "./buildReactApp";


import { buildReactFiles } from "./react/buildReactFiles";
import { BuildDatabase } from "./fastapi/buildDatabase";
import { BuildMain } from "./fastapi/buildMaint";
import { buildReactApi } from "./react/buildReactApi";
import { buildReactQueries } from "./react/buildReactQueries";

export function buildFiles(config: StackForgeConfig) {


    const files = [];

    if (config.frontend.framework === "react") {
        files.push(
            ...loadReactTemplates(config),

        );
        files.push(
            ...buildReactFiles(config)
        )
    }


    if (config.backend.framework === "fastapi") {
        files.push(...loadFastApiTemplates());

        files.push({
            path: "frontend/src/api/api.ts",
            content: buildReactApi(config),
        });

        files.push({
            path: "frontend/src/queries/query.ts",
            content: buildReactQueries(config),
        });


        files.push({
            path: "frontend/src/App.tsx",
            content: buildReactApp(config),
        });

        files.push({
            path: "backend/requirements.txt",
            content: buildPythonDependencies(config),
        });

        files.push({
            path: "docker-compose.yml",
            content: buildFastApiDockerCompose(config),
        });


        if (config.backend.database) {
            files.push({
                path: "backend/app/database.py",
                content: BuildDatabase(config),
            });
        }

        files.push({
            path: "backend/app/main.py",
            content: BuildMain(config),
        });




    }


    if (config.backend.framework === "laravel") {
        files.push(
            ...loadLaravelTemplates()
        );

        files.push(
            ...buildDockerFiles(config)
        )

        files.push(
            {
                path: "nginx/default.conf",
                content: buildNginx(config)
            }
        )

        files.push(
            {
                path: "docker-compose.yml",
                content: buildDockerCompose(config),
            }
        );
    }

    return files;
}