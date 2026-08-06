import {
  Download,
  FileJson,
  FolderOpen,
  Rocket,
  Upload,
} from "lucide-react";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

import { Content } from "@/components/common/Content";

import { WizardHeader } from "../../WizardHeader";
import { StepWizard } from "../../StepWizard";
import { WizardFooter } from "../../WizardFooter";

export function GenerateSetup() {
  return (
    <Card>

      <Content>

        

          <WizardHeader
            title="Generate Project"
            
          />

         
        <StepWizard />

        <Separator />

        <div className="rounded-2xl border bg-muted/20 p-10 text-center">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <Rocket className="h-8 w-8" />
          </div>

          <h2 className="mt-6 text-3xl font-bold">
            Ready to Generate
          </h2>

          <p className="mt-2 text-muted-foreground mb-5">
          Everything is ready. Export your configuration or generate your project.
          </p>


           <div className="flex gap-2 justify-center">

            <Button variant="outline" className={"cursor-pointer"}>
              <FileJson className="mr-2 h-4 w-4" />
              Export JSON
            </Button>

            <Button variant="outline"  className={"cursor-pointer"}>
              <Upload className="mr-2 h-4 w-4" />
              Import JSON
            </Button>

          </div>

        </div>

        <div className="grid grid-cols-2 gap-6">

          {/* Stack */}

          <Card className="p-6 space-y-5">

            <h3 className="text-lg font-semibold">
              Selected Stack
            </h3>

            <div className="flex flex-wrap gap-2">

              <Badge>React</Badge>
              <Badge>TypeScript</Badge>
              <Badge>Tailwind CSS</Badge>
              <Badge>shadcn/ui</Badge>
              <Badge>React Router</Badge>
              <Badge>Zustand</Badge>

              <Badge>Laravel</Badge>
              <Badge>MySQL</Badge>

              <Badge>Docker</Badge>

              <Badge>ESLint</Badge>
              <Badge>Prettier</Badge>

            </div>

          </Card>

          {/* Summary */}

          <Card className="p-6 space-y-5">

            <h3 className="text-lg font-semibold">
              Project Summary
            </h3>

            <div className="space-y-4 text-sm">

              <div className="flex justify-between">
                <span className="text-muted-foreground">
                  Project
                </span>

                <span>Stack Forge</span>
              </div>

              <div className="flex justify-between">
                <span className="text-muted-foreground">
                  Package Manager
                </span>

                <Badge>pnpm</Badge>
              </div>

              <div className="flex justify-between">
                <span className="text-muted-foreground">
                  Git
                </span>

                <Badge>Enabled</Badge>
              </div>

              <div className="flex justify-between">
                <span className="text-muted-foreground">
                  Technologies
                </span>

                <span>11</span>
              </div>

            </div>

          </Card>

        </div>

        <Card className="p-6">

          <div className="flex items-center justify-between">

            <div>

              <h3 className="text-lg font-semibold">
                Generate Project
              </h3>

              <p className="text-sm text-muted-foreground">
                Stack Forge will create your project based on the selected technologies.
              </p>

            </div>

            <Button size="lg" className={"cursor-pointer"}>

              <Rocket className="mr-2 h-5 w-5" />

              Generate Project

            </Button>

          </div>

        </Card>

      </Content>

      <WizardFooter />

    </Card>
  );
}