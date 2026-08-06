import { Server } from "lucide-react";
import { useBackend } from "../../backend/hooks/useBackend";
import { SummaryHeader } from "../summary/SummaryHeader";
import { SummaryGrid } from "../summary/SummaryGrid";
import { SummaryItem } from "../summary/SummaryItem";

export function BackendSummary() {
  const { backend } = useBackend();
  return (
    <>
      <SummaryHeader
        title="Backend"
        icon={<Server className="h-5 w-5 text-primary" />}
      />

      <SummaryGrid>
        <SummaryItem label="Framework" badge={backend.framework} />

        <SummaryItem label="Database" badge={backend.database} />

        <SummaryItem label="Authentication" badge={backend.authentication} />
      </SummaryGrid>
    </>
  );
}
