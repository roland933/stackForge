type Props = {
    title:string,
    subtitle?:string,
}

export function WizardHeader({title,subtitle}:Props) {
    return(
        <>
             <h1 className="text-4xl font-bold">
                   {title}
                </h1>

                <p className="text-muted-foreground">
                    {subtitle ? subtitle : "Let's build something amazing." }
                </p>
        </>
    )
}