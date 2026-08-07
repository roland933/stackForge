import { buildSummary } from "@/lib/buildSummary";
import { Badge } from "../ui/badge";


export function SelectedStack() {
    const summary = buildSummary();

    return (
          <div className="flex flex-wrap gap-2">
           
            {summary.frontend.map((item) => (
                <Badge key={item}>
                   
                    {item}
                </Badge>
            ))}

             {summary.backend.map((item) => (
                <Badge key={item}>
                    {item}
                </Badge>
            ))}

             {summary.features.map((item) => (
                <Badge key={item}>
                    {item}
                </Badge>
            ))}
       </div>
    );
}