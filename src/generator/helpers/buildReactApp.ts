
import { getBackendFramework, getDatabase, getFrontendFramework } from "@/helpers/getConfigItem";
import type { StackForgeConfig } from "../types/StackForgeConfig";
import { getProject } from "@/helpers/getProject";
import { getFrontend } from "@/helpers/getFronted";


function appendDatabaseCard(database: string,config:StackForgeConfig,hasHealthQuery: boolean) {
   
    return `
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-6">
                    <p className="text-sm font-medium text-gray-500">
                        Database
                    </p>

                    <h2 className="mt-1 text-xl font-semibold">
                        ${database}
                    </h2>
                </div>

                <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-between">
                        <span className="text-gray-500">
                            Database
                        </span>

                        <span className="font-medium">
                                ${getProject(config.project).getSlug()}
                        </span>
                    </div>

                    <div className="flex items-center justify-between">
                        <span className="text-gray-500">
                            Port
                        </span>

                        <span className="font-medium">
                           ${config.database?.port}
                        </span>
                    </div>

                        <div className="flex items-center justify-between">
                <span className="text-gray-500">
                    Status
                </span>

                ${
                    hasHealthQuery
                        ? `
                            {databaseLoading && (
                                <span className="font-medium text-gray-500">
                                    Checking...
                                </span>
                            )}

                            {!databaseLoading && databaseHealthData?.status === "ok" && (
                                <span className="font-medium text-green-600">
                                    ✓ Running
                                </span>
                            )}

                            {!databaseLoading && databaseHealthData?.status !== "ok" && (
                                <span className="font-medium text-red-600">
                                    Unavailable
                                </span>
                            )}
                        `
                        : `
                            <span className="font-medium text-gray-500">
                                Not checked
                            </span>
                        `
                }

            </div>
                    <div className="mt-4">
                     
                            <a
                                href="http://localhost:5050"
                                target="_blank"
                                rel="noreferrer"
                                className="text-sm font-medium text-blue-600 hover:underline"
                            >
                                Open pgAdmin ↗
                            </a>
                       
                    </div>
                </div>
            </div>
    `;
}

function appendBackendCard(
    backend: string,
    content: string = ""
) {
    return `
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">

            <div className="mb-6">
                <p className="text-sm font-medium text-gray-500">
                    API
                </p>

                <h2 className="mt-1 text-xl font-semibold text-gray-900">
                    ${backend}
                </h2>
            </div>

            <div className="space-y-3 text-sm">

                <div className="flex items-center justify-between">
                    <span className="text-gray-500">
                        URL
                    </span>

                    <span className="font-medium">
                        localhost:8000
                    </span>
                </div>

                ${content}

            </div>
        </div>
    `;
}

function getQueryName(config: StackForgeConfig) {
    return config.backend.framework === "fastapi"
        ? "useHealthQuery"
        : "useProductsQuery";
}

export function buildReactApp(config: StackForgeConfig) {
    const backendName = getBackendFramework(config.backend.framework)?.name;
    const frontendName = getFrontendFramework(config.frontend.framework)?.name;
    const database = getDatabase(config.backend.database)?.name;
    const frontend = getFrontend(config.frontend);
    const queryName = getQueryName(config);

    const queryImports = frontend.hasTanstackQuery()
    ? config.backend.framework === "fastapi" && config.database
        ? `import {
    ${queryName},
    useDatabaseHealthQuery
} from "./queries/query";`
        : `import { ${queryName} } from "./queries/query";`
    : "";

    return `
${queryImports}


function App() {
     ${
        frontend.hasTanstackQuery()
            ? `const { data, isLoading, isError } = ${queryName}();`
            : ""
    }

    ${
        frontend.hasTanstackQuery() && config.database && config.backend.framework === "fastapi" ? `const {
                data: databaseHealthData,
                isLoading: databaseLoading
            } = useDatabaseHealthQuery();` : ""
                }

    return (
        <main className="min-h-screen bg-gray-50 px-6 py-16">
            <div className="mx-auto max-w-4xl">

                <div className="mb-12 text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                        ${frontendName} + ${backendName}
                    </h1>

                    <p className="mt-3 text-gray-500">
                        Happy coding! 🚀
                    </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2">

                    ${
                        backendName
                            ? appendBackendCard(
                                backendName,
                                `
                                <div className="mt-4">
                                    {isLoading && (
                                        <span className="text-gray-500">
                                            Checking API...
                                        </span>
                                    )}

                                    {isError && (
                                        <span className="text-red-600">
                                            API unavailable
                                        </span>
                                    )}

                                    {data && (
                                        <span className="font-medium text-green-600">
                                            ✓ {data.status}
                                        </span>
                                    )}
                                </div>
                                `
                            )
                            : ""
                    }

                    ${database ? appendDatabaseCard(
                                    database,
                                    config,
                                    frontend.hasTanstackQuery() &&
                                    config.database &&
                                    config.backend.framework === "fastapi"
                                ) : ""}

                </div>

            </div>
        </main>
    );
}

export default App;
`;
}