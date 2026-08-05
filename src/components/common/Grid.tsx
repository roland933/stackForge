import type { ReactNode } from "react"

type Props = {
    children: ReactNode,
}

export function Grid({children}:Props) {
   
   return (<div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {children}
    </div>
   )
}