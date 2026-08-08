import {  CardContent } from "@/components/ui/card";


export function Content({children}) {
    return(
        <CardContent className="space-y-8 p-8 overflow-y-auto h-[550px] custom-scrollbar">

                {children}

        </CardContent>
    )

}