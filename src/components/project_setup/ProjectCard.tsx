import { FolderKanban } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ProjectCard() {
    return (
        <div className="rounded-xl border bg-card p-5">
            <div className="mb-5 flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <FolderKanban className="h-5 w-5" />
                </div>

                <div>
                    <h2 className="font-semibold">
                        Project
                    </h2>

                    <p className="text-sm text-muted-foreground">
                        Set the basic information for your project.
                    </p>
                </div>
            </div>

            <div className="space-y-5">

                <div className="space-y-2">
                    <Label htmlFor="project-name">
                        Project name
                    </Label>

                    <Input
                        id="project-name"
                        placeholder="My Project"
                    />
                </div>

      

            </div>
        </div>
    );
}