export type BackendState = {
    framework: string | null;
    database: string | null;
    authentication: string | null;
    extras?: string[];
    dependencies: string[];
};