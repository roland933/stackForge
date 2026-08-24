

import type { ServerId } from "@/types/states/server.state.type";
import type { IconType } from "react-icons/lib";
import { SiNginx,SiApache } from "react-icons/si";


export type ServerType = {
    id: ServerId;
    name: string;
    description: string;
    icon: IconType;
};

export const Servers: ServerType[] = [
    {
        id: "nginx",
        name: "Nginx",
        description: "A high-performance web server and reverse proxy.",
        icon: SiNginx,
    },
    {
        id: "apache",
        name: "Apache",
        description: "A widely used open-source web server.",
        icon: SiApache,
    },
];