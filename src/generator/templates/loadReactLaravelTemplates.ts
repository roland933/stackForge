import type { GeneratedFile } from "../types/GeneratedFile";

export function loadReactLaravelTemplates(): GeneratedFile[] {

    const templates = import.meta.glob(
        "../templates/laravel-react/**/*",
        {
            query: "?raw",
            import: "default",
            eager: true,
        }
    );

    const generatedFiles: GeneratedFile[] = [];

    Object.entries(templates).forEach(([path, content]) => {

        generatedFiles.push({
            path: path.replace("../templates/laravel-react/", ""),
            content: content as string,
        });

    });

 

    return generatedFiles;
}