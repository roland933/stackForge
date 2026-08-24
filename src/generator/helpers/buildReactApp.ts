import type { StackForgeConfig } from "../types/StackForgeConfig";

function appendDatabaseCard(database: string) {
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
                            my_project
                        </span>
                    </div>

                    <div className="flex items-center justify-between">
                        <span className="text-gray-500">
                            Port
                        </span>

                        <span className="font-medium">
                            5432
                        </span>
                    </div>

                    <div className="flex items-center justify-between">
                        <span className="text-gray-500">
                            Status
                        </span>

                        <span className="font-medium text-green-600">
                            Running
                        </span>
                    </div>
                </div>
            </div>
    `;
}

function appendBackendCard(backend: string) {
    return `
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-6">
                    <p className="text-sm font-medium text-gray-500">
                        API
                    </p>

                    <h2 className="mt-1 text-xl font-semibold">
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

                    <div className="flex items-center justify-between">
                        <span className="text-gray-500">
                            Status
                        </span>

                        <span className="font-medium text-green-600">
                            Running
                        </span>
                    </div>
                </div>
            </div>
    `;
}

export function buildReactApp(config: StackForgeConfig) {
    const backendName = config.backend.framework;
    const database = config.backend.database;

    return `
function App() {
    return (
        <main className="min-h-screen bg-gray-50 px-6 py-16">
            <div className="mx-auto max-w-4xl">

                <div className="mb-12 text-center">
                    <h1 className="text-4xl font-bold tracking-tight">
                        React + ${backendName}
                    </h1>

                    <p className="mt-3 text-gray-500">
                        Happy coding! 🚀
                    </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2">

                    ${backendName ? appendBackendCard(backendName) : ""}

                    ${database ? appendDatabaseCard(database) : ""}

                </div>

            </div>
        </main>
    );
}

export default App;
`;
}