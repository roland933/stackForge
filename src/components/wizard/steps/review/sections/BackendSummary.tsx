import { Badge } from "@/components/ui/badge";

import {
    Server,
} from "lucide-react";

export function BackendSummary() {
    return (
        <>
                      <div className="flex items-center gap-2">

                        <Server className="h-5 w-5 text-primary" />

                        <h2 className="text-xl font-semibold">
                            Backend
                        </h2>

                    </div>

                    <div className="grid grid-cols-2 gap-4 rounded-xl border p-5">

                        <div>
                            <p className="text-sm text-muted-foreground">
                                Framework
                            </p>

                            <Badge>Laravel</Badge>
                        </div>

                        <div>
                            <p className="text-sm text-muted-foreground">
                                Database
                            </p>

                            <Badge>MySQL</Badge>
                        </div>

                        <div>
                            <p className="text-sm text-muted-foreground">
                                Authentication
                            </p>

                            <Badge>JWT</Badge>
                        </div>

                     

                    </div>

                    </>
    )
}