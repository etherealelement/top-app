
export interface HtagProps extends HTMLElement {
    tag: "h1" | "h2" | "h3";
    children: ReactNode;
}