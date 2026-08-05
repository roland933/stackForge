import { SectionHeader } from "@/components/common/SectionHeader";
import { OptionCard } from "@/components/common/OptionCard";

import {
    SiTailwindcss,
    SiBootstrap,
    SiMui,
    SiChakraui,
} from "@/lib/icons/icons";
import { Palette } from "lucide-react";

export function Styling() {
    return (
        <>
            <SectionHeader
                title="Styling"
                description="Choose a styling solution."
                icon={<Palette className="h-5 w-5" />}
            />

           <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">

                <OptionCard
                    title="Tailwind"
                    description="Utility first"
                    icon={<SiTailwindcss size={30} />}
                    
                />

                <OptionCard
                    title="Bootstrap"
                    description="Classic CSS"
                    icon={<SiBootstrap size={30} />}
                />

                <OptionCard
                    title="Material UI"
                    description="Google Design"
                    icon={<SiMui size={30} />}
                />

                <OptionCard
                    title="Chakra UI"
                    description="Accessible"
                    icon={<SiChakraui size={30} />}
                />
            </div>
        </>
    )
}