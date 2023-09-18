import { FC, ReactNode, createElement, useContext } from "react";
import GridContext from "../context/GridContext";
import GridElement from "./GridElement";

const GridElementsRenderer = () => {
  const { divideBy, elements, gutterSpace } = useContext(GridContext);
  let ct = 0;
  return elements.map((item, index) => {
    const element = createElement<{
      children: ReactNode;
      customStyle: any;
      key: string;
    }>(GridElement as FC, {
      key: item?.element?.toLocaleString() + "" + index,
      customStyle: {
        width: `${divideBy[ct]}%`,
        paddingLeft: item.isStart
          ? 0
          : item.isEnd
          ? `${gutterSpace / 2}rem`
          : `${gutterSpace / 2}rem`,
        paddingRight: item.isStart
          ? `${gutterSpace / 2}rem`
          : item.isEnd
          ? 0
          : `${gutterSpace / 2}rem`,
      },
      children: item.element,
    });
    ++ct;
    return element;
  });
};

export default GridElementsRenderer;
