
import { Separator } from "../ui/separator"
import { StepWizard } from "./StepWizard"

type Props = {
    title:string,
    subtitle?:string,
}

export function WizardHeader({title,subtitle}:Props) {
    return(
        <div className="p-8 space-y-6 h-52">
             <h1 className="text-4xl font-bold">
                   {title}
                </h1>

                <p className="text-muted-foreground">
                    {subtitle ? subtitle : "Let's build something amazing." }
                </p>

                <StepWizard />

                <Separator />
       </div>
    )
}