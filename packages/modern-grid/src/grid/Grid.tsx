import { ReactNode, useMemo } from "react";
import { checkValidDivision, getElements } from "./GridHelper";
import GridInner from "./GridInner";
import GridContext from "../context/GridContext";

type SelfProps = {
  gutterSpace: number;
  divideBy: Array<number>;
  elements: Array<ReactNode>;
};

const Grid = ({ divideBy, gutterSpace, elements }: SelfProps) => {
  if (!elements?.length || !divideBy?.length) {
    return <>Provide data</>;
  }

  const isValidDivision = useMemo(() => {
    return checkValidDivision(divideBy);
  }, [divideBy]);

  if (!isValidDivision) {
    return <>Given wrong input</>;
  }

  const memoizedElements: {
    isStart: boolean;
    isEnd: boolean;
    element: ReactNode;
  }[] = useMemo(() => {
    return getElements(elements, divideBy);
  }, [elements.toString()]);

  return (
    <GridContext.Provider
      value={{
        divideBy,
        elements: memoizedElements,
        gutterSpace,
      }}
    >
      <GridInner />
    </GridContext.Provider>
  );
};

export default Grid;
