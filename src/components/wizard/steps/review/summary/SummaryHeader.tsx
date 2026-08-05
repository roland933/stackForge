import type { ReactNode } from "react"

type Props = {
    title:string,
    icon: ReactNode
}

export function SummaryHeader({title,icon}:Props) {
    return (
          <div className="flex items-center gap-2">

                        {icon}

                        <h2 className="text-xl font-semibold">
                            {title}
                        </h2>

               </div>
    )
}