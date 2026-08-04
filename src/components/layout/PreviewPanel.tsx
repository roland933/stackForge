import { Card, CardContent } from "@/components/ui/card";
import {
  Folder,
  FolderOpen,
  Terminal,
  Package,
  GitBranch,
  Boxes,
} from "lucide-react";
import { PreviewHeader } from "./preview/PreviewHeader";
import { PreviewSection } from "./preview/PreviewSection";
import { Commands } from "./preview/Commands";
import { Stacks } from "./preview/Stacks";
import { Structure } from "./preview/Stucture";
import { Project } from "./preview/Project";
import { Git } from "./preview/Git";
import { PackageManager } from "./preview/PackageManager";

export function PreviewPanel() {
  return (
    <aside className="w-[360px]">
      <Card className="h-full">
        <PreviewHeader />

        <CardContent className="space-y-7">
          <PreviewSection title="Project" icon={<FolderOpen className="h-4 w-4" />}>
            <Project />
          </PreviewSection>

          <PreviewSection title="Stack"  icon={<Boxes className="h-4 w-4" />}>
            <Stacks />
          </PreviewSection>

          <PreviewSection title="Package Manager"   icon={<Package className="h-4 w-4" />}>
            <PackageManager />
          </PreviewSection>

          <PreviewSection title="Git Repository"  icon={<GitBranch className="h-4 w-4" />}>
             <Git />
          </PreviewSection>

          <PreviewSection title="Commands"   icon={<Terminal className="h-4 w-4" />}>
            <Commands />
          </PreviewSection>

          {/* Structure */}

          <PreviewSection title="Structure"  icon={<Folder className="h-4 w-4" />}>
            <Structure />
          </PreviewSection>
        </CardContent>
      </Card>
    </aside>
  );
}
