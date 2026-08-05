import { SectionHeader } from "@/components/common/SectionHeader";
import { OptionCard } from "@/components/common/OptionCard";

import {
    SiReact,
    SiVuedotjs,
    SiAngular,
    SiSvelte,
} from "@/lib/icons/icons";
import { Monitor } from "lucide-react";
import { Grid } from "@/components/common/Grid";
import { useFrontend } from "../hooks/useFrontend";

export function Framework() {
    const {frontend,setFrontend} = useFrontend()
    return (
        <>
            <SectionHeader
                title="Framework"
                description="Choose your frontend framework."
                icon={<Monitor className="h-5 w-5" />}
            />

           <Grid>

                <OptionCard
                    title="React"
                    description="Modern SPA"
                    icon={<SiReact size={30} />}
                    selected={frontend.framework === "react"}
                    onClick={() =>
                        setFrontend({
                            framework: "react",
                        })
                    }
                    
                    
                />

                <OptionCard
                    title="Vue"
                    description="Progressive"
                    icon={<SiVuedotjs size={30} />}
                     selected={frontend.framework === "vue"}
                    onClick={() =>
                        setFrontend({
                            framework: "vue",
                        })
                    }
                />

                <OptionCard
                    title="Angular"
                    description="Enterprise"
                    icon={<SiAngular size={30} />}
                     selected={frontend.framework === "angular"}
                    onClick={() =>
                        setFrontend({
                            framework: "angular",
                        })
                    }
                />

                <OptionCard
                    title="Svelte"
                    description="Compiler"
                    icon={<SiSvelte size={30} />}
                     selected={frontend.framework === "svelte"}
                    onClick={() =>
                        setFrontend({
                            framework: "svelte",
                        })
                    }
                />

           </Grid>
        </>
    )
}