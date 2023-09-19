'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

var getElements = function (elements, divideBy) {
    var doneEls = 0;
    var spinner = 0;
    return elements.map(function (item, index) {
        var eachRowEls = 0;
        var isStart = spinner === 0;
        var isEnd = index === elements.length - 1;
        if (divideBy.length === 1) {
            eachRowEls = Math.trunc(100 / divideBy[0]);
        }
        if (divideBy.length > 1) {
            var count_1 = 0;
            divideBy.forEach(function (t) {
                if (count_1 + t > 100) {
                    return;
                }
                ++eachRowEls;
                count_1 = count_1 + t;
            });
        }
        if (eachRowEls > 1) {
            if (index > 0 && index < elements.length - 1) {
                if (doneEls + 1 === eachRowEls) {
                    isEnd = true;
                    spinner = 0;
                }
                else
                    ++spinner;
            }
            if (index === elements.length - 1) {
                spinner = 0;
            }
            if (index === 0) {
                ++spinner;
            }
        }
        else {
            isEnd = true;
            isStart = true;
        }
        ++doneEls;
        return {
            isStart: isStart,
            isEnd: isEnd,
            element: item,
        };
    });
};
var checkValidDivision = function (divideBy) {
    var is = false;
    if (divideBy.length) {
        var sum = divideBy.reduce(function (prev, cur) {
            return prev + cur;
        }, 0);
        if (sum <= 100 || sum > 0) {
            is = true;
        }
        else
            is = false;
    }
    return is;
};

var GridContext = react.createContext({
    divideBy: [0],
    elements: [],
    gutterSpace: 0,
});

var GridElement = function (_a) {
    var children = _a.children, customStyle = _a.customStyle;
    return (jsxRuntime.jsx("div", { className: "grid-element", style: customStyle, children: children }));
};

var GridElementsRenderer = function () {
    var _a = react.useContext(GridContext), divideBy = _a.divideBy, elements = _a.elements, gutterSpace = _a.gutterSpace;
    var ct = 0;
    return elements.map(function (item, index) {
        var _a;
        var element = react.createElement(GridElement, {
            key: ((_a = item === null || item === void 0 ? void 0 : item.element) === null || _a === void 0 ? void 0 : _a.toLocaleString()) + "" + index,
            customStyle: {
                width: "".concat(divideBy[ct], "%"),
                paddingLeft: item.isStart
                    ? 0
                    : item.isEnd
                        ? "".concat(gutterSpace / 2, "rem")
                        : "".concat(gutterSpace / 2, "rem"),
                paddingRight: item.isStart
                    ? "".concat(gutterSpace / 2, "rem")
                    : item.isEnd
                        ? 0
                        : "".concat(gutterSpace / 2, "rem"),
            },
            children: item.element,
        });
        ++ct;
        return element;
    });
};

var GridInner = function () {
    return (jsxRuntime.jsx("div", { className: "flex items-start flex-wrap", children: jsxRuntime.jsx(GridElementsRenderer, {}) }));
};

var Grid = function (_a) {
    var divideBy = _a.divideBy, gutterSpace = _a.gutterSpace, elements = _a.elements;
    if (!(elements === null || elements === void 0 ? void 0 : elements.length) || !(divideBy === null || divideBy === void 0 ? void 0 : divideBy.length)) {
        return jsxRuntime.jsx(jsxRuntime.Fragment, { children: "Provide data" });
    }
    var isValidDivision = checkValidDivision(divideBy);
    if (!isValidDivision) {
        return jsxRuntime.jsx(jsxRuntime.Fragment, { children: "Given wrong input" });
    }
    var memoizedElements = react.useMemo(function () {
        return getElements(elements, divideBy);
    }, [elements.toString()]);
    return (jsxRuntime.jsx(GridContext.Provider, { value: {
            divideBy: divideBy,
            elements: memoizedElements,
            gutterSpace: gutterSpace,
        }, children: jsxRuntime.jsx(GridInner, {}) }));
};

exports.Grid = Grid;
