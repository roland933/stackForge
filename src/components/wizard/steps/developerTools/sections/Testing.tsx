import { SectionHeader } from "@/components/common/SectionHeader";
import { OptionCard } from "@/components/common/OptionCard";


import { FlaskConical,MonitorPlay } from "lucide-react";
import { Grid } from "@/components/common/Grid";

import {
     SiVitest,
     SiJest,
     SiCypress
} from "@/lib/icons/icons";



export function Testing() {
    return (
        <>
            <SectionHeader
                title="Testing"
                description="Choose your testing tools."
                icon={<FlaskConical className="h-5 w-5" />}
            />

            <Grid>

                <OptionCard
                    title="Vitest"
                    description="Modern SPA"
                    icon={<SiVitest size={30} />}
                   
                />

                <OptionCard
                    title="Jest"
                    description="Progressive"
                    icon={<SiJest size={30} />}
                />

                <OptionCard
                    title="Playwright"
                    description="Enterprise"
                    icon={<MonitorPlay size={30} />}
                />

                <OptionCard
                    title="Cypress"
                    description="Compiler"
                    icon={<SiCypress size={30} />}
                />

            </Grid>


           
        </>
    )
}