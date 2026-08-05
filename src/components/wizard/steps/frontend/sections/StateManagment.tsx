import { SectionHeader } from "@/components/common/SectionHeader";
import { OptionCard } from "@/components/common/OptionCard";

import {

    SiRedux,
    SiMobx,

} from "@/lib/icons/icons";

import { Boxes } from "lucide-react";
import { useFrontend } from "../hooks/useFrontend";
import { Grid } from "@/components/common/Grid";

export function StateManagment() {
    const { frontend, setFrontend } = useFrontend()
    return (
        <>
            <SectionHeader
                title="State Management"
                description="Choose your state library."
                icon={<Boxes className="h-5 w-5" />}
            />

            <Grid>

                <OptionCard
                    title="Zustand"
                    description="Lightweight"
                    selected={frontend.stateManagement === "zustand"}
                    icon={<Boxes size={30} />}
                    onClick={() =>
                        setFrontend({
                            stateManagement: "zustand",
                        })
                    }

                />

                <OptionCard
                    title="Redux"
                    description="Toolkit"
                    selected={frontend.stateManagement === "redux"}
                    icon={<SiRedux size={30} />}
                     onClick={() =>
                        setFrontend({
                            stateManagement: "redux",
                        })
                    }
                />

                <OptionCard
                    title="MobX"
                    selected={frontend.stateManagement === "mobx"}
                    description="Observable"
                    icon={<SiMobx size={30} />}
                    onClick={() =>
                        setFrontend({
                            stateManagement: "mobx",
                        })
                    }
                />



            </Grid>
        </>
    )
}