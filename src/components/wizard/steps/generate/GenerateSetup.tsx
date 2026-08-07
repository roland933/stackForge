import {
  Rocket,
} from "lucide-react";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";


import { Content } from "@/components/common/Content";

import { WizardHeader } from "../../WizardHeader";
import { StepWizard } from "../../StepWizard";
import { WizardFooter } from "../../WizardFooter";

import { GenerateHeader } from "./GenerateHeader";
import { ProjectSummary } from "./summary/ProjectSummary";
import { StackSummary } from "./summary/StackSummary";
import { generate } from "@/generator/generate";
import { createConfig } from "@/lib/createConfig";

export function GenerateSetup() {

  const porjectGenerate = () => {
    const p = generate(createConfig())
    console.log(777,p.files);
  }

  return (
    <Card>

      <Content>

        <WizardHeader
          title="Generate Project"

        />

        <StepWizard />

        <Separator />

        <GenerateHeader />

        <div className="grid grid-cols-2 gap-6">

        <StackSummary />

        <ProjectSummary />

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

            <Button size="lg" className={"cursor-pointer"} onClick={ porjectGenerate}>

              <Rocket className="mr-1 h-5 w-5" />

              Generate Project

            </Button>

          </div>

        </Card>

      </Content>

      <WizardFooter />

    </Card>
  );
}