import {AnchorHTMLAttributes, ButtonHTMLAttributes} from "react";

export type ButtonSize = "small" | "medium" | "large";
export type ButtonAppearance = "default" | "primary" | "minimal";
export type ButtonIntents = "none" | "success" | "info" | "warning" | "danger";

export interface BaseButtonProps {
    appearance: ButtonAppearance;
    intents: ButtonIntents;
    size?: ButtonSize;
    disabled?: boolean;
    children?: React.ReactNode;
    className?: string;
    isActive: boolean;
    isLoading: boolean;
}

type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>

export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>
