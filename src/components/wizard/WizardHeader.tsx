type Props = {
    title:string,
}

export function WizardHeader({title}:Props) {
    return(
        <>
             <h1 className="text-4xl font-bold">
                   {title}
                </h1>

                <p className="text-muted-foreground">
                    Let's build something amazing.
                </p>
        </>
    )
}