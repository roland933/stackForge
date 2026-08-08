
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
 icon: ReactNode;
 iconColor?:string
};

export function PreviewSection({ title, children, icon,iconColor }: Props) {
  return (
    <section className="space-y-3">
      <div className="flex items-center gap-2 text-sm font-medium">
        <div className={cn("flex h-7 w-7 items-center justify-center rounded-lg",iconColor)}>
         {icon}
        </div>
        {title}
      </div>

      {children}
    </section>
  );
}
