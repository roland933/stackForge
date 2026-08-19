
import { useState } from "react";
import { Frameworks } from "./common/Frameworks";
import { ConfigHeader } from "./common/ConfigHeader";
import { ConfigSection } from "./common/ConfigSection";
import { useBackend } from "../wizard/steps/backend/hooks/useBackend";
import { Databases } from "@/const/databases";

export type DatabaseConfigData = {
    database: string;
};

type DatabaseConfigDataProps = {
    onChange: (config: DatabaseConfigData) => void;
};

export function DatabaseConfig({ onChange }: DatabaseConfigDataProps) {

    const { backend } = useBackend();

    const [framework, setFramework] = useState<string>(backend.database);


    const handleSelectFramework = (id:string) => {
        setFramework(id)
       
        onChange({
            database:id,
           
        })
    }


    return (
        <ConfigSection >

            <ConfigHeader title="Database" subTitle=" Choose your database" />

            <Frameworks 
                framework={framework}
                frameworks={Databases}
                handleSelectFramework={handleSelectFramework}
            />


       </ConfigSection>
    );
}