import { SectionHeader } from "@/components/common/SectionHeader";
import { OptionCard } from "@/components/common/OptionCard";

import {
    SiStorybook,
    SiSwagger,
} from "@/lib/icons/icons";

import { Wrench } from "lucide-react";
import { Grid } from "@/components/common/Grid";

export function Tools() {
    return (
        <>
            <SectionHeader
                title="Tools"
                description="Additional tools for development."
                icon={<Wrench className="h-5 w-5" />}
            />

            <Grid>

                <OptionCard
                    title="Storybook"
                    description="Modern SPA"
                    icon={<SiStorybook size={30} />}
                   
                />

                <OptionCard
                    title="Swagger"
                    description="Progressive"
                    icon={<SiSwagger size={30} />}
                />



            </Grid>



        </>
    )
}