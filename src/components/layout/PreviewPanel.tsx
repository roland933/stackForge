import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

import {
    Folder,
    FolderOpen,
    Terminal,
    Package,
    GitBranch,
    Boxes,
} from "lucide-react";

export function PreviewPanel() {
    return (
        <aside className="w-[360px]">

            <Card className="h-full">

                <CardHeader>

                    <CardTitle>
                        Preview
                    </CardTitle>

                </CardHeader>

                <CardContent className="space-y-8">

                    {/* Project */}

                    <section className="space-y-3">

                        <div className="flex items-center gap-2 text-sm font-medium">

                            <FolderOpen className="h-4 w-4 text-primary" />

                            Project

                        </div>

                        <div className="rounded-lg border bg-muted/20 p-3">

                            <p className="font-medium">
                                stack-forge-app
                            </p>

                        </div>

                    </section>

                    {/* Stack */}

                    <section className="space-y-3">

                        <div className="flex items-center gap-2 text-sm font-medium">

                            <Boxes className="h-4 w-4 text-primary" />

                            Stack

                        </div>

                        <div className="flex flex-wrap gap-2">

                            <Badge>React</Badge>

                            <Badge>TypeScript</Badge>

                            <Badge>Tailwind</Badge>

                            <Badge>shadcn/ui</Badge>

                        </div>

                    </section>

                    {/* Package Manager */}

                    <section className="space-y-3">

                        <div className="flex items-center gap-2 text-sm font-medium">

                            <Package className="h-4 w-4 text-primary" />

                            Package Manager

                        </div>

                        <Badge variant="secondary">

                            pnpm

                        </Badge>

                    </section>

                    {/* Git */}

                    <section className="space-y-3">

                        <div className="flex items-center gap-2 text-sm font-medium">

                            <GitBranch className="h-4 w-4 text-primary" />

                            Git Repository

                        </div>

                        <Badge>

                            Enabled

                        </Badge>

                    </section>

                    {/* Commands */}

                    <section className="space-y-3">

                        <div className="flex items-center gap-2 text-sm font-medium">

                            <Terminal className="h-4 w-4 text-primary" />

                            Commands

                        </div>

                        <div className="space-y-2">

                            <div className="rounded-lg border bg-muted/20 p-2 font-mono text-xs">
                                npm create vite@latest
                            </div>

                            <div className="rounded-lg border bg-muted/20 p-2 font-mono text-xs">
                                npm install
                            </div>

                            <div className="rounded-lg border bg-muted/20 p-2 font-mono text-xs">
                                npm install react-router-dom
                            </div>

                            <div className="rounded-lg border bg-muted/20 p-2 font-mono text-xs">
                                npm install zustand
                            </div>

                        </div>

                    </section>

                    {/* Structure */}

                    <section className="space-y-3">

                        <div className="flex items-center gap-2 text-sm font-medium">

                            <Folder className="h-4 w-4 text-primary" />

                            Structure

                        </div>

                        <div className="rounded-lg border bg-muted/20 p-3 font-mono text-sm">

                            <div>📁 src</div>
                            <div className="ml-4">📁 components</div>
                            <div className="ml-4">📁 layouts</div>
                            <div className="ml-4">📁 pages</div>
                            <div className="ml-4">📁 hooks</div>
                            <div className="ml-4">📁 store</div>
                            <div className="ml-4">📁 assets</div>

                        </div>

                    </section>

                </CardContent>

            </Card>

        </aside>
    );
}