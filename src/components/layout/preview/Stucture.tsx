import { cn } from "@/lib/utils";
import { Folder } from "lucide-react";
const folders = [
  "src",
  "components",
  "layouts",
  "pages",
  "hooks",
  "store",
  "assets",
];
export function Structure() {
  return (
    <div className="rounded-lg border bg-muted/20 p-3 font-mono text-sm">
      {folders.map((value, index) => {
        return (
          <div
            key={value}
            className={cn("flex items-center gap-2", index > 0 && "ml-4")}
          >
            <Folder size={15}/>
            {value}
          </div>
        );
      })}
    </div>
  );
}
