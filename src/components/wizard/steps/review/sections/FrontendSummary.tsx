
import {
    Monitor,
} from "lucide-react";
import { useFrontend } from "../../frontend/hooks/useFrontend";
import { SummaryItem } from "../summary/SummaryItem";
import { SummaryItems } from "../summary/SummaryItems";
import { SummaryHeader } from "../summary/SummaryHeader";
import { SummaryGrid } from "../summary/SummaryGrid";

export function FrontendSummary() {
    const { frontend } = useFrontend();
    
    return (
        <>

            <SummaryHeader title="Frontend"
                icon={<Monitor className="h-5 w-5 text-primary" />}
            />

            <SummaryGrid >
                <SummaryItem label="Framework" badge={frontend.framework} />

                <SummaryItem label="Router" badge={frontend.router} />

                <SummaryItem label="State" badge={frontend.stateManagement} />

                <SummaryItems label="Styling" badges={frontend.styling} />

            </SummaryGrid>

        </>
    )
}