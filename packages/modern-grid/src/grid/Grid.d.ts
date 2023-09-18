import { ReactNode } from "react";

export type GridProps = {
  gutterSpace: number;
  divideBy: Array<number>;
  elements: Array<ReactNode>;
};

type GridTypeMap = {
  props: GridProps;
};

declare const Grid: GridTypeMap;

export default Grid;
