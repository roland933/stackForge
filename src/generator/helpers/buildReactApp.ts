import type { StackForgeConfig } from "../types/StackForgeConfig";

function appendDatabasCard() {


}

function appendBackendCard() {
    
}


export function buildReactApp(config: StackForgeConfig) {
    const backendName = config.backend.framework;
    const database = config.backend.database;

    return `
function App() {
    return (
        <main className="min-h-screen ...">
            ...
            <h1>React + ${backendName}</h1>

            <div>
                <h2>${database.name}</h2>
                <span>Port: ${database.port}</span>
            </div>
        </main>
    );
}

export default App;
`;
}