import { SectionHeader } from "@/components/common/SectionHeader";
import { OptionCard } from "@/components/common/OptionCard";

import {
    SiMongodb,
    SiMysql,
    SiPostgresql
} from "@/lib/icons/icons";

import { Database as DatabaseIcon } from "lucide-react";

export function Database() {
    return (
        <>
            <SectionHeader
                title="Database"
                description="Choose your Database."
                icon={<DatabaseIcon className="h-5 w-5" />}
            />

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">

                <OptionCard
                    title="PostgreSQL"
                    description="Modern SPA"
                    icon={<SiPostgresql size={30} />}
                   
                />

                <OptionCard
                    title="MySQL"
                    description="Progressive"
                    icon={<SiMysql size={30} />}
                />

                <OptionCard
                    title="MongoDB"
                    description="Enterprise"
                    icon={<SiMongodb size={30} />}
                />

                <OptionCard
                    title="SQLite"
                    description="Compiler"
                    icon={<SiMysql size={30} />}
                />

            </div>
        </>
    )
}