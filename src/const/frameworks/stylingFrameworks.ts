import type { IconType } from "react-icons/lib";
import { SiTailwindcss, SiBootstrap, SiBulma } from "react-icons/si";
import type { DependenciType } from "../dependencies/DependencyType";

export type FrameworkType = {
    id: string,
    name: string,
    description: string,
    icon: IconType,
    dependencies?: DependenciType[];
}

export const StylingFrameworks: FrameworkType[] = [
    {
        id: "tailwind",
        name: "Tailwind CSS",
        description:
            "A utility-first CSS framework for rapidly building custom interfaces.",
        icon: SiTailwindcss,
        dependencies: [
            {
                id: "shadcn",
                name: "shadcn/ui",
            },
            {
                id: "daisyui",
                name: "daisyUI",
            },
            {
                id: "flowbite",
                name: "Flowbite",
            },
        ],
    },

    {
        id: "bootstrap",
        name: "Bootstrap",
        description:  "A popular CSS framework for building responsive web interfaces.",
        icon: SiBootstrap,
        dependencies: [
            {
                id: "react-bootstrap",
                name: "React Bootstrap",
            },
            {
                id: "mdb",
                name: "MDB",
            },
        ],
    },

    {
        id: "bulma",
        name: "Bulma",
        description:
            "A modern CSS framework based on Flexbox.",
        icon: SiBulma,
        dependencies: [
            {
                id: "buefy",
                name: "Buefy",
            },
        ],
    },
] as const;