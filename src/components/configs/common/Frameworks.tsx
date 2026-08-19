import type { FrameworkType } from "@/const/frameworks/frameworks";


type Props = {
    handleSelectFramework:(id:string) => void,
    frameworks: FrameworkType[],
    framework:string,

};
export function Frameworks ({handleSelectFramework,frameworks,framework}:Props) {

    return (
                   <div className="grid grid-cols-3 gap-3">
                            {frameworks.map((item) => {
                                const Icon = item.icon;
                                console.log(9999,framework);
                                console.log(item);
                                const selected = framework === item.id;
        
                                return (
                                    <button
                                        key={item.id}
                                        type="button"
                                        onClick={() => {
                                                handleSelectFramework(item.id);
                                              
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
    )


}