import type { GeneratedFile } from "../types/GeneratedFile";

export function loadLaravelTemplates(): GeneratedFile[] {

    const templates = import.meta.glob(
        "../templates/laravel/**/*",
        {
            query: "?raw",
            import: "default",
            eager: true,
        }
    );

    const generatedFiles: GeneratedFile[] = [];

    Object.entries(templates).forEach(([path, content]) => {

        generatedFiles.push({
            path: path.replace("../templates/laravel/", ""),
            content: content as string,
        });

    });

 

    return generatedFiles;
}