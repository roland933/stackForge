import { Blocks, Moon, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
type Props = {
    openQuickStartDialog:() => void
}
export function AppHeader() {
    return (
        <header className="flex h-16 items-center justify-between border-b px-6">

            <div className="flex items-center gap-3">

                <Blocks className="text-primary" />

                <div>

                    <h1 className="font-semibold">
                        Stack Forge
                    </h1>

                    <p className="text-xs text-muted-foreground">
                        Build your next project
                    </p>

                </div>

            </div>

    

            <div className="flex gap-2">

                <Button variant="ghost" size="icon">
                    <Moon size={18} className="!w-6 !h-6"/>
                </Button>

            </div>

        </header>
    );
}