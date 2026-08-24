
import { useState } from "react";
import { Frameworks } from "./common/Frameworks";
import { ConfigHeader } from "./common/ConfigHeader";
import { ConfigSection } from "./common/ConfigSection";

import { useServer } from "./hooks/useServer";
import { Servers } from "@/const/server";
import type { ServerId } from "@/types/states/server.state.type";

export type ServerConfigData = {
    server: ServerId | null;
};

type ServerConfigDataProps = {
    onChange: (config: ServerConfigData) => void;
};

export function ServerConfig({ onChange }: ServerConfigDataProps) {

    const { server } = useServer();

    const [framework, setFramework] = useState<string>(server.server);


    const handleSelectFramework = (id:string) => {
        setFramework(id)
       
        onChange({
            server:id as ServerId,
           
        })
    }


    return (
        <ConfigSection >

            <ConfigHeader title="Server" subTitle=" Choose your server" />

            <Frameworks 
                framework={framework}
                frameworks={Servers}
                handleSelectFramework={handleSelectFramework}
            />


       </ConfigSection>
    );
}