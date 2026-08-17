
import { dependencies } from "@/const/dependencies/react/dependencies";
import { FrontendFrameworks } from "@/const/frameworks/frameworks";

import { useState } from "react";
import { useFrontend } from "../wizard/steps/frontend/hooks/useFrontend";
import { Frameworks } from "./common/Frameworks";
import { Dependencies } from "./common/Dependencies";

export type FrontendConfigData = {
    framework: string;
    dependencies: string[];
};

type FrontendConfigProps = {
    onChange: (config: FrontendConfigData) => void;
};

export function FrontendConfig({ onChange }: FrontendConfigProps) {

    const {frontend} = useFrontend();
    
    const [framework, setFramework] = useState<string>(frontend.framework);

    const [selectedDependencies, setSelectedDependencies] =  useState<string[]>( frontend.dependencies) ;


    const handleToggleDependency = (id: string) => {
    setSelectedDependencies((current) => {
        const next = current.includes(id)
            ? current.filter((dependency) => dependency !== id)
            : [...current, id];

        onChange({
            framework,
            dependencies: next,
        });

        return next;
    });
};

    return (
        <div className="space-y-7">
            {/* Framework */}
            <section>
                <div className="mb-3">
                    <h3 className="text-base font-semibold">
                        Framework
                    </h3>

                    <p className="text-sm text-muted-foreground">
                        Choose your frontend framework.
                    </p>
                </div>

                <Frameworks framework={framework} 
                            onChange={onChange} 
                            frameworks={FrontendFrameworks} 
                            setFramework={setFramework} 
                            selectedDependencies={selectedDependencies}/>
      
            </section>

            {/* Dependencies */}
            <Dependencies selectedDependencies={selectedDependencies} 
                          handleToggleDependency={handleToggleDependency}
                          dependencies={dependencies}
                          
                          />
    
        </div>
    );
}