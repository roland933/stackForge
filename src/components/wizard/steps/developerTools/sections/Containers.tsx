import { SectionHeader } from "@/components/common/SectionHeader";
import { OptionCard } from "@/components/common/OptionCard";

import {
    SiDocker,
} from "@/lib/icons/icons";

import { Container } from "lucide-react";
import { Grid } from "@/components/common/Grid";

export function Containers() {
    return (
        <>
            <SectionHeader
                title="Containers"
                description="Containerize your application."
                icon={<Container className="h-5 w-5" />}
            />

            <Grid>

                <OptionCard
                    title="Docker"
                    description="Modern SPA"
                    icon={<SiDocker size={30} />}
                    
                />

                <OptionCard
                    title="Docker Compose"
                    description="Progressive"
                    icon={<SiDocker size={30} />}
                />



            </Grid>



        </>
    )
}