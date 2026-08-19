

import type { IconType } from "react-icons/lib";
import { SiMysql,SiPostgresql,SiMongodb } from "react-icons/si";


export type DatabaseType = {
    id: string;
    name: string;
    description: string;
    icon: IconType;
};

export const Databases: DatabaseType[] = [
    {
        id: "mysql",
        name: "MySQL",
        description: "A popular open-source relational database.",
        icon: SiMysql,
    },
    {
        id: "postgresql",
        name: "PostgreSQL",
        description: "A powerful open-source relational database.",
        icon: SiPostgresql,
    },
    {
        id: "mongodb",
        name: "MongoDB",
        description: "A document-oriented NoSQL database.",
        icon: SiMongodb,
    },
];