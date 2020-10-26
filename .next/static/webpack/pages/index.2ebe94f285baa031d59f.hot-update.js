webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/Header.js":
/*!*************************!*\
  !*** ./pages/Header.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prismic-reactjs */ \"./node_modules/prismic-reactjs/dist/prismic-reactjs.js\");\n/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prismic_reactjs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n\n\nvar _jsxFileName = \"/Users/Brad/ngo-next-prismic/pages/Header.js\",\n    _this = undefined;\n\n\n\n\n\nvar Header = function Header(_ref) {\n  var header = _ref.header;\n  console.log(header);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Navbar\"], {\n    bg: \"dark\",\n    variant: \"dark\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Navbar\"].Brand, {\n      href: \"#\",\n      children: \"Navbar\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(NavLinks, {\n      navList: header.nav_item\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = Header;\n\nvar NavLinks = function NavLinks(navList) {\n  console.log(\"navlinks data check\");\n  console.log(navList);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Nav\"], {\n    className: \"mr-auto\",\n    children: navList.map(function (navItem, index) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Nav\"].Link, {\n        href: \"#\",\n        children: prismic_reactjs__WEBPACK_IMPORTED_MODULE_2__[\"RichText\"].asText(navItem.label)\n      }, index, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 9\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 20,\n    columnNumber: 5\n  }, _this);\n};\n\n_c2 = NavLinks;\n\nvar NavLink = function NavLink(_ref2) {\n  var header = _ref2.header;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 30,\n    columnNumber: 10\n  }, _this);\n};\n\n_c3 = NavLink;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Header\");\n$RefreshReg$(_c2, \"NavLinks\");\n$RefreshReg$(_c3, \"NavLink\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvSGVhZGVyLmpzPzY1YTEiXSwibmFtZXMiOlsiSGVhZGVyIiwiaGVhZGVyIiwiY29uc29sZSIsImxvZyIsIm5hdl9pdGVtIiwiTmF2TGlua3MiLCJuYXZMaXN0IiwibWFwIiwibmF2SXRlbSIsImluZGV4IiwiUmljaFRleHQiLCJhc1RleHQiLCJsYWJlbCIsIk5hdkxpbmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsT0FBZ0I7QUFBQSxNQUFiQyxNQUFhLFFBQWJBLE1BQWE7QUFDN0JDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixNQUFaO0FBQ0Esc0JBQ0UscUVBQUMsc0RBQUQ7QUFBUSxNQUFFLEVBQUMsTUFBWDtBQUFrQixXQUFPLEVBQUMsTUFBMUI7QUFBQSw0QkFDRSxxRUFBQyxzREFBRCxDQUFRLEtBQVI7QUFBYyxVQUFJLEVBQUMsR0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFLHFFQUFDLFFBQUQ7QUFBVSxhQUFPLEVBQUVBLE1BQU0sQ0FBQ0c7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBTUQsQ0FSRDs7S0FBTUosTTs7QUFVTixJQUFNSyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxPQUFELEVBQWE7QUFDNUJKLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLHFCQUFaO0FBQ0FELFNBQU8sQ0FBQ0MsR0FBUixDQUFZRyxPQUFaO0FBRUEsc0JBQ0UscUVBQUMsbURBQUQ7QUFBSyxhQUFTLEVBQUMsU0FBZjtBQUFBLGNBQ0dBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsS0FBVjtBQUFBLDBCQUNYLHFFQUFDLG1EQUFELENBQUssSUFBTDtBQUFVLFlBQUksRUFBQyxHQUFmO0FBQUEsa0JBQWdDQyx3REFBUSxDQUFDQyxNQUFULENBQWdCSCxPQUFPLENBQUNJLEtBQXhCO0FBQWhDLFNBQXdCSCxLQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRFc7QUFBQSxLQUFaO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBUUQsQ0FaRDs7TUFBTUosUTs7QUFjTixJQUFNUSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxRQUFnQjtBQUFBLE1BQWJaLE1BQWEsU0FBYkEsTUFBYTtBQUM5QixzQkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFDRCxDQUZEOztNQUFNWSxPO0FBSVNiLHFFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvSGVhZGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSGVhZCB9IGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IFJpY2hUZXh0IH0gZnJvbSBcInByaXNtaWMtcmVhY3Rqc1wiO1xuaW1wb3J0IHsgTmF2YmFyLCBOYXYgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XG5cbmNvbnN0IEhlYWRlciA9ICh7IGhlYWRlciB9KSA9PiB7XG4gIGNvbnNvbGUubG9nKGhlYWRlcik7XG4gIHJldHVybiAoXG4gICAgPE5hdmJhciBiZz1cImRhcmtcIiB2YXJpYW50PVwiZGFya1wiPlxuICAgICAgPE5hdmJhci5CcmFuZCBocmVmPVwiI1wiPk5hdmJhcjwvTmF2YmFyLkJyYW5kPlxuICAgICAgPE5hdkxpbmtzIG5hdkxpc3Q9e2hlYWRlci5uYXZfaXRlbX0gLz5cbiAgICA8L05hdmJhcj5cbiAgKTtcbn07XG5cbmNvbnN0IE5hdkxpbmtzID0gKG5hdkxpc3QpID0+IHtcbiAgY29uc29sZS5sb2coXCJuYXZsaW5rcyBkYXRhIGNoZWNrXCIpO1xuICBjb25zb2xlLmxvZyhuYXZMaXN0KTtcblxuICByZXR1cm4gKFxuICAgIDxOYXYgY2xhc3NOYW1lPVwibXItYXV0b1wiPlxuICAgICAge25hdkxpc3QubWFwKChuYXZJdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIiNcIiBrZXk9e2luZGV4fT57UmljaFRleHQuYXNUZXh0KG5hdkl0ZW0ubGFiZWwpfTwvTmF2Lkxpbms+XG4gICAgICApKX1cbiAgICA8L05hdj5cblxuICApO1xufTtcblxuY29uc3QgTmF2TGluayA9ICh7IGhlYWRlciB9KSA9PiB7XG4gIHJldHVybiA8ZGl2PjwvZGl2Pjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/Header.js\n");

/***/ })

})