import type { GeneratedFile } from "../types/GeneratedFile";
import type { StackForgeConfig } from "../types/StackForgeConfig";

export function loadReactTemplates(config:StackForgeConfig): GeneratedFile[] {

     const hasBackend = !!config.backend.framework;

    const templates = import.meta.glob(
        "../../templates/react/**/*",
        {
            query: "?raw",
            import: "default",
            eager: true,
        }
    );

    const generatedFiles: GeneratedFile[] = [];


    Object.entries(templates).forEach(([path, content]) => {

        generatedFiles.push({
          path: hasBackend
            ? `frontend/${path.replace("../../templates/react/", "")}`
            : path.replace("../../templates/react/", ""),
            content: content as string,
        });

    });

 

    return generatedFiles;
}