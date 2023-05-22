import { HTMLAttributes } from "react";
import { DetailedHTMLProps, ReactNode } from "react";

export interface PtagProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
    children: ReactNode;
    size: "default" | "big" | "small";
}