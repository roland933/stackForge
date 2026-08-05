import { create } from "zustand";

type WizardStore = {
    currentStep: number;

    nextStep: () => void;
    previousStep: () => void;
    setStep: (step: number) => void;
};

export const useWizardStore = create<WizardStore>((set) => ({
    currentStep: 1,

    nextStep: () =>
        set((state) => ({
            currentStep: Math.min(state.currentStep + 1, 6),
        })),

    previousStep: () =>
        set((state) => ({
            currentStep: Math.max(state.currentStep - 1, 1),
        })),

    setStep: (step) =>
        set({
            currentStep: step,
        }),
}));