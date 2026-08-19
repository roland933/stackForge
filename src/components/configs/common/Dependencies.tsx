import type { DependenciType } from "@/const/dependencies/DependencyType";


type Props = {
    dependencies: DependenciType[];
    handleToggleDependency: (id) => void,
    selectedDependencies: DependenciType[]

}

export function Dependencies({ dependencies, selectedDependencies, handleToggleDependency }: Props) {
    return (
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
                    console.log(dependency)
                    const selected = selectedDependencies.some(
                        (selectedDependency) =>
                            selectedDependency.id === dependency.id
                    );

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
    )



}