import { ReactNode } from "react";
type SelfProps = {
    gutterSpace: number;
    divideBy: Array<number>;
    elements: Array<ReactNode>;
};
declare const Grid: ({ divideBy, gutterSpace, elements }: SelfProps) => import("react/jsx-runtime").JSX.Element;
export default Grid;
