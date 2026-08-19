import type { IconType } from "react-icons/lib";
import { SiTailwindcss, SiBootstrap, SiBulma } from "react-icons/si";

export type FrameworkType = {
    id: string;
    name: string;
    description: string;
    icon: IconType;
};

export const StylingFrameworks: FrameworkType[] = [
    {
        id: "tailwind",
        name: "Tailwind CSS",
        description: "A utility-first CSS framework for rapidly building custom interfaces.",
        icon: SiTailwindcss,
    },
    {
        id: "bootstrap",
        name: "Bootstrap",
        description: "A popular CSS framework for building responsive web interfaces.",
        icon: SiBootstrap,
    },
    {
        id: "bulma",
        name: "Bulma",
        description: "A modern CSS framework based on Flexbox.",
        icon: SiBulma,
    },
] as const;