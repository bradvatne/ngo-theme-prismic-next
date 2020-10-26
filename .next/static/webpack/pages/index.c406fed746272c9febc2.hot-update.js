webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ \"./pages/Header.js\");\n/* harmony import */ var _components_SliceZone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/SliceZone */ \"./pages/components/SliceZone.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prismic-reactjs */ \"./node_modules/prismic-reactjs/dist/prismic-reactjs.js\");\n/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prismic_reactjs__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n\n\nvar _jsxFileName = \"/Users/Brad/ngo-next-prismic/pages/index.js\",\n    _this = undefined;\n\n\n\n\n\n\n\nvar Index = function Index(_ref) {\n  var doc = _ref.doc;\n  var banner = doc.data;\n  var quote = doc.data.body[0].primary;\n  console.log(banner);\n  console.log(quote);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"Container\"], {\n    className: \"page-container\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"NGO Example\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      header: doc.data\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"Row\"], {\n      children: [prismic_reactjs__WEBPACK_IMPORTED_MODULE_4__[\"RichText\"].asText(banner.title), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 9\n      }, _this), prismic_reactjs__WEBPACK_IMPORTED_MODULE_4__[\"RichText\"].asText(banner.text), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 9\n      }, _this), prismic_reactjs__WEBPACK_IMPORTED_MODULE_4__[\"RichText\"].asText(banner.button_label)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_SliceZone__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      slices: doc.data.body\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 14,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = Index;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJJbmRleCIsImRvYyIsImJhbm5lciIsImRhdGEiLCJxdW90ZSIsImJvZHkiLCJwcmltYXJ5IiwiY29uc29sZSIsImxvZyIsIlJpY2hUZXh0IiwiYXNUZXh0IiwidGl0bGUiLCJ0ZXh0IiwiYnV0dG9uX2xhYmVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxPQUFhO0FBQUEsTUFBVkMsR0FBVSxRQUFWQSxHQUFVO0FBQ3pCLE1BQU1DLE1BQU0sR0FBR0QsR0FBRyxDQUFDRSxJQUFuQjtBQUNBLE1BQU1DLEtBQUssR0FBR0gsR0FBRyxDQUFDRSxJQUFKLENBQVNFLElBQVQsQ0FBYyxDQUFkLEVBQWlCQyxPQUEvQjtBQUNBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWU4sTUFBWjtBQUNBSyxTQUFPLENBQUNDLEdBQVIsQ0FBWUosS0FBWjtBQUNBLHNCQUNFLHFFQUFDLHlEQUFEO0FBQVcsYUFBUyxFQUFDLGdCQUFyQjtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQUEsNkJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFLSSxxRUFBQywrQ0FBRDtBQUFRLFlBQU0sRUFBRUgsR0FBRyxDQUFDRTtBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEosZUFNSSxxRUFBQyxtREFBRDtBQUFBLGlCQUNDTSx3REFBUSxDQUFDQyxNQUFULENBQWdCUixNQUFNLENBQUNTLEtBQXZCLENBREQsZUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkEsRUFHQ0Ysd0RBQVEsQ0FBQ0MsTUFBVCxDQUFnQlIsTUFBTSxDQUFDVSxJQUF2QixDQUhELGVBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpBLEVBS0NILHdEQUFRLENBQUNDLE1BQVQsQ0FBZ0JSLE1BQU0sQ0FBQ1csWUFBdkIsQ0FMRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFOSixlQWFFLHFFQUFDLDZEQUFEO0FBQVcsWUFBTSxFQUFFWixHQUFHLENBQUNFLElBQUosQ0FBU0U7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBaUJELENBdEJEOztLQUFNTCxLOztBQW9DU0Esb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkZXIgZnJvbSBcIi4vSGVhZGVyXCI7XG5pbXBvcnQgU2xpY2Vab25lIGZyb20gXCIuL2NvbXBvbmVudHMvU2xpY2Vab25lXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyBDbGllbnQgfSBmcm9tIFwiLi4vcHJpc21pYy1jb25maWd1cmF0aW9uXCI7XG5pbXBvcnQgeyBSaWNoVGV4dCB9IGZyb20gXCJwcmlzbWljLXJlYWN0anNcIjtcbmltcG9ydCB7IENvbnRhaW5lciwgUm93IH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xuXG5jb25zdCBJbmRleCA9ICh7IGRvYyB9KSA9PiB7XG4gIGNvbnN0IGJhbm5lciA9IGRvYy5kYXRhO1xuICBjb25zdCBxdW90ZSA9IGRvYy5kYXRhLmJvZHlbMF0ucHJpbWFyeTtcbiAgY29uc29sZS5sb2coYmFubmVyKTtcbiAgY29uc29sZS5sb2cocXVvdGUpO1xuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgY2xhc3NOYW1lPVwicGFnZS1jb250YWluZXJcIj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+TkdPIEV4YW1wbGU8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgXG4gICAgICAgIDxIZWFkZXIgaGVhZGVyPXtkb2MuZGF0YX0gLz5cbiAgICAgICAgPFJvdz5cbiAgICAgICAge1JpY2hUZXh0LmFzVGV4dChiYW5uZXIudGl0bGUpfVxuICAgICAgICA8YnIgLz5cbiAgICAgICAge1JpY2hUZXh0LmFzVGV4dChiYW5uZXIudGV4dCl9XG4gICAgICAgIDxiciAvPlxuICAgICAgICB7UmljaFRleHQuYXNUZXh0KGJhbm5lci5idXR0b25fbGFiZWwpfVxuICAgICAgPC9Sb3c+XG4gICAgICA8U2xpY2Vab25lIHNsaWNlcz17ZG9jLmRhdGEuYm9keX0gLz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgY29uc29sZS5sb2coXCJoZWxsb1wiKTtcbiAgY29uc3QgY2xpZW50ID0gQ2xpZW50KCk7XG4gIGNvbnN0IGRvYyA9IGF3YWl0IGNsaWVudC5nZXRTaW5nbGUoXCJob21lXCIpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGRvYyxcbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})