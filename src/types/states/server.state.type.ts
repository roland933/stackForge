export type ServerId = "nginx" | "apache" | "caddy";

export type ServerState = {
    server: ServerId | null;
};