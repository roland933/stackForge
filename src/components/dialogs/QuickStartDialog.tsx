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
  Code2,
  Database,
  Layers,
  Rocket,
} from "lucide-react";

import type { quicktStartTypes } from "../quick-start/quict.start.types";
import { cn } from "@/lib/utils";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onContinue: () => void;
  setQuickStartType: (type: quicktStartTypes) => void;
  presetType: quicktStartTypes,
};

export function QuickStartDialog({
  open,
  onOpenChange,
  onContinue,
  setQuickStartType,
  presetType,
}: Props) {

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl">

        <DialogHeader>
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <Layers className="h-7 w-7" />
          </div>

          <DialogTitle className="mt-4 text-center text-2xl">
            Choose a Preset
          </DialogTitle>

          <DialogDescription className="text-center">
            Start with a pre-configured stack and customize it afterwards.
          </DialogDescription>
        </DialogHeader>

        <Separator />

        <div className="space-y-3">

          {/* React */}
          <button
            type="button"
            onClick={() => setQuickStartType("react")}
            className={
                  cn(
                    `group w-full rounded-xl border bg-muted/10 p-4 text-left transition hover:border-primary/50 hover:bg-muted/30`,
                     presetType === "react" && "border-primary/50"
                  )}
          >
            <div className="flex items-center gap-4">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <Code2 className="h-5 w-5 text-primary" />
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="font-semibold">
                  React Starter
                </h3>

                <p className="mt-1 text-sm text-muted-foreground">
                  React, TypeScript, Tailwind CSS and Vite.
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="rounded-md bg-muted px-2 py-1 text-xs">
                    React
                  </span>

                  <span className="rounded-md bg-muted px-2 py-1 text-xs">
                    TypeScript
                  </span>

                  <span className="rounded-md bg-muted px-2 py-1 text-xs">
                    Tailwind
                  </span>
                </div>
              </div>
              

            </div>
          </button>

          {/* React + Laravel */}
          <button
            type="button"
            onClick={() => setQuickStartType("react-laravel")}
                     className={
                  cn(
                    `group w-full rounded-xl border bg-muted/10 p-4 text-left transition hover:border-primary/50 hover:bg-muted/30`,
                     presetType === "react-laravel" && "border-primary/50"
                  )}
          >
            <div className="flex items-center gap-4">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <Database className="h-5 w-5 text-primary" />
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="font-semibold">
                  React + Laravel
                </h3>

                <p className="mt-1 text-sm text-muted-foreground">
                  React frontend with Laravel backend and database setup.
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="rounded-md bg-muted px-2 py-1 text-xs">
                    React
                  </span>

                  <span className="rounded-md bg-muted px-2 py-1 text-xs">
                    Laravel
                  </span>

                  <span className="rounded-md bg-muted px-2 py-1 text-xs">
                    MySQL
                  </span>

                  <span className="rounded-md bg-muted px-2 py-1 text-xs">
                    Docker
                  </span>
                </div>
              </div>

            </div>
          </button>

        </div>

        <div className="rounded-lg border bg-muted/30 p-4 text-sm text-muted-foreground">
          💡 Choose a starting point. You can customize the configuration
          before generating your project.
        </div>

        <DialogFooter className="mt-4">

          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
          >
            Cancel
          </Button>

          <Button onClick={onContinue}>
            <Rocket className="h-4 w-4" />
            Use Preset
          </Button>

        </DialogFooter>

      </DialogContent>
    </Dialog>
  );
}