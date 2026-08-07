import type { GeneratedFile } from "./GeneratedFile";

export interface GeneratedProject {

    files: GeneratedFile[];

    packageManager: string;

    projectName: string;

}