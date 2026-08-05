import { Badge } from "@/components/ui/badge";
import { useProject } from "@/components/wizard/steps/project/hooks/useProject";
export function Git() {
     const {project} = useProject()
    return (
        <Badge>{project.git ? "enabled": "disabled"}</Badge>
    )
}