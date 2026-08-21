import { Blocks} from "lucide-react";

export function AppHeader() {
    return (
        <header className="flex h-16 items-center justify-between border-b px-6 justify-center">

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

        </header>
    );
}