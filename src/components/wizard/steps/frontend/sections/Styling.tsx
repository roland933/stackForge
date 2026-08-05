import { SectionHeader } from "@/components/common/SectionHeader";
import { OptionCard } from "@/components/common/OptionCard";

import {
    SiTailwindcss,
    SiBootstrap,
    SiMui,
    SiChakraui,
} from "@/lib/icons/icons";
import { Palette } from "lucide-react";
import { useFrontend } from "../hooks/useFrontend";
import { Grid } from "@/components/common/Grid";

export function Styling() {
    const { frontend, setFrontend } = useFrontend()
    return (
        <>
            <SectionHeader
                title="Styling"
                description="Choose a styling solution."
                icon={<Palette className="h-5 w-5" />}
            />

            <Grid>

                <OptionCard
                    title="Tailwind"
                    description="Utility first"
                    icon={<SiTailwindcss size={30} />}
                    selected={frontend.styling.includes("tailwind")}
                    onClick={() =>
                        setFrontend({
                            styling: [...frontend.styling,"tailwind"]
                        })
                    }

                />

                <OptionCard
                    title="Bootstrap"
                    description="Classic CSS"
                    selected={frontend.styling.includes("bootstrap")}
                    icon={<SiBootstrap size={30} />}
                />

                <OptionCard
                    title="Material UI"
                    description="Google Design"
                    selected={frontend.styling.includes("material")}
                    icon={<SiMui size={30} />}
                      onClick={() =>
                        setFrontend({
                            styling: [...frontend.styling,"material"]
                        })
                    }
                />

                <OptionCard
                    title="Chakra UI"
                    description="Accessible"
                    selected={frontend.styling.includes("chakra")}
                    icon={<SiChakraui size={30} />}
                      onClick={() =>
                        setFrontend({
                            styling: [...frontend.styling,"chakra"]
                        })
                    }
                />
            </Grid>
        </>
    )
}