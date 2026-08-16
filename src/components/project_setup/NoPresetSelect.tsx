import { Settings } from "lucide-react"

type Props = {
    onClick:() => void
}

export function NoPresetSelected({onClick}:Props) {

    return (<div className="flex h-full items-center justify-center">
                        <div className="flex max-w-md flex-col items-center gap-5 text-center">

                            <div className="rounded-2xl border bg-muted/20 p-5">
                                {/* ide később ikon */}
                                <span className="text-3xl">
                                     <Settings />
                                </span>
                            </div>

                            <div className="space-y-2">
                                <h1 className="text-2xl font-semibold">
                                    No preset selected
                                </h1>

                                <p className="text-sm text-muted-foreground">
                                    Choose a preset to quickly configure your
                                    project. You can customize it afterwards.
                                </p>
                            </div>

                            <button
                                onClick={onClick}
                                className="rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90"
                            >
                                Choose a preset
                            </button>

                        </div>
                    </div>
    )

}