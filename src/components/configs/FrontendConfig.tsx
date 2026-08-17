
import { useState } from "react";
import { SiReact, SiNextdotjs, SiVuedotjs } from "react-icons/si";


const frameworks = [
    {
        id: "react",
        name: "React",
        description: "A JavaScript library for building user interfaces.",
        icon: SiReact,
    },
    {
        id: "next",
        name: "Next.js",
        description: "The React framework for the web.",
        icon: SiNextdotjs,
    },
    {
        id: "vue",
        name: "Vue",
        description: "The progressive JavaScript framework.",
        icon: SiVuedotjs,
    },
];

const dependencies = [
    {
        id: "react-router",
        name: "React Router",
    },
    {
        id: "zustand",
        name: "Zustand",
    },
    {
        id: "tanstack-query",
        name: "TanStack Query",
    },
    {
        id: "axios",
        name: "Axios",
    },
];


export type FrontendConfigData = {
    framework: string;
    dependencies: string[];
};

type FrontendConfigProps = {
    onChange: (config: FrontendConfigData) => void;
};

export function FrontendConfig({ onChange }: FrontendConfigProps) {
    const [framework, setFramework] = useState("react");





    const [selectedDependencies, setSelectedDependencies] =
        useState<string[]>([
            "react-router",
            "zustand",
        ]);

    const toggleDependency = (id: string) => {
        setSelectedDependencies((current) =>
            current.includes(id)
                ? current.filter((dependency) => dependency !== id)
                : [...current, id]
        );
    };


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

                <div className="grid grid-cols-3 gap-3">
                    {frameworks.map((item) => {
                        const Icon = item.icon;
                        const selected = framework === item.id;

                        return (
                            <button
                                key={item.id}
                                type="button"
                                onClick={() => {
                                        setFramework(item.id);
                                        onChange({
                                            framework: item.id,
                                            dependencies: selectedDependencies,
                                        });
                                    }}
                                className={[
                                    "relative flex flex-col items-center gap-3 rounded-lg border p-4 text-center transition",
                                    "hover:border-primary/50 hover:bg-muted/40",
                                    selected
                                        ? "border-primary bg-primary/5"
                                        : "border-border",
                                ].join(" ")}
                            >
                                {selected && (
                                    <span className="absolute right-2 top-2 text-xs text-primary">
                                        ✓
                                    </span>
                                )}

                                <Icon className="h-8 w-8" />

                                <div>
                                    <p className="text-base font-semibold">
                                        {item.name}
                                    </p>

                                    <p className="mt-1 text-[12px] leading-4 text-muted-foreground">
                                        {item.description}
                                    </p>
                                </div>
                            </button>
                        );
                    })}
                </div>
            </section>

            {/* Dependencies */}
            <section>
                <div className="mb-3">
                    <h3 className="text-base font-semibold">
                        Dependencies
                    </h3>

                    <p className="text-sm text-muted-foreground">
                        Select additional packages for your project.
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                    {dependencies.map((dependency) => {
                        const selected =
                            selectedDependencies.includes(dependency.id);

                        return (
                            <button
                                key={dependency.id}
                                type="button"
                                onClick={() =>
                                    handleToggleDependency(dependency.id)

                                }
                                className={[
                                    "flex items-center justify-between rounded-lg border px-4 py-3 text-left transition",
                                    "hover:bg-muted/40",
                                    selected
                                        ? "border-primary/50 bg-primary/5"
                                        : "border-border",
                                ].join(" ")}
                            >
                                <span className="text-sm font-medium">
                                    {dependency.name}
                                </span>

                                <span
                                    className={[
                                        "flex h-5 w-5 items-center justify-center rounded border text-xs",
                                        selected
                                            ? "border-primary bg-primary text-primary-foreground"
                                            : "border-muted-foreground/30",
                                    ].join(" ")}
                                >
                                    {selected && "✓"}
                                </span>
                            </button>
                        );
                    })}
                </div>
            </section>
        </div>
    );
}