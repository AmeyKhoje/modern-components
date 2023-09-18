import { ReactNode } from "react";

const getElements = (elements: Array<ReactNode>, divideBy: Array<number>) => {
  let doneEls = 0;
  let spinner = 0;
  return elements.map((item: ReactNode, index: number) => {
    let eachRowEls = 0;
    let isStart = spinner === 0;
    let isEnd = index === elements.length - 1;

    if (divideBy.length === 1) {
      eachRowEls = Math.trunc(100 / divideBy[0]);
    }
    if (divideBy.length > 1) {
      let count = 0;
      divideBy.forEach((t) => {
        if (count + t > 100) {
          return;
        }
        ++eachRowEls;
        count = count + t;
      });
    }

    if (eachRowEls > 1) {
      if (index > 0 && index < elements.length - 1) {
        if (doneEls + 1 === eachRowEls) {
          isEnd = true;
          spinner = 0;
        } else ++spinner;
      }
      if (index === elements.length - 1) {
        spinner = 0;
      }
      if (index === 0) {
        ++spinner;
      }
    } else {
      isEnd = true;
      isStart = true;
    }

    ++doneEls;

    return {
      isStart,
      isEnd,
      element: item,
    };
  });
};

export const checkValidDivision = (divideBy: Array<number>) => {
  let is = false;
  if (divideBy.length) {
    const sum = divideBy.reduce((prev: number, cur: number) => {
      return prev + cur;
    }, 0);
    if (sum <= 100 || sum > 0) {
      is = true;
    } else is = false;
  }
  return is;
};

export { getElements };
