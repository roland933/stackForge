import { Settings } from "lucide-react";
import { Button } from "../ui/button";

export function CardHeader({ title, subTitle, onConfigure, children }) {
  return (
    <div className="flex items-start justify-between">
      <div>
        <h2 className="text-lg font-semibold">{title}</h2>

        <p className="mt-1 text-sm text-muted-foreground">
          {subTitle}
        </p>
      </div>

      <Button
        variant="outline"
        size="icon"
        onClick={onConfigure}
        className="h-10 w-10 shrink-0 rounded-xl"
      >
        <Settings className="!h-6 !w-6" />
        <span className="sr-only">Configure {title}</span>
      </Button>
    </div>
  );
}
