import { GitBranch } from "lucide-react";

import { SectionHeader } from "@/components/common/SectionHeader";

import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export function GitRepository() {
    return (
        <section className="space-y-6  flex-1 rounded-2xl">

            <SectionHeader
                title="Git Repository"
                description="Initialize a local Git repository."
                icon={<GitBranch className="h-5 w-5" />}
            />

            <Card className="p-5">

                <div className="flex items-start gap-4">

                    <Checkbox
                        id="git"
                        defaultChecked
                    />

                    <div className="space-y-1">

                        <Label
                            htmlFor="git"
                            className="cursor-pointer text-base font-medium"
                        >
                            Initialize Git Repository
                        </Label>

                        <p className="text-sm text-muted-foreground">
                            Automatically create a local Git repository
                            after generating the project.
                        </p>

                    </div>

                </div>

            </Card>

        </section>
    );
}