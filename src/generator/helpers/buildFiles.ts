import { buildNginx } from "../builders/buildNginx";
import { loadLaravelTemplates } from "../templates/loadLaravelTemplates";
import { loadReactTemplates } from "../templates/loadReactTemplates";
import type { StackForgeConfig } from "../types/StackForgeConfig";
import { buildDockerCompose } from "./buildDockerCompose";
import { buildDockerFiles } from "./buildDockerFiles";


import { buildReactFiles } from "./react/buildReactFiles";
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



    if (config.backend.framework === "laravel") {
        files.push(
            ...loadLaravelTemplates()
        );

        files.push(
            ...buildDockerFiles(config)
        )

        files.push(
          {
            path:"nginx/default.conf",
            content:buildNginx(config)
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