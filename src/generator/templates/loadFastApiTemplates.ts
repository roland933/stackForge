import type { GeneratedFile } from "../types/GeneratedFile";

export function loadFastApiTemplates(): GeneratedFile[] {

    const templates = import.meta.glob(
        "../../templates/fastapi/**/*",
        {
            query: "?raw",
            import: "default",
            eager: true,
        }
    );

    const generatedFiles: GeneratedFile[] = [];

    Object.entries(templates).forEach(([path, content]) => {

        generatedFiles.push({
            path: `backend/${path.replace("../../templates/fastapi/", "")}`,
            content: content as string,
        });

    });

    return generatedFiles;
}