import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ClipboardList } from "lucide-react";

export function GeneralInformation() {

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
                        placeholder="stack-forge-app"
                    />

                </div>

                <div className="space-y-2">

                    <Label>
                        Description
                    </Label>

                    <Textarea
                        rows={5}
                        placeholder="My awesome application..."
                    />

                </div>

            </section>
    )

}