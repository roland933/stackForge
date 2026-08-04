import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
 icon: ReactNode;
};

export function PreviewSection({ title, children, icon }: Props) {
  return (
    <section className="space-y-3">
      <div className="flex items-center gap-2 text-sm font-medium">
         {icon}

        {title}
      </div>

      {children}
    </section>
  );
}
