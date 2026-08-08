
import type { ReactNode } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

type Props =  {
  title:string,
  children: ReactNode,
  className?:string,
}



export function Summary({ title, children }: Props) {
    return (
        <Accordion type="single" collapsible className="w-full ">
            <AccordionItem
                value={title.toLowerCase()}
                className="rounded-xl border bg-muted/10"
            >
                <AccordionTrigger className="px-4 hover:cursor-pointer text-lg">
                    {title}
                </AccordionTrigger>

                <AccordionContent className="p-5">
                    {children}
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
}


