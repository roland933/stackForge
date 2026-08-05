import { Badge } from "@/components/ui/badge";
import {
    Wrench,
} from "lucide-react";

export function FeaturesSection() {
    return (
        <>

            <div className="flex items-center gap-2">

                <Wrench className="h-5 w-5 text-primary" />

                <h2 className="text-xl font-semibold">
                    Features
                </h2>

            </div>

            <div className="space-y-4 rounded-xl border p-5">

                <div>

                    <p className="mb-2 text-sm text-muted-foreground">
                        Quality
                    </p>

                    <div className="flex flex-wrap gap-2">
                        <Badge>ESLint</Badge>
                        <Badge>Prettier</Badge>
                    </div>

                </div>

                <div>

                    <p className="mb-2 text-sm text-muted-foreground">
                        Testing
                    </p>

                    <div className="flex flex-wrap gap-2">
                        <Badge>Vitest</Badge>
                    </div>

                </div>

                <div>

                    <p className="mb-2 text-sm text-muted-foreground">
                        Containers
                    </p>

                    <div className="flex flex-wrap gap-2">
                        <Badge>Docker</Badge>
                    </div>

                </div>

                <div>

                    <p className="mb-2 text-sm text-muted-foreground">
                        Tooling
                    </p>

                    <div className="flex flex-wrap gap-2">
                        <Badge>Storybook</Badge>
                        <Badge>Swagger</Badge>
                    </div>

                </div>

            </div>


        </>
    )
}