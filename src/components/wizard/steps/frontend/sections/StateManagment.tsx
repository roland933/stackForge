import { SectionHeader } from "@/components/common/SectionHeader";
import { OptionCard } from "@/components/common/OptionCard";

import {
   
    SiRedux,
    SiMobx,
    
} from "@/lib/icons/icons";

import { Boxes } from "lucide-react";

export function StateManagment() {
    return (
        <>
            <SectionHeader
                title="State Management"
                description="Choose your state library."
                icon={<Boxes className="h-5 w-5" />}
            />

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">

                <OptionCard
                    title="Zustand"
                    description="Lightweight"
                    icon={<Boxes size={30} />}
                    selected
                />

                <OptionCard
                    title="Redux"
                    description="Toolkit"
                    icon={<SiRedux size={30} />}
                />

                <OptionCard
                    title="MobX"
                    description="Observable"
                    icon={<SiMobx size={30} />}
                />

               

            </div>
        </>
    )
}