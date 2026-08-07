import type { GeneratedFile } from "./types/GeneratedFile";

export function loadTemplates(): GeneratedFile[] {

    const templates = import.meta.glob(
        "../templates/react/**/*",
        {
            query: "?raw",
            import: "default",
            eager: true,
        }
    );

    const generatedFiles: GeneratedFile[] = [];

    Object.entries(templates).forEach(([path, content]) => {

        generatedFiles.push({
            path: path.replace("../templates/react/", ""),
            content: content as string,
        });

    });

 

    return generatedFiles;
}