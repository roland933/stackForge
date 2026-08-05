import { Badge } from "@/components/ui/badge";

import {
    FolderOpen,

} from "lucide-react";
import { useProject } from "../../project/hooks/useProject";
import { SummaryHeader } from "../summary/SummaryHeader";
import { SummaryGrid } from "../summary/SummaryGrid";

export function ProjectSummary() {
    const { project, gitText } = useProject();
    return (
        <>

            <SummaryHeader title="Project"
                icon={<FolderOpen className="h-5 w-5 text-primary" />} />

            <SummaryGrid >

                <div>
                    <p className="text-sm text-muted-foreground">
                        Name
                    </p>

                    <p className="font-medium">
                        {project.name}
                    </p>
                </div>

                <div>
                    <p className="text-sm text-muted-foreground">
                        Package Manager
                    </p>

                    <Badge>{project.packageManager}</Badge>
                </div>

                <div className="col-span-2">
                    <p className="text-sm text-muted-foreground">
                        Description
                    </p>

                    <p className="font-medium">
                        {project?.description ?? "-"}
                    </p>
                </div>

                <div>
                    <p className="text-sm text-muted-foreground">
                        Git
                    </p>

                    <Badge>{gitText}</Badge>
                </div>

            </SummaryGrid>

        </>
    )

}