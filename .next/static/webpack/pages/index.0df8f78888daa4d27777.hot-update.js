webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ \"./pages/Header.js\");\n/* harmony import */ var _components_SliceZone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/SliceZone */ \"./pages/components/SliceZone.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prismic-reactjs */ \"./node_modules/prismic-reactjs/dist/prismic-reactjs.js\");\n/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prismic_reactjs__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n\n\nvar _jsxFileName = \"/Users/Brad/ngo-next-prismic/pages/index.js\",\n    _this = undefined;\n\n\n\n\n\n\n\nvar Index = function Index(_ref) {\n  var home = _ref.home,\n      header = _ref.header;\n  //Tests\n  var banner = home.data;\n  var quote = home.data.body[0].primary;\n  var nav = console.log(home);\n  console.log(header);\n  console.log(banner);\n  console.log(quote);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"Container\"], {\n    className: \"page-container\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"NGO Example\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      header: home.data\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"Row\"], {\n      children: [prismic_reactjs__WEBPACK_IMPORTED_MODULE_4__[\"RichText\"].asText(banner.title), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 9\n      }, _this), prismic_reactjs__WEBPACK_IMPORTED_MODULE_4__[\"RichText\"].asText(banner.text), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }, _this), prismic_reactjs__WEBPACK_IMPORTED_MODULE_4__[\"RichText\"].asText(banner.button_label)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_SliceZone__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      slices: home.data.body\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 19,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = Index;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJJbmRleCIsImhvbWUiLCJoZWFkZXIiLCJiYW5uZXIiLCJkYXRhIiwicXVvdGUiLCJib2R5IiwicHJpbWFyeSIsIm5hdiIsImNvbnNvbGUiLCJsb2ciLCJSaWNoVGV4dCIsImFzVGV4dCIsInRpdGxlIiwidGV4dCIsImJ1dHRvbl9sYWJlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsT0FBc0I7QUFBQSxNQUFuQkMsSUFBbUIsUUFBbkJBLElBQW1CO0FBQUEsTUFBYkMsTUFBYSxRQUFiQSxNQUFhO0FBQ2xDO0FBQ0EsTUFBTUMsTUFBTSxHQUFHRixJQUFJLENBQUNHLElBQXBCO0FBQ0EsTUFBTUMsS0FBSyxHQUFHSixJQUFJLENBQUNHLElBQUwsQ0FBVUUsSUFBVixDQUFlLENBQWYsRUFBa0JDLE9BQWhDO0FBQ0EsTUFBTUMsR0FBRyxHQUNUQyxPQUFPLENBQUNDLEdBQVIsQ0FBWVQsSUFBWixDQURBO0FBRUFRLFNBQU8sQ0FBQ0MsR0FBUixDQUFZUixNQUFaO0FBQ0FPLFNBQU8sQ0FBQ0MsR0FBUixDQUFZUCxNQUFaO0FBQ0FNLFNBQU8sQ0FBQ0MsR0FBUixDQUFZTCxLQUFaO0FBRUEsc0JBQ0UscUVBQUMseURBQUQ7QUFBVyxhQUFTLEVBQUMsZ0JBQXJCO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFBQSw2QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUtFLHFFQUFDLCtDQUFEO0FBQVEsWUFBTSxFQUFFSixJQUFJLENBQUNHO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMRixlQU1FLHFFQUFDLG1EQUFEO0FBQUEsaUJBQ0dPLHdEQUFRLENBQUNDLE1BQVQsQ0FBZ0JULE1BQU0sQ0FBQ1UsS0FBdkIsQ0FESCxlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRixFQUdHRix3REFBUSxDQUFDQyxNQUFULENBQWdCVCxNQUFNLENBQUNXLElBQXZCLENBSEgsZUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkYsRUFLR0gsd0RBQVEsQ0FBQ0MsTUFBVCxDQUFnQlQsTUFBTSxDQUFDWSxZQUF2QixDQUxIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5GLGVBYUUscUVBQUMsNkRBQUQ7QUFBVyxZQUFNLEVBQUVkLElBQUksQ0FBQ0csSUFBTCxDQUFVRTtBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFpQkQsQ0EzQkQ7O0tBQU1OLEs7O0FBMkNTQSxvRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9IZWFkZXJcIjtcbmltcG9ydCBTbGljZVpvbmUgZnJvbSBcIi4vY29tcG9uZW50cy9TbGljZVpvbmVcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IENsaWVudCB9IGZyb20gXCIuLi9wcmlzbWljLWNvbmZpZ3VyYXRpb25cIjtcbmltcG9ydCB7IFJpY2hUZXh0IH0gZnJvbSBcInByaXNtaWMtcmVhY3Rqc1wiO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBSb3cgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XG5cbmNvbnN0IEluZGV4ID0gKHsgaG9tZSwgaGVhZGVyIH0pID0+IHtcbiAgLy9UZXN0c1xuICBjb25zdCBiYW5uZXIgPSBob21lLmRhdGE7XG4gIGNvbnN0IHF1b3RlID0gaG9tZS5kYXRhLmJvZHlbMF0ucHJpbWFyeTtcbiAgY29uc3QgbmF2ID0gXG4gIGNvbnNvbGUubG9nKGhvbWUpO1xuICBjb25zb2xlLmxvZyhoZWFkZXIpO1xuICBjb25zb2xlLmxvZyhiYW5uZXIpO1xuICBjb25zb2xlLmxvZyhxdW90ZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT1cInBhZ2UtY29udGFpbmVyXCI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPk5HTyBFeGFtcGxlPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPEhlYWRlciBoZWFkZXI9e2hvbWUuZGF0YX0gLz5cbiAgICAgIDxSb3c+XG4gICAgICAgIHtSaWNoVGV4dC5hc1RleHQoYmFubmVyLnRpdGxlKX1cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIHtSaWNoVGV4dC5hc1RleHQoYmFubmVyLnRleHQpfVxuICAgICAgICA8YnIgLz5cbiAgICAgICAge1JpY2hUZXh0LmFzVGV4dChiYW5uZXIuYnV0dG9uX2xhYmVsKX1cbiAgICAgIDwvUm93PlxuICAgICAgPFNsaWNlWm9uZSBzbGljZXM9e2hvbWUuZGF0YS5ib2R5fSAvPlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICBjb25zb2xlLmxvZyhcImhlbGxvXCIpO1xuICBjb25zdCBjbGllbnQgPSBDbGllbnQoKTtcbiAgY29uc3QgaG9tZSA9IGF3YWl0IGNsaWVudC5nZXRTaW5nbGUoXCJob21lXCIpO1xuICBjb25zdCBoZWFkZXIgPSBhd2FpdCBjbGllbnQuZ2V0U2luZ2xlKFwiaGVhZGVyXCIpXG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgaG9tZTogaG9tZSxcbiAgICAgIGhlYWRlcixcbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})