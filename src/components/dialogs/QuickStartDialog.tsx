import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import {
  Check,
  Rocket,
  Sparkles,
} from "lucide-react";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function QuickStartDialog({
  open,
  onOpenChange,
}: Props) {
  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent className="sm:max-w-2xl">

        <DialogHeader>

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">

            <Sparkles className="h-7 w-7" />

          </div>

          <DialogTitle className="mt-4 text-center text-2xl">
            Quick Start
          </DialogTitle>

          <DialogDescription className="text-center">
            Generate a React starter project with the recommended default stack.
          </DialogDescription>

        </DialogHeader>

        <Separator />

        <div className="space-y-5">

          {/* Frontend */}

          <section className="rounded-xl border bg-muted/30 p-3">

            <h3 className="mb-4 font-semibold">
              Frontend
            </h3>

            <div className="grid grid-cols-2 gap-3">

              {[
                "React",
                "TypeScript",
                "Tailwind CSS",
                "shadcn/ui",
                "React Router",
                "Zustand",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-lg border p-3"
                >
                  <Check className="h-4 w-4 text-green-500" />

                  <span>{item}</span>

                </div>
              ))}

            </div>

          </section>

          <Separator />

          {/* Project */}

          <section className="rounded-xl border bg-muted/10 p-3">

            <h3 className="mb-4 font-semibold">
              Project
            </h3>

            <div className="grid grid-cols-2 gap-3">

              {[
                "npm",
                "Git Repository",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-lg border p-3"
                >
                  <Check className="h-4 w-4 text-green-500" />

                  <span>{item}</span>

                </div>
              ))}

            </div>

          </section>

          <Separator />

          {/* Features */}

          <section className="rounded-xl border bg-muted/10 p-3">

            <h3 className="mb-4 font-semibold">
              Features
            </h3>

            <div className="grid grid-cols-2 gap-3">

              {[
                "ESLint",
                "Prettier",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-lg border p-3"
                >
                  <Check className="h-4 w-4 text-green-500" />

                  <span>{item}</span>

                </div>
              ))}

            </div>

          </section>

          <div className="rounded-lg border bg-muted/30 p-4 text-sm text-muted-foreground">

            💡 You can customize everything later using the wizard.

          </div>

        </div>

        <DialogFooter className="mt-6">

          <Button
          className={"hover:cursor-pointer"}
            variant="outline"
            onClick={() => onOpenChange(false)}
          >
            Cancel
          </Button>

          <Button className={"hover:cursor-pointer"}>

            <Rocket className="h-4 w-4" />

            Start with this Stack

          </Button>

        </DialogFooter>

      </DialogContent>
    </Dialog>
  );
}