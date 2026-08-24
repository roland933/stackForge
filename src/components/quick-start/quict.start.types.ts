import { fastapiPreset } from "@/presets/fastapi.preset"
import  { laravelReactPreset } from "@/presets/laravel-react.preset"
import { reactStarterPreset } from "@/presets/react.starter.preset"

export type quicktStartTypes = "react" | "react-laravel" | "fastapi"

export const presets = {

    "react": reactStarterPreset,
    "react-laravel":laravelReactPreset,
    "fastapi": fastapiPreset
}