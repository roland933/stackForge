import { Package } from "lucide-react";

import { SectionHeader } from "@/components/common/SectionHeader";
import { OptionCard } from "@/components/common/OptionCard";

import {
    SiNpm,
    SiPnpm,
    SiYarn,
    SiBun,
} from "@/lib/icons/icons";

export function PackageManager() {
    return (
        <section className="space-y-6">

            <SectionHeader
                title="Package Manager"
                description="Choose your preferred package manager."
                icon={<Package className="h-5 w-5" />}
            />

            <div className="grid grid-cols-2 gap-4">

                <OptionCard
                    title="npm"
                    description="Default Node package manager"
                    icon={<SiNpm size={20} />}
                />

                <OptionCard
                    title="pnpm"
                    description="Fast & efficient"
                    icon={<SiPnpm size={20} />}
                    selected
                />

                <OptionCard
                    title="yarn"
                    description="Classic alternative"
                    icon={<SiYarn size={20} />}
                />

                <OptionCard
                    title="bun"
                    description="Modern JavaScript runtime"
                    icon={<SiBun size={20} />}
                />

            </div>

        </section>
    );
}