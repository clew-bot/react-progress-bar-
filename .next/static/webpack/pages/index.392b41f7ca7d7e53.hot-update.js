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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _Users_chadlew_Desktop_react_progress_bar_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_chadlew_Desktop_react_progress_bar_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_chadlew_Desktop_react_progress_bar_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_ProgressBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/ProgressBar */ \"./pages/components/ProgressBar.js\");\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nfunction Home() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0), completed = ref[0], setCompleted = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(true), loaded = ref1[0], isLoaded = ref1[1];\n    var interval1;\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        var interval = setInterval(function() {\n            return setCompleted(function(prev) {\n                if (prev === 100) {\n                    clearInterval(interval);\n                }\n                return prev + 1;\n            });\n        }, 100);\n    }, [\n        interval1\n    ]);\n    var lookForProgressData = function() {};\n    var callAPI = function() {\n        var _ref = _asyncToGenerator(_Users_chadlew_Desktop_react_progress_bar_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var response, data;\n            return _Users_chadlew_Desktop_react_progress_bar_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return fetch(\"/api/hello\");\n                    case 2:\n                        response = _ctx.sent;\n                        _ctx.next = 5;\n                        return response.json();\n                    case 5:\n                        data = _ctx.sent;\n                        console.log(data);\n                    case 7:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function callAPI() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n                        children: \"Vote Here!\"\n                    }, void 0, false, {\n                        fileName: \"/Users/chadlew/Desktop/react-progress-bar-/pages/index.js\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Voting App made with NextJS and MongoDB\"\n                    }, void 0, false, {\n                        fileName: \"/Users/chadlew/Desktop/react-progress-bar-/pages/index.js\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/chadlew/Desktop/react-progress-bar-/pages/index.js\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/chadlew/Desktop/react-progress-bar-/pages/index.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n                children: loaded ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_ProgressBar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    bgcolor: \"#e0e0de\",\n                    completed: completed\n                }, void 0, false, {\n                    fileName: \"/Users/chadlew/Desktop/react-progress-bar-/pages/index.js\",\n                    lineNumber: 42,\n                    columnNumber: 20\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"header\", {\n                    className: \"flex border-8 items-center justify-evenly border-sky-500 py-2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                            className: \"border-4 bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border-green-500 hover:border-transparent rounded\",\n                            children: \"Menu\"\n                        }, void 0, false, {\n                            fileName: \"/Users/chadlew/Desktop/react-progress-bar-/pages/index.js\",\n                            lineNumber: 45,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                            className: \"border-4 bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border-green-500 hover:border-transparent rounded\",\n                            children: \"Login\"\n                        }, void 0, false, {\n                            fileName: \"/Users/chadlew/Desktop/react-progress-bar-/pages/index.js\",\n                            lineNumber: 49,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/chadlew/Desktop/react-progress-bar-/pages/index.js\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/chadlew/Desktop/react-progress-bar-/pages/index.js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/chadlew/Desktop/react-progress-bar-/pages/index.js\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, this));\n};\n_s(Home, \"oMbw6Jh8YTTD1ip7H6Q9mf1LfXo=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTRCO0FBQ0U7QUFDZ0I7QUFDSjtBQUNROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRW5DLFFBQVEsQ0FBQ00sSUFBSSxHQUFHLENBQUM7O0lBRTlCLEdBQUssQ0FBNkJGLEdBQVcsR0FBWEEsK0NBQVEsQ0FBQyxDQUFDLEdBQXJDRyxTQUFTLEdBQWtCSCxHQUFXLEtBQTNCSSxZQUFZLEdBQUlKLEdBQVc7SUFDN0MsR0FBSyxDQUFzQkEsSUFBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksR0FBakNLLE1BQU0sR0FBY0wsSUFBYyxLQUExQk0sUUFBUSxHQUFJTixJQUFjO0lBQ3pDLEdBQUcsQ0FBQ08sU0FBUTtJQUVaUixnREFBUyxDQUFDLFFBQ1osR0FEa0IsQ0FBQztRQUNiLEdBQUssQ0FBQ1EsUUFBUSxHQUFHQyxXQUFXLENBQUMsUUFBUTtZQUFGSixNQUFNLENBQU5BLFlBQVksQ0FBQyxRQUFRLENBQVBLLElBQUksRUFBSyxDQUFDO2dCQUN6RCxFQUFFLEVBQUVBLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQztvQkFDakJDLGFBQWEsQ0FBQ0gsUUFBUTtnQkFFeEIsQ0FBQztnQkFDRCxNQUFNLENBQUNFLElBQUksR0FBRyxDQUFDO1lBQ2pCLENBQUM7V0FBRyxHQUFHO0lBQ1gsQ0FBQyxFQUFFLENBQUNGO1FBQUFBLFNBQVE7SUFBQSxDQUFDO0lBRWIsR0FBSyxDQUFDSSxtQkFBbUIsR0FBRyxRQUM5QixHQURvQyxDQUFDLENBRWxDO0lBRUQsR0FBSyxDQUFDQyxPQUFPOzBMQUFHLFFBQVEsV0FBSSxDQUFDO2dCQUNuQkMsUUFBUSxFQUNSQyxJQUFJOzs7OzsrQkFEYUMsS0FBSyxDQUFDLENBQVk7O3dCQUFuQ0YsUUFBUTs7K0JBQ0tBLFFBQVEsQ0FBQ0csSUFBSTs7d0JBQTFCRixJQUFJO3dCQUNWRyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0osSUFBSTs7Ozs7O1FBQ3BCLENBQUM7d0JBSktGLE9BQU87Ozs7SUFLYixNQUFNLDZFQUNITyxDQUFHO1FBQUNDLFNBQVMsRUFBRXRCLDBFQUFnQjs7d0ZBQzdCRixrREFBSTs7Z0dBQ0YwQixDQUFLO2tDQUFDLENBQVU7Ozs7OztnR0FDaEJDLENBQUk7d0JBQUNDLElBQUksRUFBQyxDQUFhO3dCQUFDQyxPQUFPLEVBQUMsQ0FBeUM7Ozs7OztnR0FDekVDLENBQUk7d0JBQUNDLEdBQUcsRUFBQyxDQUFNO3dCQUFDQyxJQUFJLEVBQUMsQ0FBYzs7Ozs7Ozs7Ozs7O3dGQUVyQ0MsQ0FBSTswQkFHRHhCLE1BQU0sK0VBQUlKLCtEQUFXO29CQUFDNkIsT0FBTyxFQUFDLENBQVM7b0JBQUMzQixTQUFTLEVBQUVBLFNBQVM7Ozs7O3VHQUU3RDRCLENBQU07b0JBQUNYLFNBQVMsRUFBQyxDQUErRDs7b0dBQzVFWSxDQUFNOzRCQUFDWixTQUFTLEVBQUMsQ0FBc0o7c0NBQUMsQ0FFeks7Ozs7OztvR0FFQ1ksQ0FBTTs0QkFBQ1osU0FBUyxFQUFDLENBQXNKO3NDQUFDLENBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUzFMLENBQUM7R0FuRHVCbEIsSUFBSTtLQUFKQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5pbXBvcnQge3VzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9ncmVzc0JhciBmcm9tICcuL2NvbXBvbmVudHMvUHJvZ3Jlc3NCYXInXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gXG4gIGNvbnN0IFtjb21wbGV0ZWQsIHNldENvbXBsZXRlZF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2xvYWRlZCwgaXNMb2FkZWRdID0gdXNlU3RhdGUodHJ1ZSlcbiAgbGV0IGludGVydmFsO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHNldENvbXBsZXRlZCgocHJldikgPT4ge1xuICAgICAgICBpZiAocHJldiA9PT0gMTAwKSB7XG4gICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG5cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJldiArIDE7XG4gICAgICB9KSwgMTAwKTtcbiAgfSwgW2ludGVydmFsXSk7XG5cbiAgY29uc3QgbG9va0ZvclByb2dyZXNzRGF0YSA9ICgpID0+IHtcblxuICB9XG4gIFxuICBjb25zdCBjYWxsQVBJID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvaGVsbG9cIik7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlZvdGUgSGVyZSE8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiVm90aW5nIEFwcCBtYWRlIHdpdGggTmV4dEpTIGFuZCBNb25nb0RCXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPG1haW4+XG5cblxuICAgICAgICB7IGxvYWRlZCA/IDxQcm9ncmVzc0JhciBiZ2NvbG9yPVwiI2UwZTBkZVwiIGNvbXBsZXRlZD17Y29tcGxldGVkfSAvPiA6IFxuXG4gICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiZmxleCBib3JkZXItOCBpdGVtcy1jZW50ZXIganVzdGlmeS1ldmVubHkgYm9yZGVyLXNreS01MDAgcHktMlwiID5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYm9yZGVyLTQgYmctdHJhbnNwYXJlbnQgaG92ZXI6YmctZ3JlZW4tNTAwIHRleHQtZ3JlZW4tNzAwIGZvbnQtc2VtaWJvbGQgaG92ZXI6dGV4dC13aGl0ZSBweS0yIHB4LTQgYm9yZGVyLWdyZWVuLTUwMCBob3Zlcjpib3JkZXItdHJhbnNwYXJlbnQgcm91bmRlZFwiPlxuICAgICAgICAgICAgICBNZW51XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICBcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYm9yZGVyLTQgYmctdHJhbnNwYXJlbnQgaG92ZXI6YmctZ3JlZW4tNTAwIHRleHQtZ3JlZW4tNzAwIGZvbnQtc2VtaWJvbGQgaG92ZXI6dGV4dC13aGl0ZSBweS0yIHB4LTQgYm9yZGVyLWdyZWVuLTUwMCBob3Zlcjpib3JkZXItdHJhbnNwYXJlbnQgcm91bmRlZFwiPkxvZ2luPC9idXR0b24+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgICB9ICAgXG4gICAgICA8L21haW4+XG4gICAgIFxuXG4gIFxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsiSGVhZCIsIkltYWdlIiwic3R5bGVzIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJQcm9ncmVzc0JhciIsIkhvbWUiLCJjb21wbGV0ZWQiLCJzZXRDb21wbGV0ZWQiLCJsb2FkZWQiLCJpc0xvYWRlZCIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJwcmV2IiwiY2xlYXJJbnRlcnZhbCIsImxvb2tGb3JQcm9ncmVzc0RhdGEiLCJjYWxsQVBJIiwicmVzcG9uc2UiLCJkYXRhIiwiZmV0Y2giLCJqc29uIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJtYWluIiwiYmdjb2xvciIsImhlYWRlciIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});