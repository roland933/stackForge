import type { StackForgeConfig } from "@/generator/types/StackForgeConfig";
import { buildMainImports } from "./buildMainImports";
import { buildMainProviders } from "./buildMainProviders";

export function buildMain(config: StackForgeConfig) {
    const imports = buildMainImports(config);
    const providers = buildMainProviders(config);

    let app = "<App />";

    providers.reverse().forEach((provider) => {
        app = `<${provider}>${app}</${provider}>`;
    });

    return `
            ${imports.join("\n")}

            import App from "./App";
           
      
            ReactDOM.createRoot(document.getElementById("root")!).render(
              <${providers.join("\n")}>
               ${app}
            );
    `;


}