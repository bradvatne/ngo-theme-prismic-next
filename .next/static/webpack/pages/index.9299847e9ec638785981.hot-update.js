webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ \"./pages/Header.js\");\n/* harmony import */ var _components_SliceZone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/SliceZone */ \"./pages/components/SliceZone.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prismic-reactjs */ \"./node_modules/prismic-reactjs/dist/prismic-reactjs.js\");\n/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prismic_reactjs__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n\n\nvar _jsxFileName = \"/Users/Brad/ngo-next-prismic/pages/index.js\",\n    _this = undefined;\n\n\n\n\n\n\n\nvar Index = function Index(_ref) {\n  var doc = _ref.doc;\n  //Tests\n  var banner = doc.data;\n  var quote = doc.data.body[0].primary;\n  console.log(doc);\n  console.log(header);\n  console.log(banner);\n  console.log(quote);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"Container\"], {\n    className: \"page-container\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"NGO Example\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      header: doc.data\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"Row\"], {\n      children: [prismic_reactjs__WEBPACK_IMPORTED_MODULE_4__[\"RichText\"].asText(banner.title), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 9\n      }, _this), prismic_reactjs__WEBPACK_IMPORTED_MODULE_4__[\"RichText\"].asText(banner.text), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, _this), prismic_reactjs__WEBPACK_IMPORTED_MODULE_4__[\"RichText\"].asText(banner.button_label)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_SliceZone__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      slices: doc.data.body\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = Index;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJJbmRleCIsImRvYyIsImJhbm5lciIsImRhdGEiLCJxdW90ZSIsImJvZHkiLCJwcmltYXJ5IiwiY29uc29sZSIsImxvZyIsImhlYWRlciIsIlJpY2hUZXh0IiwiYXNUZXh0IiwidGl0bGUiLCJ0ZXh0IiwiYnV0dG9uX2xhYmVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxPQUFhO0FBQUEsTUFBVkMsR0FBVSxRQUFWQSxHQUFVO0FBQ3pCO0FBQ0EsTUFBTUMsTUFBTSxHQUFHRCxHQUFHLENBQUNFLElBQW5CO0FBQ0EsTUFBTUMsS0FBSyxHQUFHSCxHQUFHLENBQUNFLElBQUosQ0FBU0UsSUFBVCxDQUFjLENBQWQsRUFBaUJDLE9BQS9CO0FBQ0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZUCxHQUFaO0FBQ0FNLFNBQU8sQ0FBQ0MsR0FBUixDQUFZQyxNQUFaO0FBQ0FGLFNBQU8sQ0FBQ0MsR0FBUixDQUFZTixNQUFaO0FBQ0FLLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSixLQUFaO0FBRUEsc0JBQ0UscUVBQUMseURBQUQ7QUFBVyxhQUFTLEVBQUMsZ0JBQXJCO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFBQSw2QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUtFLHFFQUFDLCtDQUFEO0FBQVEsWUFBTSxFQUFFSCxHQUFHLENBQUNFO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMRixlQU1FLHFFQUFDLG1EQUFEO0FBQUEsaUJBQ0dPLHdEQUFRLENBQUNDLE1BQVQsQ0FBZ0JULE1BQU0sQ0FBQ1UsS0FBdkIsQ0FESCxlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRixFQUdHRix3REFBUSxDQUFDQyxNQUFULENBQWdCVCxNQUFNLENBQUNXLElBQXZCLENBSEgsZUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkYsRUFLR0gsd0RBQVEsQ0FBQ0MsTUFBVCxDQUFnQlQsTUFBTSxDQUFDWSxZQUF2QixDQUxIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5GLGVBYUUscUVBQUMsNkRBQUQ7QUFBVyxZQUFNLEVBQUViLEdBQUcsQ0FBQ0UsSUFBSixDQUFTRTtBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFpQkQsQ0ExQkQ7O0tBQU1MLEs7O0FBMENTQSxvRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9IZWFkZXJcIjtcbmltcG9ydCBTbGljZVpvbmUgZnJvbSBcIi4vY29tcG9uZW50cy9TbGljZVpvbmVcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IENsaWVudCB9IGZyb20gXCIuLi9wcmlzbWljLWNvbmZpZ3VyYXRpb25cIjtcbmltcG9ydCB7IFJpY2hUZXh0IH0gZnJvbSBcInByaXNtaWMtcmVhY3Rqc1wiO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBSb3cgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XG5cbmNvbnN0IEluZGV4ID0gKHsgZG9jIH0pID0+IHtcbiAgLy9UZXN0c1xuICBjb25zdCBiYW5uZXIgPSBkb2MuZGF0YTtcbiAgY29uc3QgcXVvdGUgPSBkb2MuZGF0YS5ib2R5WzBdLnByaW1hcnk7XG4gIGNvbnNvbGUubG9nKGRvYyk7XG4gIGNvbnNvbGUubG9nKGhlYWRlcik7XG4gIGNvbnNvbGUubG9nKGJhbm5lcik7XG4gIGNvbnNvbGUubG9nKHF1b3RlKTtcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgY2xhc3NOYW1lPVwicGFnZS1jb250YWluZXJcIj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+TkdPIEV4YW1wbGU8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8SGVhZGVyIGhlYWRlcj17ZG9jLmRhdGF9IC8+XG4gICAgICA8Um93PlxuICAgICAgICB7UmljaFRleHQuYXNUZXh0KGJhbm5lci50aXRsZSl9XG4gICAgICAgIDxiciAvPlxuICAgICAgICB7UmljaFRleHQuYXNUZXh0KGJhbm5lci50ZXh0KX1cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIHtSaWNoVGV4dC5hc1RleHQoYmFubmVyLmJ1dHRvbl9sYWJlbCl9XG4gICAgICA8L1Jvdz5cbiAgICAgIDxTbGljZVpvbmUgc2xpY2VzPXtkb2MuZGF0YS5ib2R5fSAvPlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICBjb25zb2xlLmxvZyhcImhlbGxvXCIpO1xuICBjb25zdCBjbGllbnQgPSBDbGllbnQoKTtcbiAgY29uc3QgZG9jID0gYXdhaXQgY2xpZW50LmdldFNpbmdsZShcImhvbWVcIik7XG4gIGNvbnN0IGhlYWRlciA9IGF3YWl0IGNsaWVudC5nZXRTaW5nbGUoXCJoZWFkZXJcIilcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBkb2MsXG4gICAgICBoZWFkZXIsXG4gICAgfSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})