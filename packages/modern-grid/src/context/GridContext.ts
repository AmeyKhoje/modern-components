import { ReactNode, createContext } from "react";

type TGridContext = {
  divideBy: Array<number>;
  gutterSpace: number;
  elements: {
    isStart: boolean;
    isEnd: boolean;
    element: ReactNode;
  }[];
};

export default createContext<TGridContext>({
  divideBy: [0],
  elements: [],
  gutterSpace: 0,
});
