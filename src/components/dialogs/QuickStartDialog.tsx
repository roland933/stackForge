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

import {  Rocket, Sparkles } from "lucide-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { React } from "../quick-start/react";
import { ReactLaravel } from "../quick-start/reactLaravel";
import type { quicktStartTypes } from "../quick-start/quict.start.types";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onContinue: () => void;
  setQuickStartType:(type:quicktStartTypes) => void;
};

export function QuickStartDialog({ open, onOpenChange, onContinue,setQuickStartType }: Props) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl ">
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
          <Tabs defaultValue="react">
            <TabsList variant="line" className="mb-2">
              <TabsTrigger value="react" onClick={() => setQuickStartType("react")}>React</TabsTrigger>
              <TabsTrigger value="react-laravel"  onClick={() => setQuickStartType("react-laravel")}>React-Laravel</TabsTrigger>
            </TabsList>

          <div className="h-120 overflow-y-auto custom-scrollbar pr-5">
            <TabsContent value="react">
              
                <React />

            </TabsContent>

            <TabsContent value="react-laravel">
                <ReactLaravel />

            </TabsContent>

              </div>
          </Tabs>

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

          <Button className={"hover:cursor-pointer"} onClick={onContinue}>
            <Rocket className="h-4 w-4" />
            Start with this Stack
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
