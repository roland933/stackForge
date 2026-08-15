import type { GeneratedFile } from "../types/GeneratedFile";

export function loadLaravelTemplates(): GeneratedFile[] {

    const templates = import.meta.glob(
        "../../templates/laravel/**/*",
        {
            query: "?raw",
            import: "default",
            eager: true,
        }
    );

    const generatedFiles: GeneratedFile[] = [];

    console.log("Laravel templates:", templates);

    Object.entries(templates).forEach(([path, content]) => {

        generatedFiles.push({
          path: `backend/${path.replace("../../templates/laravel/","")}`,
            content: content as string,
        });

    });

 

    return generatedFiles;
}