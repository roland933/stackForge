

import type { IconType } from "react-icons/lib";
import { SiMysql,SiPostgresql,SiMongodb } from "react-icons/si";


export type DatabaseType = {
    id: string;
    name: string;
    description: string;
    defaultConfig:{port:number,username:string}
    icon: IconType;
};

export const Databases: DatabaseType[] = [
    {
        id: "mysql",
        name: "MySQL",
        description: "A popular open-source relational database.",
        icon: SiMysql,

        defaultConfig: {
            port: 3306,
            username: "root",
        },
    },

    {
        id: "postgresql",
        name: "PostgreSQL",
        description: "A powerful open-source relational database.",
        icon: SiPostgresql,

        defaultConfig: {
            port: 5432,
            username: "postgres",
        },
    },

    {
        id: "mongodb",
        name: "MongoDB",
        description: "A document-oriented NoSQL database.",
        icon: SiMongodb,

        defaultConfig: {
            port: 27017,
            username: "",
        },
    },
];