
import type { IconType } from "react-icons/lib";
import { SiReact, SiNextdotjs, SiVuedotjs } from "react-icons/si";

export type FrameworkType = {
    id:string,
    name:string,
    description:string,
    icon:IconType,
}


export const FrontendFrameworks:FrameworkType[] = [
    {
        id: "react",
        name: "React",
        description: "A JavaScript library for building user interfaces.",
        icon: SiReact,
    },
    {
        id: "next",
        name: "Next.js",
        description: "The React framework for the web.",
        icon: SiNextdotjs,
    },
    {
        id: "vue",
        name: "Vue",
        description: "The progressive JavaScript framework.",
        icon: SiVuedotjs,
    },
];