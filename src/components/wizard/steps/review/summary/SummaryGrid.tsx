import type { ReactNode } from "react"

type Props = {
    children: ReactNode
}

export function SummaryGrid({children}:Props) {
    return (
        <div className="grid grid-cols-2 gap-4 rounded-xl border p-5">
            {children}
        </div>
    )

}