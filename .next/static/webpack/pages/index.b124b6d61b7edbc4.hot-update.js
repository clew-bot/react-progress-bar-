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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _Users_chadlew_Desktop_react_progress_bar_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_chadlew_Desktop_react_progress_bar_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_chadlew_Desktop_react_progress_bar_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_ProgressBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/ProgressBar */ \"./pages/components/ProgressBar.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nfunction Home() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0), completed = ref[0], setCompleted = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(true), loaded = ref1[0], isLoaded = ref1[1];\n    var interval1;\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        var interval = setInterval(function() {\n            return setCompleted(function(prev) {\n                if (prev === 99) {\n                    clearInterval(interval);\n                }\n                return prev + 1;\n            });\n        }, 100);\n    }, [\n        interval1\n    ]);\n    var callAPI = function() {\n        var _ref = _asyncToGenerator(_Users_chadlew_Desktop_react_progress_bar_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var response, data;\n            return _Users_chadlew_Desktop_react_progress_bar_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return fetch(\"/api/hello\");\n                    case 2:\n                        response = _ctx.sent;\n                        _ctx.next = 5;\n                        return response.json();\n                    case 5:\n                        data = _ctx.sent;\n                        console.log(data);\n                    case 7:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function callAPI() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n                        children: \"Vote Here!\"\n                    }, void 0, false, {\n                        fileName: \"/Users/chadlew/Desktop/react-progress-bar-/pages/index.js\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Voting App made with NextJS and MongoDB\"\n                    }, void 0, false, {\n                        fileName: \"/Users/chadlew/Desktop/react-progress-bar-/pages/index.js\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/chadlew/Desktop/react-progress-bar-/pages/index.js\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/chadlew/Desktop/react-progress-bar-/pages/index.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n                children: loaded ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {\n                    animate: {\n                        opacity: 0\n                    },\n                    transition: {\n                        delay: 1\n                    },\n                    children: [\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_ProgressBar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            bgcolor: \"#e0e0de\",\n                            completed: completed\n                        }, void 0, false, {\n                            fileName: \"/Users/chadlew/Desktop/react-progress-bar-/pages/index.js\",\n                            lineNumber: 40,\n                            columnNumber: 3\n                        }, this),\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/chadlew/Desktop/react-progress-bar-/pages/index.js\",\n                    lineNumber: 39,\n                    columnNumber: 19\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"header\", {\n                    className: \"flex border-8 items-center justify-evenly border-sky-500 py-2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                            className: \"border-4 bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border-green-500 hover:border-transparent rounded\",\n                            children: \"Menu\"\n                        }, void 0, false, {\n                            fileName: \"/Users/chadlew/Desktop/react-progress-bar-/pages/index.js\",\n                            lineNumber: 42,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                            className: \"border-4 bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border-green-500 hover:border-transparent rounded\",\n                            children: \"Login\"\n                        }, void 0, false, {\n                            fileName: \"/Users/chadlew/Desktop/react-progress-bar-/pages/index.js\",\n                            lineNumber: 46,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/chadlew/Desktop/react-progress-bar-/pages/index.js\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/chadlew/Desktop/react-progress-bar-/pages/index.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/chadlew/Desktop/react-progress-bar-/pages/index.js\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this));\n};\n_s(Home, \"oMbw6Jh8YTTD1ip7H6Q9mf1LfXo=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE0QjtBQUNFO0FBQ2dCO0FBQ0o7QUFDUTtBQUNaOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXZCLFFBQVEsQ0FBQ08sSUFBSSxHQUFHLENBQUM7O0lBRTlCLEdBQUssQ0FBNkJILEdBQVcsR0FBWEEsK0NBQVEsQ0FBQyxDQUFDLEdBQXJDSSxTQUFTLEdBQWtCSixHQUFXLEtBQTNCSyxZQUFZLEdBQUlMLEdBQVc7SUFDN0MsR0FBSyxDQUFzQkEsSUFBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksR0FBakNNLE1BQU0sR0FBY04sSUFBYyxLQUExQk8sUUFBUSxHQUFJUCxJQUFjO0lBQ3pDLEdBQUcsQ0FBQ1EsU0FBUTtJQUVaVCxnREFBUyxDQUFDLFFBQ1osR0FEa0IsQ0FBQztRQUNiLEdBQUssQ0FBQ1MsUUFBUSxHQUFHQyxXQUFXLENBQUMsUUFBUTtZQUFGSixNQUFNLENBQU5BLFlBQVksQ0FBQyxRQUFRLENBQVBLLElBQUksRUFBSyxDQUFDO2dCQUN6RCxFQUFFLEVBQUVBLElBQUksS0FBSyxFQUFFLEVBQUUsQ0FBQztvQkFDaEJDLGFBQWEsQ0FBQ0gsUUFBUTtnQkFFeEIsQ0FBQztnQkFDRCxNQUFNLENBQUNFLElBQUksR0FBRyxDQUFDO1lBQ2pCLENBQUM7V0FBRyxHQUFHO0lBQ1gsQ0FBQyxFQUFFLENBQUNGO1FBQUFBLFNBQVE7SUFBQSxDQUFDO0lBRWIsR0FBSyxDQUFDSSxPQUFPOzBMQUFHLFFBQVEsV0FBSSxDQUFDO2dCQUNuQkMsUUFBUSxFQUNSQyxJQUFJOzs7OzsrQkFEYUMsS0FBSyxDQUFDLENBQVk7O3dCQUFuQ0YsUUFBUTs7K0JBQ0tBLFFBQVEsQ0FBQ0csSUFBSTs7d0JBQTFCRixJQUFJO3dCQUNWRyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0osSUFBSTs7Ozs7O1FBQ3BCLENBQUM7d0JBSktGLE9BQU87Ozs7SUFLYixNQUFNLDZFQUNITyxDQUFHO1FBQUNDLFNBQVMsRUFBRXRCLDBFQUFnQjs7d0ZBQzdCRixrREFBSTs7Z0dBQ0YwQixDQUFLO2tDQUFDLENBQVU7Ozs7OztnR0FDaEJDLENBQUk7d0JBQUNDLElBQUksRUFBQyxDQUFhO3dCQUFDQyxPQUFPLEVBQUMsQ0FBeUM7Ozs7OztnR0FDekVDLENBQUk7d0JBQUNDLEdBQUcsRUFBQyxDQUFNO3dCQUFDQyxJQUFJLEVBQUMsQ0FBYzs7Ozs7Ozs7Ozs7O3dGQUVyQ0MsQ0FBSTswQkFHRHZCLE1BQU0sK0VBQUdKLHFEQUFVO29CQUFDNEIsT0FBTyxFQUFFLENBQUM7d0JBQUNDLE9BQU8sRUFBRSxDQUFDO29CQUFDLENBQUM7b0JBQUVDLFVBQVUsRUFBRSxDQUFDO3dCQUFDQyxLQUFLLEVBQUUsQ0FBQztvQkFBQyxDQUFDOzt3QkFDOUUsQ0FBQztvR0FBQ2hDLCtEQUFXOzRCQUFDaUMsT0FBTyxFQUFDLENBQVM7NEJBQUM5QixTQUFTLEVBQUVBLFNBQVM7Ozs7Ozt3QkFBSSxDQUFDOzs7Ozs7dUdBQ2pEK0IsQ0FBTTtvQkFBQ2YsU0FBUyxFQUFDLENBQStEOztvR0FDNUVnQixDQUFNOzRCQUFDaEIsU0FBUyxFQUFDLENBQXNKO3NDQUFDLENBRXpLOzs7Ozs7b0dBRUNnQixDQUFNOzRCQUFDaEIsU0FBUyxFQUFDLENBQXNKO3NDQUFDLENBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUzFMLENBQUM7R0EvQ3VCakIsSUFBSTtLQUFKQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5pbXBvcnQge3VzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9ncmVzc0JhciBmcm9tICcuL2NvbXBvbmVudHMvUHJvZ3Jlc3NCYXInXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuIFxuICBjb25zdCBbY29tcGxldGVkLCBzZXRDb21wbGV0ZWRdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtsb2FkZWQsIGlzTG9hZGVkXSA9IHVzZVN0YXRlKHRydWUpXG4gIGxldCBpbnRlcnZhbDtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiBzZXRDb21wbGV0ZWQoKHByZXYpID0+IHtcbiAgICAgICAgaWYgKHByZXYgPT09IDk5KSB7XG4gICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG5cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJldiArIDE7XG4gICAgICB9KSwgMTAwKTtcbiAgfSwgW2ludGVydmFsXSk7XG4gIFxuICBjb25zdCBjYWxsQVBJID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvaGVsbG9cIik7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlZvdGUgSGVyZSE8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiVm90aW5nIEFwcCBtYWRlIHdpdGggTmV4dEpTIGFuZCBNb25nb0RCXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPG1haW4+XG5cblxuICAgICAgICB7IGxvYWRlZCA/PG1vdGlvbi5kaXYgYW5pbWF0ZT17eyBvcGFjaXR5OiAwIH19IHRyYW5zaXRpb249e3sgZGVsYXk6IDEgfX1cbj4gPFByb2dyZXNzQmFyIGJnY29sb3I9XCIjZTBlMGRlXCIgY29tcGxldGVkPXtjb21wbGV0ZWR9IC8+IDwvbW90aW9uLmRpdj4gOiBcbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJmbGV4IGJvcmRlci04IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWV2ZW5seSBib3JkZXItc2t5LTUwMCBweS0yXCIgPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJib3JkZXItNCBiZy10cmFuc3BhcmVudCBob3ZlcjpiZy1ncmVlbi01MDAgdGV4dC1ncmVlbi03MDAgZm9udC1zZW1pYm9sZCBob3Zlcjp0ZXh0LXdoaXRlIHB5LTIgcHgtNCBib3JkZXItZ3JlZW4tNTAwIGhvdmVyOmJvcmRlci10cmFuc3BhcmVudCByb3VuZGVkXCI+XG4gICAgICAgICAgICAgIE1lbnVcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgIFxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJib3JkZXItNCBiZy10cmFuc3BhcmVudCBob3ZlcjpiZy1ncmVlbi01MDAgdGV4dC1ncmVlbi03MDAgZm9udC1zZW1pYm9sZCBob3Zlcjp0ZXh0LXdoaXRlIHB5LTIgcHgtNCBib3JkZXItZ3JlZW4tNTAwIGhvdmVyOmJvcmRlci10cmFuc3BhcmVudCByb3VuZGVkXCI+TG9naW48L2J1dHRvbj5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgIH0gICBcbiAgICAgIDwvbWFpbj5cbiAgICAgXG5cbiAgXG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwiSW1hZ2UiLCJzdHlsZXMiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlByb2dyZXNzQmFyIiwibW90aW9uIiwiSG9tZSIsImNvbXBsZXRlZCIsInNldENvbXBsZXRlZCIsImxvYWRlZCIsImlzTG9hZGVkIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInByZXYiLCJjbGVhckludGVydmFsIiwiY2FsbEFQSSIsInJlc3BvbnNlIiwiZGF0YSIsImZldGNoIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwibWFpbiIsImFuaW1hdGUiLCJvcGFjaXR5IiwidHJhbnNpdGlvbiIsImRlbGF5IiwiYmdjb2xvciIsImhlYWRlciIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});