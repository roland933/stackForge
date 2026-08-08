

import { Card } from "@/components/ui/card";


import { Content } from "@/components/common/Content";

import { WizardHeader } from "../../WizardHeader";
import { WizardFooter } from "../../WizardFooter";

import { GenerateHeader } from "./GenerateHeader";
import { ProjectSummary } from "./summary/ProjectSummary";

import { Summary } from "./summary/Summary";
import { SelectedStack } from "@/components/common/SelectedStack";
import { buildSummary } from "@/lib/buildSummary";

export function GenerateSetup() {

  const totalSelections = Object.values(buildSummary()).reduce((total, items) => total + items.length, 0);


  return (
    <Card>

      <WizardHeader
        title="Generate Project"

      />

      <Content>

        <GenerateHeader />


        <div className="grid grid-cols-2 gap-6">

          <Summary title={`Stacks (${totalSelections})`}>
            <SelectedStack />
          </Summary>

          <Summary title="Project">
            <ProjectSummary />
          </Summary>

        </div>



      </Content>

      <WizardFooter />

    </Card>
  );
}