import { ReactNode } from "react";
declare const getElements: (elements: Array<ReactNode>, divideBy: Array<number>) => {
    isStart: boolean;
    isEnd: boolean;
    element: ReactNode;
}[];
export declare const checkValidDivision: (divideBy: Array<number>) => boolean;
export { getElements };
