webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ \"./pages/Header.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prismic-reactjs */ \"./node_modules/prismic-reactjs/dist/prismic-reactjs.js\");\n/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\nvar _jsxFileName = \"/Users/Brad/ngo-next-prismic/pages/index.js\",\n    _this = undefined;\n\n\n\n\n\nvar Index = function Index(_ref) {\n  var doc = _ref.doc;\n  var banner = doc.data;\n  var quote = doc.data.quote;\n  console.log(banner);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"NGO Example\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 13\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 9\n    }, _this), prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__[\"RichText\"].asText(banner.title), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 40\n    }, _this), prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__[\"RichText\"].asText(banner.text), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 39\n    }, _this), prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__[\"RichText\"].asText(banner.button_label), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      header: doc.data\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 9\n    }, _this)]\n  }, void 0, true);\n};\n\n_c = Index;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJJbmRleCIsImRvYyIsImJhbm5lciIsImRhdGEiLCJxdW90ZSIsImNvbnNvbGUiLCJsb2ciLCJSaWNoVGV4dCIsImFzVGV4dCIsInRpdGxlIiwidGV4dCIsImJ1dHRvbl9sYWJlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BQVc7QUFBQSxNQUFUQyxHQUFTLFFBQVRBLEdBQVM7QUFDckIsTUFBTUMsTUFBTSxHQUFHRCxHQUFHLENBQUNFLElBQW5CO0FBQ0EsTUFBTUMsS0FBSyxHQUFHSCxHQUFHLENBQUNFLElBQUosQ0FBU0MsS0FBdkI7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENBQVlKLE1BQVo7QUFDQSxzQkFDQTtBQUFBLDRCQUNJLHFFQUFDLGdEQUFEO0FBQUEsNkJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosRUFJS0ssd0RBQVEsQ0FBQ0MsTUFBVCxDQUFnQk4sTUFBTSxDQUFDTyxLQUF2QixDQUpMLGVBSW1DO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKbkMsRUFLS0Ysd0RBQVEsQ0FBQ0MsTUFBVCxDQUFnQk4sTUFBTSxDQUFDUSxJQUF2QixDQUxMLGVBS2tDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMbEMsRUFNS0gsd0RBQVEsQ0FBQ0MsTUFBVCxDQUFnQk4sTUFBTSxDQUFDUyxZQUF2QixDQU5MLGVBT0kscUVBQUMsK0NBQUQ7QUFBUSxZQUFNLEVBQUlWLEdBQUcsQ0FBQ0U7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVBKO0FBQUEsa0JBREE7QUFXSCxDQWZEOztLQUFNSCxLOztBQTZCU0Esb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgeyBDbGllbnQgfSBmcm9tICcuLi9wcmlzbWljLWNvbmZpZ3VyYXRpb24nXG5pbXBvcnQgeyBSaWNoVGV4dCB9IGZyb20gJ3ByaXNtaWMtcmVhY3RqcydcblxuY29uc3QgSW5kZXggPSAoe2RvY30pID0+IHtcbiAgICBjb25zdCBiYW5uZXIgPSBkb2MuZGF0YVxuICAgIGNvbnN0IHF1b3RlID0gZG9jLmRhdGEucXVvdGVcbiAgICBjb25zb2xlLmxvZyhiYW5uZXIpXG4gICAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgIDx0aXRsZT5OR08gRXhhbXBsZTwvdGl0bGU+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAge1JpY2hUZXh0LmFzVGV4dChiYW5uZXIudGl0bGUpfTxici8+XG4gICAgICAgIHtSaWNoVGV4dC5hc1RleHQoYmFubmVyLnRleHQpfTxici8+XG4gICAgICAgIHtSaWNoVGV4dC5hc1RleHQoYmFubmVyLmJ1dHRvbl9sYWJlbCl9XG4gICAgICAgIDxIZWFkZXIgaGVhZGVyID0ge2RvYy5kYXRhfS8+XG4gICAgPC8+XG4gICAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gICAgY29uc29sZS5sb2coJ2hlbGxvJylcbiAgICBjb25zdCBjbGllbnQgPSBDbGllbnQoKTtcbiAgICBjb25zdCBkb2MgPSAoYXdhaXQgY2xpZW50LmdldFNpbmdsZShcImhvbWVcIikpXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgZG9jXG4gICAgICAgIH0sXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})