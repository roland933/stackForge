import type { GeneratedFile } from "../types/GeneratedFile";

export function loadFastApiFrontendTemplates(): GeneratedFile[] {

    const templates = import.meta.glob(
        "../../templates/fastapi-frontend/**/*",
        {
            query: "?raw",
            import: "default",
            eager: true,
        }
    );

    const generatedFiles: GeneratedFile[] = [];

    Object.entries(templates).forEach(([path, content]) => {

        generatedFiles.push({
            path: `frontend/src/${path.replace("../../templates/fastapi-frontend/", "")}`,
            content: content as string,
        });

    });

    return generatedFiles;
}