import { SectionHeader } from "@/components/common/SectionHeader";
import { OptionCard } from "@/components/common/OptionCard";

import {
    SiLaravel,
    SiNestjs,
    SiAngular,
    SiSvelte,
    SiSymfony,
} from "@/lib/icons/icons";
import { Monitor } from "lucide-react";

export function Framework() {
    return (
        <>
            <SectionHeader
                title="Framework"
                description="Choose your backend framework."
                icon={<Monitor className="h-5 w-5" />}
            />

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">

                <OptionCard
                    title="Laravel"
                    description="Modern SPA"
                    icon={<SiLaravel size={30} />}
                   
                />

                <OptionCard
                    title="NestJS"
                    description="Progressive"
                    icon={<SiNestjs size={30} />}
                />

                <OptionCard
                    title="Symfony "
                    description="Enterprise"
                    icon={<SiSymfony size={30} />}
                />

              

            </div>
        </>
    )
}