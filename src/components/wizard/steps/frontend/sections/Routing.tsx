import { SectionHeader } from "@/components/common/SectionHeader";
import { OptionCard } from "@/components/common/OptionCard";

import {
    SiReactrouter,
} from "@/lib/icons/icons";

import { Route } from "lucide-react";
import { useFrontend } from "../hooks/useFrontend";
import { Grid } from "@/components/common/Grid";

export function Routing() {
       const { frontend, setFrontend } = useFrontend()
    return (
        <>
            <SectionHeader
                title="Routing"
                description="Select a router."
                icon={<Route className="h-5 w-5" />}
            />


           <Grid>
                 <OptionCard
                    title="React Router"
                    description="Most popular"
                    selected={frontend.router === "react"}
                    icon={<SiReactrouter size={30} />}
                     onClick={() =>
                        setFrontend({
                            router: "react",
                        })
                    }
                    
                />

                <OptionCard
                    title="TanStack Router"
                    description="Type-safe"
                    selected={frontend.router === "tanstack"}
                    icon={<SiReactrouter size={30} />}
                       onClick={() =>
                        setFrontend({
                            router: "tanstack",
                        })
                    }
                />

          </Grid>
        </>
    )
}