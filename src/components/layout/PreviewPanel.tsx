import { Card, CardContent } from "@/components/ui/card";
import {
  FolderOpen,
  Package,
  GitBranch,
  Boxes,
} from "lucide-react";
import { PreviewHeader } from "./preview/PreviewHeader";
import { PreviewSection } from "./preview/PreviewSection";
import { Stacks } from "./preview/Stacks";
import { Project } from "./preview/Project";
import { Git } from "./preview/Git";
import { PackageManager } from "./preview/PackageManager";

export function PreviewPanel() {
  return (
    <aside className="w-[360px]">
      <Card className="h-full">
        <PreviewHeader />

        <CardContent className="space-y-7">
          <PreviewSection title="Project" 
                          iconColor="bg-blue-500/10 text-blue-500" 
                          icon={<FolderOpen className="h-4 w-4" />}>
            <Project />
          </PreviewSection>

          <PreviewSection title="Stack"   iconColor="bg-violet-500/10 text-violet-500"    icon={<Boxes className="h-4 w-4" />}>
            <Stacks />
          </PreviewSection>

          <PreviewSection title="Package Manager"   iconColor="bg-blue-500/10 text-blue-500"    icon={<Package className="h-4 w-4" />}>
            <PackageManager />
          </PreviewSection>

          <PreviewSection title="Git Repository"   iconColor="bg-blue-500/10 text-blue-500"    icon={<GitBranch className="h-4 w-4" />}>
             <Git />
          </PreviewSection>

  
        </CardContent>
      </Card>
    </aside>
  );
}
