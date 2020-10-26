webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/Header.js":
/*!*************************!*\
  !*** ./pages/Header.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prismic-reactjs */ \"./node_modules/prismic-reactjs/dist/prismic-reactjs.js\");\n/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prismic_reactjs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n\n\nvar _jsxFileName = \"/Users/Brad/ngo-next-prismic/pages/Header.js\",\n    _this = undefined;\n\n\n\n\n\nvar Header = function Header(_ref) {\n  var header = _ref.header;\n  console.log(header);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Navbar\"], {\n    bg: \"dark\",\n    variant: \"dark\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Navbar\"].Brand, {\n      href: \"#\",\n      children: prismic_reactjs__WEBPACK_IMPORTED_MODULE_2__[\"RichText\"]\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(NavLinks, {\n      navList: header.nav_item\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = Header;\n\nvar NavLinks = function NavLinks(_ref2) {\n  var navList = _ref2.navList;\n  console.log(\"navlinks data check\");\n  console.log(navList);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Nav\"], {\n    className: \"mr-auto\",\n    children: navList.map(function (navItem, index) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Nav\"].Link, {\n        href: \"#\",\n        children: prismic_reactjs__WEBPACK_IMPORTED_MODULE_2__[\"RichText\"].asText(navItem.label)\n      }, index, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 9\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 20,\n    columnNumber: 5\n  }, _this);\n};\n\n_c2 = NavLinks;\n\nvar NavLink = function NavLink(_ref3) {\n  var header = _ref3.header;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 30,\n    columnNumber: 10\n  }, _this);\n};\n\n_c3 = NavLink;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Header\");\n$RefreshReg$(_c2, \"NavLinks\");\n$RefreshReg$(_c3, \"NavLink\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvSGVhZGVyLmpzPzY1YTEiXSwibmFtZXMiOlsiSGVhZGVyIiwiaGVhZGVyIiwiY29uc29sZSIsImxvZyIsIlJpY2hUZXh0IiwibmF2X2l0ZW0iLCJOYXZMaW5rcyIsIm5hdkxpc3QiLCJtYXAiLCJuYXZJdGVtIiwiaW5kZXgiLCJhc1RleHQiLCJsYWJlbCIsIk5hdkxpbmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsT0FBZ0I7QUFBQSxNQUFiQyxNQUFhLFFBQWJBLE1BQWE7QUFDN0JDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixNQUFaO0FBQ0Esc0JBQ0UscUVBQUMsc0RBQUQ7QUFBUSxNQUFFLEVBQUMsTUFBWDtBQUFrQixXQUFPLEVBQUMsTUFBMUI7QUFBQSw0QkFDRSxxRUFBQyxzREFBRCxDQUFRLEtBQVI7QUFBYyxVQUFJLEVBQUMsR0FBbkI7QUFBQSxnQkFBd0JHLHdEQUFRQTtBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRSxxRUFBQyxRQUFEO0FBQVUsYUFBTyxFQUFFSCxNQUFNLENBQUNJO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQU1ELENBUkQ7O0tBQU1MLE07O0FBVU4sSUFBTU0sUUFBUSxHQUFHLFNBQVhBLFFBQVcsUUFBZTtBQUFBLE1BQWJDLE9BQWEsU0FBYkEsT0FBYTtBQUM5QkwsU0FBTyxDQUFDQyxHQUFSLENBQVkscUJBQVo7QUFDQUQsU0FBTyxDQUFDQyxHQUFSLENBQVlJLE9BQVo7QUFFQSxzQkFDRSxxRUFBQyxtREFBRDtBQUFLLGFBQVMsRUFBQyxTQUFmO0FBQUEsY0FDR0EsT0FBTyxDQUFDQyxHQUFSLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxLQUFWO0FBQUEsMEJBQ1gscUVBQUMsbURBQUQsQ0FBSyxJQUFMO0FBQVUsWUFBSSxFQUFDLEdBQWY7QUFBQSxrQkFBZ0NOLHdEQUFRLENBQUNPLE1BQVQsQ0FBZ0JGLE9BQU8sQ0FBQ0csS0FBeEI7QUFBaEMsU0FBd0JGLEtBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEVztBQUFBLEtBQVo7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFRRCxDQVpEOztNQUFNSixROztBQWNOLElBQU1PLE9BQU8sR0FBRyxTQUFWQSxPQUFVLFFBQWdCO0FBQUEsTUFBYlosTUFBYSxTQUFiQSxNQUFhO0FBQzlCLHNCQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQUNELENBRkQ7O01BQU1ZLE87QUFJU2IscUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9IZWFkZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIZWFkIH0gZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgUmljaFRleHQgfSBmcm9tIFwicHJpc21pYy1yZWFjdGpzXCI7XG5pbXBvcnQgeyBOYXZiYXIsIE5hdiB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcblxuY29uc3QgSGVhZGVyID0gKHsgaGVhZGVyIH0pID0+IHtcbiAgY29uc29sZS5sb2coaGVhZGVyKTtcbiAgcmV0dXJuIChcbiAgICA8TmF2YmFyIGJnPVwiZGFya1wiIHZhcmlhbnQ9XCJkYXJrXCI+XG4gICAgICA8TmF2YmFyLkJyYW5kIGhyZWY9XCIjXCI+e1JpY2hUZXh0fTwvTmF2YmFyLkJyYW5kPlxuICAgICAgPE5hdkxpbmtzIG5hdkxpc3Q9e2hlYWRlci5uYXZfaXRlbX0gLz5cbiAgICA8L05hdmJhcj5cbiAgKTtcbn07XG5cbmNvbnN0IE5hdkxpbmtzID0gKHtuYXZMaXN0fSkgPT4ge1xuICBjb25zb2xlLmxvZyhcIm5hdmxpbmtzIGRhdGEgY2hlY2tcIik7XG4gIGNvbnNvbGUubG9nKG5hdkxpc3QpO1xuXG4gIHJldHVybiAoXG4gICAgPE5hdiBjbGFzc05hbWU9XCJtci1hdXRvXCI+XG4gICAgICB7bmF2TGlzdC5tYXAoKG5hdkl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgIDxOYXYuTGluayBocmVmPVwiI1wiIGtleT17aW5kZXh9PntSaWNoVGV4dC5hc1RleHQobmF2SXRlbS5sYWJlbCl9PC9OYXYuTGluaz5cbiAgICAgICkpfVxuICAgIDwvTmF2PlxuXG4gICk7XG59O1xuXG5jb25zdCBOYXZMaW5rID0gKHsgaGVhZGVyIH0pID0+IHtcbiAgcmV0dXJuIDxkaXY+PC9kaXY+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/Header.js\n");

/***/ })

})