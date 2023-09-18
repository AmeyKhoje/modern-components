import { ReactNode } from "react";
type TGridContext = {
    divideBy: Array<number>;
    gutterSpace: number;
    elements: {
        isStart: boolean;
        isEnd: boolean;
        element: ReactNode;
    }[];
};
declare const _default: import("react").Context<TGridContext>;
export default _default;
