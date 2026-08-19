
import type { IconType } from "react-icons/lib";
import { SiReact, SiNextdotjs, SiVuedotjs, SiLaravel, SiFastapi, SiNodedotjs } from "react-icons/si";
import type { DependenciType } from "../dependencies/DependencyType";

export type FrameworkType = {
    id: string,
    name: string,
    description: string,
    icon: IconType,
    dependencies?: DependenciType[];
}

export const FrontendFrameworks: FrameworkType[] = [
    {
        id: "react",
        name: "React",
        description: "A JavaScript library for building user interfaces.",
        icon: SiReact,
        dependencies: [
            {
                id: "react-router",
                name: "React Router",
            },
            {
                id: "zustand",
                name: "Zustand",
            },
            {
                id: "tanstack-query",
                name: "TanStack Query",
            },
            {
                id: "axios",
                name: "Axios",
            },
        ],
    },

    {
        id: "next",
        name: "Next.js",
        description: "The React framework for the web.",
        icon: SiNextdotjs,
        dependencies: [
            {
                id: "zustand",
                name: "Zustand",
            },
            {
                id: "tanstack-query",
                name: "TanStack Query",
            },
            {
                id: "axios",
                name: "Axios",
            },
        ],
    },

    {
        id: "vue",
        name: "Vue",
        description: "The progressive JavaScript framework.",
        icon: SiVuedotjs,
        dependencies: [
            {
                id: "vue-router",
                name: "Vue Router",
            },
            {
                id: "pinia",
                name: "Pinia",
            },
            {
                id: "vueuse",
                name: "VueUse",
            },
            {
                id: "axios",
                name: "Axios",
            },
        ],
    },
];

export const BackendFrameworks: FrameworkType[] = [
    {
        id: "laravel",
        name: "Laravel",
        description: "",
        icon: SiLaravel,
        dependencies: [
            {
                id: "sanctum",
                name: "Laravel Sanctum",
            },
            {
                id: "socialite",
                name: "Laravel Socialite",
            },
            {
                id: "spatie-permission",
                name: "Spatie Permission",
            },
            {
                id: "horizon",
                name: "Laravel Horizon",
            },
        ]
    },
    {
        id: "fastapi",
        name: "FastAPI",
        description: ".",
        icon: SiFastapi,
        dependencies: [
             
            {
                id: "sqlalchemy",
                name: "SQLAlchemy",
            },
            {
                id: "alembic",
                name: "Alembic",
            },
            {
                id: "python-jose",
                name: "Python-JOSE",
            },
        
        ]
    },
    {
        id: "node",
        name: "Node.js",
        description: "",
        icon: SiNodedotjs,
         dependencies: [
            {
                id: "express",
                name: "Express",
            },
            {
                id: "cors",
                name: "CORS",
            },
            {
                id: "jsonwebtoken",
                name: "JSON Web Token",
            },
        ],
    },
] as const;