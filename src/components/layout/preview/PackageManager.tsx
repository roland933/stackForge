import { Badge } from "@/components/ui/badge";
import { useProject } from "@/components/wizard/steps/project/hooks/useProject";
export function PackageManager() {
    const {project} = useProject()
    return (
          <Badge variant="secondary">{project?.packageManager ?? "-" }</Badge>
    )
}