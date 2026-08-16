import { slugifyProjectName } from "@/generator/download";
import type { GeneratedFile } from "@/generator/types/GeneratedFile";

const LOCAL_AGENT_URL = "http://127.0.0.1:8765";

type CreateProjectResponse = {
    status: string;
    project: string;
    path: string;
};

export async function createLocalProject(
    name: string,
    files: GeneratedFile[],
): Promise<CreateProjectResponse> {
    const response = await fetch(`${LOCAL_AGENT_URL}/projects`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name,
            files,
        }),
    });

    if (!response.ok) {
        const error = await response.json().catch(() => null);

        throw new Error(
            error?.detail ?? "Failed to create local project."
        );
    }

    return response.json();
}