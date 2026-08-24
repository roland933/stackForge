import {  SiKnexdotjs, SiReact, SiVueuse } from "react-icons/si";
type Props = {
    framework: string
    width?:string,
    height?:string
}

export function RenderFrontendIcon({ framework,width="10", height="10" }: Props) {

    switch (framework) {
        case "react":
            return <SiReact className={`h-${height} w-${width} text-primary`}/>
        case "vue":
            return <SiVueuse className={`h-${height} w-${width} text-primary`} />
        case "next":
            return <SiKnexdotjs className={`h-${height} w-${width} text-primary`}/>;    

        default:
            return null;    

    }
}