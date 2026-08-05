import {  CardContent } from "@/components/ui/card";


export function Content({children}) {
    return(
        <CardContent className="space-y-10 p-8">

                {children}

        </CardContent>
    )

}