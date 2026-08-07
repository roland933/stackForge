import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type Props =  {
  title:string,
  children: ReactNode,
  className?:string,
}

export function Summary({ title, children,className }:Props) {
  return (
    <>
      <Card className={cn("p-6 space-y-5",className )}>

        <h3 className="text-lg font-semibold">
          {title}
        </h3>

        {children}

      </Card>

    </>
  )
}