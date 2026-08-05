import {
    Card,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

import {
    FolderOpen,
    Monitor,
    Server,
    Wrench,
} from "lucide-react";

import { StepWizard } from "../../StepWizard";
import { WizardFooter } from "../../WizardFooter";
import { WizardHeader } from "../../WizardHeader";
import { Content } from "@/components/common/Content";

export function ReviewSetup() {
    return (
        <Card >
            <Content>

            <WizardHeader  title="Review Configuration"   subtitle="Review your project configuration before generating."/>

                <StepWizard />

                <Separator />

                {/* Project */}

                <section className="space-y-5">

                    <div className="flex items-center gap-2">

                        <FolderOpen className="h-5 w-5 text-primary" />

                        <h2 className="text-xl font-semibold">
                            Project
                        </h2>

                    </div>

                    <div className="grid grid-cols-2 gap-4 rounded-xl border p-5">

                        <div>
                            <p className="text-sm text-muted-foreground">
                                Name
                            </p>

                            <p className="font-medium">
                                Stack Forge
                            </p>
                        </div>

                        <div>
                            <p className="text-sm text-muted-foreground">
                                Package Manager
                            </p>

                            <Badge>pnpm</Badge>
                        </div>

                        <div className="col-span-2">
                            <p className="text-sm text-muted-foreground">
                                Description
                            </p>

                            <p className="font-medium">
                                Modern React application generator.
                            </p>
                        </div>

                        <div>
                            <p className="text-sm text-muted-foreground">
                                Git
                            </p>

                            <Badge>Enabled</Badge>
                        </div>

                    </div>

                </section>

                {/* Frontend */}

                <section className="space-y-5">

                    <div className="flex items-center gap-2">

                        <Monitor className="h-5 w-5 text-primary" />

                        <h2 className="text-xl font-semibold">
                            Frontend
                        </h2>

                    </div>

                    <div className="grid grid-cols-2 gap-4 rounded-xl border p-5">

                        <div>
                            <p className="text-sm text-muted-foreground">
                                Framework
                            </p>

                            <Badge>React</Badge>
                        </div>

                        <div>
                            <p className="text-sm text-muted-foreground">
                                Router
                            </p>

                            <Badge>React Router</Badge>
                        </div>

                        <div>
                            <p className="text-sm text-muted-foreground">
                                State
                            </p>

                            <Badge>Zustand</Badge>
                        </div>

                        <div>
                            <p className="text-sm text-muted-foreground">
                                Styling
                            </p>

                            <div className="flex gap-2">
                                <Badge>Tailwind</Badge>
                            </div>
                        </div>

                    </div>

                </section>

                {/* Backend */}

                <section className="space-y-5">

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

                </section>

                {/* Features */}

                <section className="space-y-5">

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

                </section>

           </Content>

            <WizardFooter />

        </Card>
    );
}