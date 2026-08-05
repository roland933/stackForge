import { SectionHeader } from "@/components/common/SectionHeader";
import { OptionCard } from "@/components/common/OptionCard";

import {
    SiEslint,
    SiPrettier,
   
    SiSvelte,
} from "@/lib/icons/icons";

import { BadgeCheck,Dog,ListChecks } from "lucide-react";
import { Grid } from "@/components/common/Grid";

export function Quality() {
    return (
        <>
            <SectionHeader
                title="Quality"
              description="Improve code quality and consistency."
                icon={<BadgeCheck className="h-5 w-5" />}
            />

            <Grid>

                <OptionCard
                    title="ESLint"
                    description="Modern SPA"
                    icon={<SiEslint size={30} />}
                   
                />

                <OptionCard
                    title="Prettier"
                    description="Progressive"
                    icon={<SiPrettier size={30} />}
                />

                <OptionCard
                    title="Husky"
                    description="Enterprise"
                    icon={<Dog size={30} />}
                />

                <OptionCard
                    title="Lint Staged"
                    description="Compiler"
                    icon={<ListChecks size={30} />}
                />

            </Grid>


           
        </>
    )
}