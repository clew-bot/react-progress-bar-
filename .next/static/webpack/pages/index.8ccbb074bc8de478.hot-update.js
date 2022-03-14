"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/components/ProgressBar.js":
/*!*****************************************!*\
  !*** ./pages/components/ProgressBar.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nvar _this = undefined;\nvar ProgressBar = function(props) {\n    var bgcolor = props.bgcolor, completed = props.completed, loaded = props.loaded;\n    var containerStyles = _defineProperty({\n        height: 20,\n        width: '100%',\n        backgroundColor: \"#e0e0de\",\n        borderRadius: 10,\n        paddingTop: \"100px\",\n        position: \"absolute\",\n        top: \"20vh\"\n    }, \"backgroundColor\", \"red\");\n    var fillerStyles = {\n        height: '100%',\n        width: \"\".concat(completed, \"%\"),\n        backgroundColor: \"green !important\",\n        borderRadius: 'inherit',\n        textAlign: 'right',\n        position: \"absolute\",\n        top: \"0\",\n        transition: \"width 0.5s ease-in-out\"\n    };\n    var textStyles = {\n        position: \"absolute\",\n        top: \"2vh\",\n        left: \"9vh\",\n        zIndex: \"2\"\n    };\n    var labelStyles = {\n        color: 'white',\n        fontWeight: 'bold',\n        textAlign: \"center\",\n        position: \"relative\",\n        zIndex: \"9\"\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.AnimatePresence, {\n        children: loaded && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n            initial: {\n                opacity: 0\n            },\n            animate: {\n                opacity: 1\n            },\n            exit: {\n                opacity: 0\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: containerStyles,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            style: textStyles,\n                            children: \"We're Loading 💅\".concat(completed, \"%\")\n                        }, void 0, false, {\n                            fileName: \"/Users/chadlew/Desktop/react-progress-bar-/pages/components/ProgressBar.js\",\n                            lineNumber: 57,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: fillerStyles,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                style: labelStyles\n                            }, void 0, false, {\n                                fileName: \"/Users/chadlew/Desktop/react-progress-bar-/pages/components/ProgressBar.js\",\n                                lineNumber: 59,\n                                columnNumber: 11\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/chadlew/Desktop/react-progress-bar-/pages/components/ProgressBar.js\",\n                            lineNumber: 58,\n                            columnNumber: 9\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/chadlew/Desktop/react-progress-bar-/pages/components/ProgressBar.js\",\n                    lineNumber: 56,\n                    columnNumber: 7\n                }, _this),\n                \" \"\n            ]\n        }, \"progressBar\", true, {\n            fileName: \"/Users/chadlew/Desktop/react-progress-bar-/pages/components/ProgressBar.js\",\n            lineNumber: 49,\n            columnNumber: 22\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/chadlew/Desktop/react-progress-bar-/pages/components/ProgressBar.js\",\n        lineNumber: 48,\n        columnNumber: 7\n    }, _this));\n};\n_c = ProgressBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProgressBar);\nvar _c;\n$RefreshReg$(_c, \"ProgressBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL1Byb2dyZXNzQmFyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBeUI7QUFDOEI7Ozs7Ozs7Ozs7Ozs7OztBQUd2RCxHQUFLLENBQUNHLFdBQVcsR0FBRyxRQUFRLENBQVBDLEtBQUssRUFBSyxDQUFDO0lBQzVCLEdBQUssQ0FBR0MsT0FBTyxHQUF3QkQsS0FBSyxDQUFwQ0MsT0FBTyxFQUFFQyxTQUFTLEdBQWFGLEtBQUssQ0FBM0JFLFNBQVMsRUFBRUMsTUFBTSxHQUFLSCxLQUFLLENBQWhCRyxNQUFNO0lBRWxDLEdBQUssQ0FBQ0MsZUFBZTtRQUNuQkMsTUFBTSxFQUFFLEVBQUU7UUFDVkMsS0FBSyxFQUFFLENBQU07UUFDYkMsZUFBZSxFQUFFLENBQVM7UUFDMUJDLFlBQVksRUFBRSxFQUFFO1FBQ2hCQyxVQUFVLEVBQUUsQ0FBTztRQUNuQkMsUUFBUSxFQUFFLENBQVU7UUFDcEJDLEdBQUcsRUFBRSxDQUFNO09BQ1hKLENBQWUsa0JBQUUsQ0FBSztJQUl4QixHQUFLLENBQUNLLFlBQVksR0FBRyxDQUFDO1FBQ3BCUCxNQUFNLEVBQUUsQ0FBTTtRQUNkQyxLQUFLLEVBQUcsR0FBWSxNQUFDLENBQVhKLFNBQVMsRUFBQyxDQUFDO1FBQ3JCSyxlQUFlLEVBQUUsQ0FBa0I7UUFDbkNDLFlBQVksRUFBRSxDQUFTO1FBQ3ZCSyxTQUFTLEVBQUUsQ0FBTztRQUNsQkgsUUFBUSxFQUFFLENBQVU7UUFDcEJDLEdBQUcsRUFBRSxDQUFHO1FBQ1JHLFVBQVUsRUFBRSxDQUF3QjtJQUV0QyxDQUFDO0lBQ0QsR0FBSyxDQUFDQyxVQUFVLEdBQUcsQ0FBQztRQUNoQkwsUUFBUSxFQUFFLENBQVU7UUFDcEJDLEdBQUcsRUFBRSxDQUFLO1FBQ1ZLLElBQUksRUFBRSxDQUFLO1FBQ1hDLE1BQU0sRUFBRSxDQUFHO0lBQ2YsQ0FBQztJQUVELEdBQUssQ0FBQ0MsV0FBVyxHQUFHLENBQUM7UUFDbkJDLEtBQUssRUFBRSxDQUFPO1FBQ2RDLFVBQVUsRUFBRSxDQUFNO1FBQ2xCUCxTQUFTLEVBQUUsQ0FBUTtRQUNuQkgsUUFBUSxFQUFFLENBQVU7UUFDcEJPLE1BQU0sRUFBRSxDQUFHO0lBRWIsQ0FBQztJQUVELE1BQU0sNkVBQ0huQiwwREFBZTtrQkFDZkssTUFBTSxnRkFBU04scURBQVU7WUFFeEJ5QixPQUFPLEVBQUUsQ0FBQztnQkFBQ0MsT0FBTyxFQUFFLENBQUM7WUFBQyxDQUFDO1lBQ3ZCQyxPQUFPLEVBQUUsQ0FBQztnQkFBQ0QsT0FBTyxFQUFFLENBQUM7WUFBQyxDQUFDO1lBQ3ZCRSxJQUFJLEVBQUUsQ0FBQztnQkFBQ0YsT0FBTyxFQUFFLENBQUM7WUFBQyxDQUFDOzs0RkFHckJGLENBQUc7b0JBQUNLLEtBQUssRUFBRXRCLGVBQWU7O29HQUN0QnVCLENBQUM7NEJBQUNELEtBQUssRUFBRVgsVUFBVTtzQ0FBSSxDQUFlLG9CQUFZLE1BQUMsQ0FBWGIsU0FBUyxFQUFDLENBQUM7Ozs7OztvR0FDckRtQixDQUFHOzRCQUFDSyxLQUFLLEVBQUVkLFlBQVk7a0hBQ3JCZ0IsQ0FBSTtnQ0FBQ0YsS0FBSyxFQUFFUixXQUFXOzs7Ozs7Ozs7Ozs7Ozs7OztnQkFFdEIsQ0FBQzs7V0FYRCxDQUFhOzs7Ozs7Ozs7O0FBY3ZCLENBQUM7S0EzREduQixXQUFXO0FBNkRmLCtEQUFlQSxXQUFXLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9Qcm9ncmVzc0Jhci5qcz9iMmI4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IG1vdGlvbiwgQW5pbWF0ZVByZXNlbmNlIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcblxuXG5jb25zdCBQcm9ncmVzc0JhciA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgYmdjb2xvciwgY29tcGxldGVkLCBsb2FkZWQgfSA9IHByb3BzO1xuICBcbiAgICBjb25zdCBjb250YWluZXJTdHlsZXMgPSB7XG4gICAgICBoZWlnaHQ6IDIwLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZTBlMGRlXCIsXG4gICAgICBib3JkZXJSYWRpdXM6IDEwLFxuICAgICAgcGFkZGluZ1RvcDogXCIxMDBweFwiLFxuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgIHRvcDogXCIyMHZoXCIsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmVkXCIsXG5cbiAgICB9XG4gIFxuICAgIGNvbnN0IGZpbGxlclN0eWxlcyA9IHtcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgd2lkdGg6IGAke2NvbXBsZXRlZH0lYCxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCJncmVlbiAhaW1wb3J0YW50XCIsXG4gICAgICBib3JkZXJSYWRpdXM6ICdpbmhlcml0JyxcbiAgICAgIHRleHRBbGlnbjogJ3JpZ2h0JyxcbiAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICB0b3A6IFwiMFwiLFxuICAgICAgdHJhbnNpdGlvbjogXCJ3aWR0aCAwLjVzIGVhc2UtaW4tb3V0XCIsXG5cbiAgICB9XG4gICAgY29uc3QgdGV4dFN0eWxlcyA9IHtcbiAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgdG9wOiBcIjJ2aFwiLFxuICAgICAgICBsZWZ0OiBcIjl2aFwiLFxuICAgICAgICB6SW5kZXg6IFwiMlwiLFxuICAgIH1cbiAgXG4gICAgY29uc3QgbGFiZWxTdHlsZXMgPSB7XG4gICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgICB6SW5kZXg6IFwiOVwiLFxuXG4gICAgfVxuICBcbiAgICByZXR1cm4gKFxuICAgICAgPEFuaW1hdGVQcmVzZW5jZT5cbiAgICAgIHtsb2FkZWQgJiYgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgIGtleT1cInByb2dyZXNzQmFyXCJcbiAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwIH19XG4gICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSB9fVxuICAgICAgICBleGl0PXt7IG9wYWNpdHk6IDAgfX1cblxuICAgID5cbiAgICAgIDxkaXYgc3R5bGU9e2NvbnRhaW5lclN0eWxlc30+XG4gICAgICAgICAgPHAgc3R5bGU9e3RleHRTdHlsZXN9PntgV2UncmUgTG9hZGluZyDwn5KFJHtjb21wbGV0ZWR9JWB9PC9wPlxuICAgICAgICA8ZGl2IHN0eWxlPXtmaWxsZXJTdHlsZXN9PlxuICAgICAgICAgIDxzcGFuIHN0eWxlPXtsYWJlbFN0eWxlc30+PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PiA8L21vdGlvbi5kaXY+IH1cbiAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxuICAgICk7XG4gIH07XG4gIFxuICBleHBvcnQgZGVmYXVsdCBQcm9ncmVzc0JhcjsiXSwibmFtZXMiOlsiUmVhY3QiLCJtb3Rpb24iLCJBbmltYXRlUHJlc2VuY2UiLCJQcm9ncmVzc0JhciIsInByb3BzIiwiYmdjb2xvciIsImNvbXBsZXRlZCIsImxvYWRlZCIsImNvbnRhaW5lclN0eWxlcyIsImhlaWdodCIsIndpZHRoIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyUmFkaXVzIiwicGFkZGluZ1RvcCIsInBvc2l0aW9uIiwidG9wIiwiZmlsbGVyU3R5bGVzIiwidGV4dEFsaWduIiwidHJhbnNpdGlvbiIsInRleHRTdHlsZXMiLCJsZWZ0IiwiekluZGV4IiwibGFiZWxTdHlsZXMiLCJjb2xvciIsImZvbnRXZWlnaHQiLCJkaXYiLCJpbml0aWFsIiwib3BhY2l0eSIsImFuaW1hdGUiLCJleGl0Iiwic3R5bGUiLCJwIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/ProgressBar.js\n");

/***/ })

});