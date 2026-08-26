

export interface DatabaseState {
    id:string | null,
    type: string | null;
    name: string | null;
    port: number | null;
    username: string;
}