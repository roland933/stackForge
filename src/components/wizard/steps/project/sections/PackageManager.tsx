import { Package } from "lucide-react";

import { SectionHeader } from "@/components/common/SectionHeader";
import { OptionCard } from "@/components/common/OptionCard";

import {
    SiNpm,
    SiPnpm,
    SiYarn,
    SiBun,
} from "@/lib/icons/icons";
import { Grid } from "@/components/common/Grid";
import { useProject } from "../hooks/useProject";

export function PackageManager() {
    const { project, setProject } = useProject()
    return (
        <section className="space-y-6">

            <SectionHeader
                title="Package Manager"
                description="Choose your preferred package manager."
                icon={<Package className="h-5 w-5" />}
            />

            <Grid>
                <OptionCard
                    title="npm"
                    description="Default Node package manager"
                    icon={<SiNpm size={20} />}
                    selected={project.packageManager === "npm"}
                    onClick={() =>
                        setProject({
                            packageManager: "npm",
                        })
                    }
                />

                <OptionCard
                    title="pnpm"
                    description="Fast & efficient"
                    icon={<SiPnpm size={20} />}
                    selected={project.packageManager === "pnpm"}
                    onClick={() =>
                        setProject({
                            packageManager: "pnpm",
                        })
                    }

                />

                <OptionCard
                    title="yarn"
                    description="Classic alternative"
                    icon={<SiYarn size={20} />}
                    selected={project.packageManager === "yarn"}
                    onClick={() =>
                        setProject({
                            packageManager: "yarn",
                        })
                    }
                />

                <OptionCard
                    title="bun"
                    description="Modern JavaScript runtime"
                    icon={<SiBun size={20} />}
                    selected={project.packageManager === "bun"}
                    onClick={() =>
                        setProject({
                            packageManager: "bun",
                        })
                    }
                />

            </Grid>

        </section>
    );
}