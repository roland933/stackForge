import { SectionHeader } from "@/components/common/SectionHeader";
import { OptionCard } from "@/components/common/OptionCard";

import {
    SiReactrouter,
} from "@/lib/icons/icons";

import { Route } from "lucide-react";

export function Routing() {
    return (
        <>
            <SectionHeader
                title="Routing"
                description="Select a router."
                icon={<Route className="h-5 w-5" />}
            />


            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">

                 <OptionCard
                    title="React Router"
                    description="Most popular"
                    icon={<SiReactrouter size={30} />}
                    selected
                />

                <OptionCard
                    title="TanStack Router"
                    description="Type-safe"
                    icon={<SiReactrouter size={30} />}
                />

            </div>
        </>
    )
}