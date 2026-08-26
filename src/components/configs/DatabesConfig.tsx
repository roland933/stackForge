
import { useState } from "react";
import { Frameworks } from "./common/Frameworks";
import { ConfigHeader } from "./common/ConfigHeader";
import { ConfigSection } from "./common/ConfigSection";
import { Databases } from "@/const/databases";
import { DatabaseConfigForm } from "./forms/DatabaseConfigForm";
import { useDatabase } from "./hooks/useDatabase";

export type DatabaseConfigData = {
    id: string;
    port: number;
    username: string;
};

type DatabaseConfigDataProps = {
    onChange: (config: DatabaseConfigData) => void;
};

export function DatabaseConfig({ onChange }: DatabaseConfigDataProps) {

    const { database } = useDatabase();

    const [framework, setFramework] = useState<string>(database.id);


    const handleSelectFramework = (id: string) => {
        setFramework(id);

        const selectedDatabase = Databases.find(
            (database) => database.id === id
        );

        if (!selectedDatabase) {
            return;
        }

        onChange({
            id: selectedDatabase.id,
            port: selectedDatabase.defaultConfig.port,
            username: selectedDatabase.defaultConfig.username,
        });
    };


    return (
        <ConfigSection >

            <ConfigHeader title="Database" subTitle=" Choose your database" />

            <Frameworks
                framework={framework}
                frameworks={Databases}
                handleSelectFramework={handleSelectFramework}
            />

            <DatabaseConfigForm />


        </ConfigSection>
    );
}