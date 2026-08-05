import { SectionHeader } from "@/components/common/SectionHeader";
import { OptionCard } from "@/components/common/OptionCard";



import { ShieldCheck,KeyRound,Shield } from "lucide-react";
export function Authentication() {
    return (
        <>
            <SectionHeader
                title="Authentication"
                description="Choose your Authentication."
                icon={<ShieldCheck className="h-5 w-5" />}
            />

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">

                <OptionCard
                    title="JWT"

                    icon={<KeyRound size={30} />}

                />

                <OptionCard
                    title="OAuth2"

                    icon={<KeyRound size={30} />}
                />

                <OptionCard
                    title="Session"

                    icon={<Shield size={30} />}
                />



            </div>
        </>
    )
}