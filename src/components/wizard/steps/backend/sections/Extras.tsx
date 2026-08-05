import { SectionHeader } from "@/components/common/SectionHeader";
import { OptionCard } from "@/components/common/OptionCard";

import {
    SiDocker,
    SiRedis,
    SiSwagger,
} from "@/lib/icons/icons";

import { Sparkles,Workflow } from "lucide-react";

export function Extras() {
    return (
        <>
            <SectionHeader
                title="Extras"
                description="Choose an Extra."
                icon={<Sparkles className="h-5 w-5" />}
            />

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">

                <OptionCard
                    title="Docker"
                    description="Modern SPA"
                    icon={<SiDocker size={30} />}
                   
                />

                <OptionCard
                    title="Redis"
                    description="Progressive"
                    icon={<SiRedis size={30} />}
                />

                <OptionCard
                    title="Swagger"
                    description="Enterprise"
                    icon={<SiSwagger size={30} />}
                />

                <OptionCard
                    title="Queue"
                    description="Compiler"
                    icon={<Workflow size={30} />}
                />

            </div>
        </>
    )
}