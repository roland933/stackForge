import { useProject } from "@/components/wizard/steps/project/hooks/useProject"

export function Project() {
 const {project} = useProject()
    return(
          <div className="rounded-lg border bg-muted/20 p-3">

                            <p className="font-medium">
                                {project.name || "My project"}
                            </p>

                        </div>
    )

}