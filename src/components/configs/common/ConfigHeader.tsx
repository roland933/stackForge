type Props = {
    title:string,
    subTitle:string,
}
export function ConfigHeader({title,subTitle}:Props) {
    return (
         <div className="mb-3">
                    <h3 className="text-base font-semibold">
                        {title}
                    </h3>

                    <p className="text-sm text-muted-foreground">
                       {subTitle}
                    </p>
                </div>
    )

}