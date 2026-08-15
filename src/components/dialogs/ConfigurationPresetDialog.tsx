import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { Code2, Database, Layers, Server } from "lucide-react";

import { OptionCard } from "@/components/common/OptionCard";
import { SiLaravel, SiMysql, SiPostgresql, SiPython, SiReact, SiVueuse } from "@icons-pack/react-simple-icons";

type Props = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
};



export function ConfigurationPresetDialog({
    open,
    onOpenChange,
   
}: Props) {
    
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-4xl">

                <DialogHeader>
                    <div className="flex items-center gap-3">

                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                            <Layers className="h-5 w-5" />
                        </div>

                        <div>
                            <DialogTitle className="text-xl">
                                Configuration Preset  
                               
                            </DialogTitle>

                            <DialogDescription>
                                Customize your project configuration before
                                generating it.
                            </DialogDescription>
                        </div>

                    </div>
                </DialogHeader>

                <Separator />

                <div className="max-h-[65vh] space-y-8 overflow-y-auto pr-2 custom-scrollbar">

                    {/* Frontend */}
                    <section className="space-y-4">

                        <div className="flex items-center gap-2">
                            <Code2 className="h-5 w-5 text-primary" />

                            <div>
                                <h3 className="font-semibold">
                                    Frontend
                                </h3>

                                <p className="text-sm text-muted-foreground">
                                    Choose your frontend framework and tools.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3">

                            <OptionCard
                                title="React"
                                description="React with TypeScript"
                                icon={<SiReact />}
                                selected
                            />

                            <OptionCard
                                title="Vue"
                                description="Vue with TypeScript"
                                icon={<SiVueuse />}
                            />

                        </div>

                    </section>

                    <Separator />

                    {/* Backend */}
                    <section className="space-y-4">

                        <div className="flex items-center gap-2">
                            <Server className="h-5 w-5 text-primary" />

                            <div>
                                <h3 className="font-semibold">
                                    Backend
                                </h3>

                                <p className="text-sm text-muted-foreground">
                                    Choose an optional backend framework.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3">

                            <OptionCard
                                title="Laravel"
                                description="PHP framework"
                                icon={<SiLaravel />}
                                selected
                            />

                            <OptionCard
                                title="FastAPI"
                                description="Python API framework"
                                icon={<SiPython />}
                            />

                         

                        </div>

                    </section>

                    <Separator />

                    {/* Database */}
                    <section className="space-y-4">

                        <div className="flex items-center gap-2">
                            <Database className="h-5 w-5 text-primary" />

                            <div>
                                <h3 className="font-semibold">
                                    Database
                                </h3>

                                <p className="text-sm text-muted-foreground">
                                    Select your database engine.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3">

                            <OptionCard
                                title="MySQL"
                                description="MySQL 8"
                                icon={<SiMysql />}
                                selected
                            />

                            <OptionCard
                                title="PostgreSQL"
                                description="PostgreSQL"
                                icon={<SiPostgresql />}
                            />

                        </div>

                    </section>

                </div>

                <DialogFooter className="pt-4">

                    <Button
                        variant="outline"
                        onClick={() => onOpenChange(false)}
                    >
                        Cancel
                    </Button>

                    <Button>
                        Apply Configuration
                    </Button>

                </DialogFooter>

            </DialogContent>
        </Dialog>
    );
}