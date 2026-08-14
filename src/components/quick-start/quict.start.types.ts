import  { laravelReactPreset } from "@/presets/laravel-react.preset"
import { reactStarterPreset } from "@/presets/react.starter.preset"

export type quicktStartTypes = "react" | "react-laravel"

export const presets = {

    "react": reactStarterPreset,
    "react-laravel":laravelReactPreset
}