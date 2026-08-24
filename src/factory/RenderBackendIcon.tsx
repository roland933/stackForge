import { SiFastapi, SiLaravel,SiNodedotjs } from "react-icons/si";
type Props = {
    framework: string,
    width?:string,
    height?:string,
}

export function RenderBackendIcon({ framework,height="10", width="10" }: Props) {

    switch (framework) {
        case "laravel":
            return <SiLaravel className={`h-${height} w-${width} text-primary`} />
        case "fastapi":
            return <SiFastapi className={`h-${height} w-${width} text-primary`}/>

        case "node":
            return <SiNodedotjs className={`h-${height} w-${width} text-primary`} />;    

        default:
            return null;    

    }
}