import type { ReactNode } from "react";


export type OptionCardProps = {
    title: string;
    description?: string;
    icon: ReactNode;
    selected?: boolean;
    disabled?: boolean;
    badge?: string;
    children?: ReactNode;
    onClick?: () => void;
};