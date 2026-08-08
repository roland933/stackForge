

import { Card } from "@/components/ui/card";


import { Content } from "@/components/common/Content";

import { WizardHeader } from "../../WizardHeader";
import { WizardFooter } from "../../WizardFooter";

import { GenerateHeader } from "./GenerateHeader";
import { ProjectSummary } from "./summary/ProjectSummary";
import { StackSummary } from "./summary/StackSummary";


export function GenerateSetup() {



  return (
    <Card className="p-0">

       <WizardHeader
          title="Generate Project"

        />

      <Content>

        <GenerateHeader />

        <div className="grid grid-cols-2 gap-6">

        <StackSummary />

        <ProjectSummary />

        </div>


      </Content>

      <WizardFooter />

    </Card>
  );
}