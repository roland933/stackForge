import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ClipboardList } from "lucide-react";
import { useProject } from "../hooks/useProject";

export function GeneralInformation() {

    const {project,setProject} = useProject()

    return (
                    <section className="space-y-6">

                <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <ClipboardList className="h-5 w-5" />
                    </div>

                    <div>

                        <h2 className="text-2xl font-semibold">
                            General Information
                        </h2>

                        <p className="text-sm text-muted-foreground">
                            Configure the basic information for your project.
                        </p>

                    </div>

                </div>

                <div className="space-y-2">

                    <Label>
                        Project Name
                    </Label>

                    <Input
                        placeholder="My project"
                         value={project.name}
                        onChange={(e) =>
                            setProject({
                                name: e.target.value,
                            })
                        }
                    />

                </div>

                <div className="space-y-2">

                    <Label>
                        Description
                    </Label>

                    <Textarea
                        rows={5}
                        value={project.description}
                        placeholder="My awesome application..."
                          onChange={(e) =>
                            setProject({
                                description: e.target.value,
                            })
                        }
                    />

                </div>

            </section>
    )

}