import { Separator } from "@/components/ui/separator";
import { FrontendSection } from "./sections/FrontendSection";
import { ProjectSection } from "./sections/ProjectSection";
import { FeaturesSection } from "./sections/FeaturesSection";
import { BackendSection } from "./sections/BackendSection";

export function ReactLaravel() {
    return (

            <div className="space-y-5">
               
                        <BackendSection items={["Laravel"]}/>

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
                "Docker"
              ]} />
</div>
           
    )
}