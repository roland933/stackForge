import type { ReactNode } from "react"

type Props = {
    children:ReactNode
}

export function ConfigSection({children}:Props) {
    return (
          <div className="space-y-7">
            {children}
          </div>
    )
}