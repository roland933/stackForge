export function CardHeader({title,subTitle,children}) {
    return (
            <div className="flex items-start justify-between">
                    <div>
                        <h2 className="text-lg font-semibold">
                            Frontend
                        </h2>

                        <p className="mt-1 text-sm text-muted-foreground">
                            Configure your frontend stack
                        </p>
                    </div>

                    {children}
                </div>

    )

}