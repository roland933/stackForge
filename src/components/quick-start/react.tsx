import { Separator } from "@/components/ui/separator";
import { FrontendSection } from "./sections/FrontendSection";
import { ProjectSection } from "./sections/ProjectSection";
import { FeaturesSection } from "./sections/FeaturesSection";

export function React() {
    return (

           <div className="space-y-5">
              {/* Frontend */}

              <FrontendSection
                items={[
                  "React",
                  "TypeScript",
                  "Tailwind CSS",
                  "shadcn/ui",
                  "React Router",
                  "Zustand",
                ]}
              />

               <Separator />

              <ProjectSection />

              <Separator />

              {/* Features */}

              <FeaturesSection items={[
                "ESLint",
                "Prettier",
              ]} />

              </div>

           
    )
}