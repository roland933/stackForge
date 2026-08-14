import { Check } from "lucide-react";


type Props = {
items: string[]

}

export function FrontendSection({items}:Props) {

    return(
          <section className="rounded-xl border bg-muted/30 p-3">

                <h3 className="mb-4 font-semibold">
                  Frontend
                </h3>

                <div className="grid grid-cols-2 gap-3">

                  {items.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-lg border p-3"
                    >
                      <Check className="h-4 w-4 text-green-500" />

                      <span>{item}</span>

                    </div>
                  ))}

                </div>

              </section>
    )

}