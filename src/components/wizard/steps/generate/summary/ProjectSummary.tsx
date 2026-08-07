import { Badge } from "@/components/ui/badge";
import { Summary } from "./Summary";
import { useProject } from "../../project/hooks/useProject";
import { buildSummary } from "@/lib/buildSummary";

export function ProjectSummary() {
    const {project,gitText} = useProject()
    const summary = buildSummary();
    const totalSelections = Object.values(summary).reduce((total, items) => total + items.length, 0);  

        return (
        <Summary title="Project Summary">
            <div className="space-y-4 text-sm">

              <div className="flex justify-between">
                <span className="text-muted-foreground">
                  Project
                </span>

                <span>{project.name}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-muted-foreground">
                  Package Manager
                </span>

                <Badge>{project.packageManager}</Badge>
              </div>

              <div className="flex justify-between">
                <span className="text-muted-foreground">
                  Git
                </span>

                <Badge>{gitText}</Badge>
              </div>

              <div className="flex justify-between">
                <span className="text-muted-foreground">
                  Technologies
                </span>

                <span>{totalSelections}</span>
              </div>

            </div>

          </Summary>

        )
}