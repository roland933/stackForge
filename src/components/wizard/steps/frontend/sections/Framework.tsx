import { SectionHeader } from "@/components/common/SectionHeader";
import { OptionCard } from "@/components/common/OptionCard";

import {
    SiReact,
    SiVuedotjs,
    SiAngular,
    SiSvelte,
} from "@/lib/icons/icons";
import { Monitor } from "lucide-react";

export function Framework() {
    return (
        <>
            <SectionHeader
                title="Framework"
                description="Choose your frontend framework."
                icon={<Monitor className="h-5 w-5" />}
            />

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">

                <OptionCard
                    title="React"
                    description="Modern SPA"
                    icon={<SiReact size={30} />}
                    selected
                />

                <OptionCard
                    title="Vue"
                    description="Progressive"
                    icon={<SiVuedotjs size={30} />}
                />

                <OptionCard
                    title="Angular"
                    description="Enterprise"
                    icon={<SiAngular size={30} />}
                />

                <OptionCard
                    title="Svelte"
                    description="Compiler"
                    icon={<SiSvelte size={30} />}
                />

            </div>
        </>
    )
}