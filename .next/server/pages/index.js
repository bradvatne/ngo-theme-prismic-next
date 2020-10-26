module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/Footer.js":
/*!*************************!*\
  !*** ./pages/Footer.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\nconst Footer = () => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {}, void 0, false);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Footer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9Gb290ZXIuanM/MGJlZSJdLCJuYW1lcyI6WyJGb290ZXIiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE1BQU1BLE1BQU0sR0FBRyxNQUFNO0FBQ2pCLHNCQUFRLHVKQUFSO0FBQ0gsQ0FGRDs7QUFJZUEscUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9Gb290ZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBGb290ZXIgPSAoKSA9PiB7XG4gICAgcmV0dXJuICg8PjwvPilcbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/Footer.js\n");

/***/ }),

/***/ "./pages/Header.js":
/*!*************************!*\
  !*** ./pages/Header.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prismic-reactjs */ \"prismic-reactjs\");\n/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prismic_reactjs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ \"react-bootstrap\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/Brad/ngo-next-prismic/pages/Header.js\";\n\n\n\nconst Header = ({\n  header\n}) => {\n  console.log(header);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Navbar\"], {\n    bg: \"dark\",\n    variant: \"dark\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Navbar\"].Brand, {\n      href: \"#\",\n      children: prismic_reactjs__WEBPACK_IMPORTED_MODULE_1__[\"RichText\"].asText(header.brand_text)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(NavLinks, {\n      navList: header.nav_item\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 5\n  }, undefined);\n};\n\nconst NavLinks = ({\n  navList\n}) => {\n  console.log(\"navlinks data check\");\n  console.log(navList);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Nav\"], {\n    className: \"mr-auto\",\n    children: navList.map((navItem, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Nav\"].Link, {\n      href: \"#\",\n      children: prismic_reactjs__WEBPACK_IMPORTED_MODULE_1__[\"RichText\"].asText(navItem.label)\n    }, index, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 9\n    }, undefined))\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9IZWFkZXIuanM/NjVhMSJdLCJuYW1lcyI6WyJIZWFkZXIiLCJoZWFkZXIiLCJjb25zb2xlIiwibG9nIiwiUmljaFRleHQiLCJhc1RleHQiLCJicmFuZF90ZXh0IiwibmF2X2l0ZW0iLCJOYXZMaW5rcyIsIm5hdkxpc3QiLCJtYXAiLCJuYXZJdGVtIiwiaW5kZXgiLCJsYWJlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxNQUFNQSxNQUFNLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBZ0I7QUFDN0JDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixNQUFaO0FBQ0Esc0JBQ0UscUVBQUMsc0RBQUQ7QUFBUSxNQUFFLEVBQUMsTUFBWDtBQUFrQixXQUFPLEVBQUMsTUFBMUI7QUFBQSw0QkFDRSxxRUFBQyxzREFBRCxDQUFRLEtBQVI7QUFBYyxVQUFJLEVBQUMsR0FBbkI7QUFBQSxnQkFBd0JHLHdEQUFRLENBQUNDLE1BQVQsQ0FBZ0JKLE1BQU0sQ0FBQ0ssVUFBdkI7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFLHFFQUFDLFFBQUQ7QUFBVSxhQUFPLEVBQUVMLE1BQU0sQ0FBQ007QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQU1ELENBUkQ7O0FBVUEsTUFBTUMsUUFBUSxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWlCO0FBQ2hDUCxTQUFPLENBQUNDLEdBQVIsQ0FBWSxxQkFBWjtBQUNBRCxTQUFPLENBQUNDLEdBQVIsQ0FBWU0sT0FBWjtBQUNBLHNCQUNFLHFFQUFDLG1EQUFEO0FBQUssYUFBUyxFQUFDLFNBQWY7QUFBQSxjQUNHQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxDQUFDQyxPQUFELEVBQVVDLEtBQVYsa0JBQ1gscUVBQUMsbURBQUQsQ0FBSyxJQUFMO0FBQVUsVUFBSSxFQUFDLEdBQWY7QUFBQSxnQkFDR1Isd0RBQVEsQ0FBQ0MsTUFBVCxDQUFnQk0sT0FBTyxDQUFDRSxLQUF4QjtBQURILE9BQXdCRCxLQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUREO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBU0QsQ0FaRDs7QUFjZVoscUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9IZWFkZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSaWNoVGV4dCB9IGZyb20gXCJwcmlzbWljLXJlYWN0anNcIjtcbmltcG9ydCB7IE5hdmJhciwgTmF2IH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xuXG5jb25zdCBIZWFkZXIgPSAoeyBoZWFkZXIgfSkgPT4ge1xuICBjb25zb2xlLmxvZyhoZWFkZXIpO1xuICByZXR1cm4gKFxuICAgIDxOYXZiYXIgYmc9XCJkYXJrXCIgdmFyaWFudD1cImRhcmtcIj5cbiAgICAgIDxOYXZiYXIuQnJhbmQgaHJlZj1cIiNcIj57UmljaFRleHQuYXNUZXh0KGhlYWRlci5icmFuZF90ZXh0KX08L05hdmJhci5CcmFuZD5cbiAgICAgIDxOYXZMaW5rcyBuYXZMaXN0PXtoZWFkZXIubmF2X2l0ZW19IC8+XG4gICAgPC9OYXZiYXI+XG4gICk7XG59O1xuXG5jb25zdCBOYXZMaW5rcyA9ICh7IG5hdkxpc3QgfSkgPT4ge1xuICBjb25zb2xlLmxvZyhcIm5hdmxpbmtzIGRhdGEgY2hlY2tcIik7XG4gIGNvbnNvbGUubG9nKG5hdkxpc3QpO1xuICByZXR1cm4gKFxuICAgIDxOYXYgY2xhc3NOYW1lPVwibXItYXV0b1wiPlxuICAgICAge25hdkxpc3QubWFwKChuYXZJdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIiNcIiBrZXk9e2luZGV4fT5cbiAgICAgICAgICB7UmljaFRleHQuYXNUZXh0KG5hdkl0ZW0ubGFiZWwpfVxuICAgICAgICA8L05hdi5MaW5rPlxuICAgICAgKSl9XG4gICAgPC9OYXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Header.js\n");

/***/ }),

/***/ "./pages/components/Banner.js":
/*!************************************!*\
  !*** ./pages/components/Banner.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prismic-reactjs */ \"prismic-reactjs\");\n/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prismic_reactjs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ \"react-bootstrap\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/Brad/ngo-next-prismic/pages/components/Banner.js\";\n\n\n\nconst Banner = ({\n  banner\n}) => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n    className: \"section-banner\",\n    style: {\n      backgroundImage: \"url(\" + banner.image.url + \")\",\n      height: \"100vh\",\n      backgroundSize: \"cover\"\n    },\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Container\"], {\n      children: [prismic_reactjs__WEBPACK_IMPORTED_MODULE_1__[\"RichText\"].asText(banner.title), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 9\n      }, undefined), prismic_reactjs__WEBPACK_IMPORTED_MODULE_1__[\"RichText\"].asText(banner.text), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 9\n      }, undefined), prismic_reactjs__WEBPACK_IMPORTED_MODULE_1__[\"RichText\"].asText(banner.button_label)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Banner);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb21wb25lbnRzL0Jhbm5lci5qcz9jMjQyIl0sIm5hbWVzIjpbIkJhbm5lciIsImJhbm5lciIsImJhY2tncm91bmRJbWFnZSIsImltYWdlIiwidXJsIiwiaGVpZ2h0IiwiYmFja2dyb3VuZFNpemUiLCJSaWNoVGV4dCIsImFzVGV4dCIsInRpdGxlIiwidGV4dCIsImJ1dHRvbl9sYWJlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxNQUFNQSxNQUFNLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBZ0I7QUFDN0Isc0JBQ0U7QUFDRSxhQUFTLEVBQUMsZ0JBRFo7QUFFRSxTQUFLLEVBQUU7QUFDTEMscUJBQWUsRUFBRSxTQUFTRCxNQUFNLENBQUNFLEtBQVAsQ0FBYUMsR0FBdEIsR0FBNEIsR0FEeEM7QUFFTEMsWUFBTSxFQUFFLE9BRkg7QUFHTEMsb0JBQWMsRUFBRTtBQUhYLEtBRlQ7QUFBQSwyQkFRRSxxRUFBQyx5REFBRDtBQUFBLGlCQUNHQyx3REFBUSxDQUFDQyxNQUFULENBQWdCUCxNQUFNLENBQUNRLEtBQXZCLENBREgsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGLEVBR0dGLHdEQUFRLENBQUNDLE1BQVQsQ0FBZ0JQLE1BQU0sQ0FBQ1MsSUFBdkIsQ0FISCxlQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkYsRUFLR0gsd0RBQVEsQ0FBQ0MsTUFBVCxDQUFnQlAsTUFBTSxDQUFDVSxZQUF2QixDQUxIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQWtCRCxDQW5CRDs7QUFxQmVYLHFFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvY29tcG9uZW50cy9CYW5uZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSaWNoVGV4dCB9IGZyb20gXCJwcmlzbWljLXJlYWN0anNcIjtcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcblxuY29uc3QgQmFubmVyID0gKHsgYmFubmVyIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvblxuICAgICAgY2xhc3NOYW1lPVwic2VjdGlvbi1iYW5uZXJcIlxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIGJhbm5lci5pbWFnZS51cmwgKyBcIilcIixcbiAgICAgICAgaGVpZ2h0OiBcIjEwMHZoXCIsXG4gICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIHtSaWNoVGV4dC5hc1RleHQoYmFubmVyLnRpdGxlKX1cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIHtSaWNoVGV4dC5hc1RleHQoYmFubmVyLnRleHQpfVxuICAgICAgICA8YnIgLz5cbiAgICAgICAge1JpY2hUZXh0LmFzVGV4dChiYW5uZXIuYnV0dG9uX2xhYmVsKX1cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJhbm5lcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/Banner.js\n");

/***/ }),

/***/ "./pages/components/Quote.js":
/*!***********************************!*\
  !*** ./pages/components/Quote.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prismic-reactjs */ \"prismic-reactjs\");\n/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prismic_reactjs__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/Brad/ngo-next-prismic/pages/components/Quote.js\";\n\n\nconst Quote = ({\n  quote\n}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n  className: \"section-quote\",\n  children: [prismic_reactjs__WEBPACK_IMPORTED_MODULE_1__[\"RichText\"].asText(quote.quote), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }, undefined), prismic_reactjs__WEBPACK_IMPORTED_MODULE_1__[\"RichText\"].asText(quote.author)]\n}, void 0, true, {\n  fileName: _jsxFileName,\n  lineNumber: 4,\n  columnNumber: 3\n}, undefined);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Quote);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb21wb25lbnRzL1F1b3RlLmpzPzE5MWIiXSwibmFtZXMiOlsiUXVvdGUiLCJxdW90ZSIsIlJpY2hUZXh0IiwiYXNUZXh0IiwiYXV0aG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsS0FBSyxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELGtCQUNaO0FBQVMsV0FBUyxFQUFHLGVBQXJCO0FBQUEsYUFDR0Msd0RBQVEsQ0FBQ0MsTUFBVCxDQUFnQkYsS0FBSyxDQUFDQSxLQUF0QixDQURILGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGLEVBR0dDLHdEQUFRLENBQUNDLE1BQVQsQ0FBZ0JGLEtBQUssQ0FBQ0csTUFBdEIsQ0FISDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjs7QUFRZUosb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL1F1b3RlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmljaFRleHQgfSBmcm9tIFwicHJpc21pYy1yZWFjdGpzXCI7XG5cbmNvbnN0IFF1b3RlID0gKHsgcXVvdGUgfSkgPT4gKFxuICA8c2VjdGlvbiBjbGFzc05hbWUgPSBcInNlY3Rpb24tcXVvdGVcIj5cbiAgICB7UmljaFRleHQuYXNUZXh0KHF1b3RlLnF1b3RlKX1cbiAgICA8YnIgLz5cbiAgICB7UmljaFRleHQuYXNUZXh0KHF1b3RlLmF1dGhvcil9XG4gIDwvc2VjdGlvbj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFF1b3RlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/Quote.js\n");

/***/ }),

/***/ "./pages/components/SliceZone.js":
/*!***************************************!*\
  !*** ./pages/components/SliceZone.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Quote__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Quote */ \"./pages/components/Quote.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ \"react-bootstrap\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/Brad/ngo-next-prismic/pages/components/SliceZone.js\";\n\n\n\nconst SliceZone = ({\n  slices\n}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Container\"], {\n  className: \"slice-zone\",\n  children: slices.map((slice, index) => {\n    switch (slice.slice_type) {\n      case \"quote\":\n        console.log(\"slice zone: \");\n        console.log(slice.primary);\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Quote__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n          quote: slice.primary\n        }, `slice-${index}`, false, {\n          fileName: _jsxFileName,\n          lineNumber: 11,\n          columnNumber: 18\n        }, undefined);\n    }\n  })\n}, void 0, false, {\n  fileName: _jsxFileName,\n  lineNumber: 5,\n  columnNumber: 3\n}, undefined);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SliceZone);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb21wb25lbnRzL1NsaWNlWm9uZS5qcz9lMzlmIl0sIm5hbWVzIjpbIlNsaWNlWm9uZSIsInNsaWNlcyIsIm1hcCIsInNsaWNlIiwiaW5kZXgiLCJzbGljZV90eXBlIiwiY29uc29sZSIsImxvZyIsInByaW1hcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxNQUFNQSxTQUFTLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsa0JBQ2hCLHFFQUFDLHlEQUFEO0FBQVcsV0FBUyxFQUFDLFlBQXJCO0FBQUEsWUFDR0EsTUFBTSxDQUFDQyxHQUFQLENBQVcsQ0FBQ0MsS0FBRCxFQUFRQyxLQUFSLEtBQWtCO0FBQzVCLFlBQVFELEtBQUssQ0FBQ0UsVUFBZDtBQUNFLFdBQUssT0FBTDtBQUNFQyxlQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFaO0FBQ0FELGVBQU8sQ0FBQ0MsR0FBUixDQUFZSixLQUFLLENBQUNLLE9BQWxCO0FBQ0EsNEJBQU8scUVBQUMsOENBQUQ7QUFBTyxlQUFLLEVBQUVMLEtBQUssQ0FBQ0s7QUFBcEIsV0FBbUMsU0FBUUosS0FBTSxFQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFQO0FBSko7QUFNRCxHQVBBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGOztBQWFlSix3RUFBZiIsImZpbGUiOiIuL3BhZ2VzL2NvbXBvbmVudHMvU2xpY2Vab25lLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFF1b3RlIGZyb20gXCIuL1F1b3RlXCI7XG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XG5cbmNvbnN0IFNsaWNlWm9uZSA9ICh7IHNsaWNlcyB9KSA9PiAoXG4gIDxDb250YWluZXIgY2xhc3NOYW1lPVwic2xpY2Utem9uZVwiPlxuICAgIHtzbGljZXMubWFwKChzbGljZSwgaW5kZXgpID0+IHtcbiAgICAgIHN3aXRjaCAoc2xpY2Uuc2xpY2VfdHlwZSkge1xuICAgICAgICBjYXNlIFwicXVvdGVcIjpcbiAgICAgICAgICBjb25zb2xlLmxvZyhcInNsaWNlIHpvbmU6IFwiKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhzbGljZS5wcmltYXJ5KTtcbiAgICAgICAgICByZXR1cm4gPFF1b3RlIHF1b3RlPXtzbGljZS5wcmltYXJ5fSBrZXk9e2BzbGljZS0ke2luZGV4fWB9IC8+O1xuICAgICAgfVxuICAgIH0pfVxuICA8L0NvbnRhaW5lcj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFNsaWNlWm9uZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/SliceZone.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _prismic_configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../prismic-configuration */ \"./prismic-configuration.js\");\n/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prismic-reactjs */ \"prismic-reactjs\");\n/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ \"react-bootstrap\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Header */ \"./pages/Header.js\");\n/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Footer */ \"./pages/Footer.js\");\n/* harmony import */ var _components_Banner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Banner */ \"./pages/components/Banner.js\");\n/* harmony import */ var _components_SliceZone__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/SliceZone */ \"./pages/components/SliceZone.js\");\n\n\nvar _jsxFileName = \"/Users/Brad/ngo-next-prismic/pages/index.js\";\n\n\n\n\n\n\n\n\n\nconst Index = ({\n  home,\n  header\n}) => {\n  //Tests\n  const banner = home.data;\n  const quote = home.data.body[0].primary;\n  const nav = header.data;\n  console.log(home);\n  console.log(header);\n  console.log(banner);\n  console.log(quote);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Header__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      header: nav\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"home-container\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n          children: prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__[\"RichText\"].asText(banner.page_title)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 11\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Banner__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        banner: banner\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_SliceZone__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        slices: home.data.body\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Footer__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true);\n};\n\nasync function getStaticProps() {\n  const client = Object(_prismic_configuration__WEBPACK_IMPORTED_MODULE_2__[\"Client\"])();\n  const home = await client.getSingle(\"home\");\n  const header = await client.getSingle(\"header\");\n  return {\n    props: {\n      home: home,\n      header\n    }\n  };\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkluZGV4IiwiaG9tZSIsImhlYWRlciIsImJhbm5lciIsImRhdGEiLCJxdW90ZSIsImJvZHkiLCJwcmltYXJ5IiwibmF2IiwiY29uc29sZSIsImxvZyIsIlJpY2hUZXh0IiwiYXNUZXh0IiwicGFnZV90aXRsZSIsImdldFN0YXRpY1Byb3BzIiwiY2xpZW50IiwiQ2xpZW50IiwiZ2V0U2luZ2xlIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsS0FBSyxHQUFHLENBQUM7QUFBRUMsTUFBRjtBQUFRQztBQUFSLENBQUQsS0FBc0I7QUFDbEM7QUFDQSxRQUFNQyxNQUFNLEdBQUdGLElBQUksQ0FBQ0csSUFBcEI7QUFDQSxRQUFNQyxLQUFLLEdBQUdKLElBQUksQ0FBQ0csSUFBTCxDQUFVRSxJQUFWLENBQWUsQ0FBZixFQUFrQkMsT0FBaEM7QUFDQSxRQUFNQyxHQUFHLEdBQUdOLE1BQU0sQ0FBQ0UsSUFBbkI7QUFDQUssU0FBTyxDQUFDQyxHQUFSLENBQVlULElBQVo7QUFDQVEsU0FBTyxDQUFDQyxHQUFSLENBQVlSLE1BQVo7QUFDQU8sU0FBTyxDQUFDQyxHQUFSLENBQVlQLE1BQVo7QUFDQU0sU0FBTyxDQUFDQyxHQUFSLENBQVlMLEtBQVo7QUFFQSxzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLCtDQUFEO0FBQVEsWUFBTSxFQUFFRztBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBSyxlQUFTLEVBQUMsZ0JBQWY7QUFBQSw4QkFDRSxxRUFBQyxnREFBRDtBQUFBLCtCQUNFO0FBQUEsb0JBQVFHLHdEQUFRLENBQUNDLE1BQVQsQ0FBZ0JULE1BQU0sQ0FBQ1UsVUFBdkI7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUtFLHFFQUFDLDBEQUFEO0FBQVEsY0FBTSxFQUFFVjtBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxGLGVBTUUscUVBQUMsNkRBQUQ7QUFBVyxjQUFNLEVBQUVGLElBQUksQ0FBQ0csSUFBTCxDQUFVRTtBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixlQVVFLHFFQUFDLCtDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVkY7QUFBQSxrQkFERjtBQWNELENBeEJEOztBQTBCTyxlQUFlUSxjQUFmLEdBQWdDO0FBQ3JDLFFBQU1DLE1BQU0sR0FBR0MscUVBQU0sRUFBckI7QUFDQSxRQUFNZixJQUFJLEdBQUcsTUFBTWMsTUFBTSxDQUFDRSxTQUFQLENBQWlCLE1BQWpCLENBQW5CO0FBQ0EsUUFBTWYsTUFBTSxHQUFHLE1BQU1hLE1BQU0sQ0FBQ0UsU0FBUCxDQUFpQixRQUFqQixDQUFyQjtBQUVBLFNBQU87QUFDTEMsU0FBSyxFQUFFO0FBQ0xqQixVQUFJLEVBQUVBLElBREQ7QUFFTEM7QUFGSztBQURGLEdBQVA7QUFNRDtBQUVjRixvRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgQ2xpZW50IH0gZnJvbSBcIi4uL3ByaXNtaWMtY29uZmlndXJhdGlvblwiO1xuaW1wb3J0IHsgUmljaFRleHQgfSBmcm9tIFwicHJpc21pYy1yZWFjdGpzXCI7XG5pbXBvcnQgeyBDb250YWluZXIsIFJvdyB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcblxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9IZWFkZXJcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vRm9vdGVyXCJcbmltcG9ydCBCYW5uZXIgZnJvbSBcIi4vY29tcG9uZW50cy9CYW5uZXJcIlxuaW1wb3J0IFNsaWNlWm9uZSBmcm9tIFwiLi9jb21wb25lbnRzL1NsaWNlWm9uZVwiO1xuXG5jb25zdCBJbmRleCA9ICh7IGhvbWUsIGhlYWRlciB9KSA9PiB7XG4gIC8vVGVzdHNcbiAgY29uc3QgYmFubmVyID0gaG9tZS5kYXRhO1xuICBjb25zdCBxdW90ZSA9IGhvbWUuZGF0YS5ib2R5WzBdLnByaW1hcnk7XG4gIGNvbnN0IG5hdiA9IGhlYWRlci5kYXRhO1xuICBjb25zb2xlLmxvZyhob21lKTtcbiAgY29uc29sZS5sb2coaGVhZGVyKTtcbiAgY29uc29sZS5sb2coYmFubmVyKTtcbiAgY29uc29sZS5sb2cocXVvdGUpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkZXIgaGVhZGVyPXtuYXZ9IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWUtY29udGFpbmVyXCI+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDx0aXRsZT57UmljaFRleHQuYXNUZXh0KGJhbm5lci5wYWdlX3RpdGxlKX08L3RpdGxlPlxuICAgICAgICA8L0hlYWQ+XG5cbiAgICAgICAgPEJhbm5lciBiYW5uZXI9e2Jhbm5lcn0gLz5cbiAgICAgICAgPFNsaWNlWm9uZSBzbGljZXM9e2hvbWUuZGF0YS5ib2R5fSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8Rm9vdGVyLz5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgY29uc3QgY2xpZW50ID0gQ2xpZW50KCk7XG4gIGNvbnN0IGhvbWUgPSBhd2FpdCBjbGllbnQuZ2V0U2luZ2xlKFwiaG9tZVwiKTtcbiAgY29uc3QgaGVhZGVyID0gYXdhaXQgY2xpZW50LmdldFNpbmdsZShcImhlYWRlclwiKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBob21lOiBob21lLFxuICAgICAgaGVhZGVyLFxuICAgIH0sXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./prismic-configuration.js":
/*!**********************************!*\
  !*** ./prismic-configuration.js ***!
  \**********************************/
/*! exports provided: apiEndpoint, accessToken, Client, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"apiEndpoint\", function() { return apiEndpoint; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"accessToken\", function() { return accessToken; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Client\", function() { return Client; });\n/* harmony import */ var prismic_javascript__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prismic-javascript */ \"prismic-javascript\");\n/* harmony import */ var prismic_javascript__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prismic_javascript__WEBPACK_IMPORTED_MODULE_0__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nconst apiEndpoint = \"https://ngo-next-theme.cdn.prismic.io/api/v2\";\nconst accessToken = \"\";\nconst Client = (req = null) => prismic_javascript__WEBPACK_IMPORTED_MODULE_0___default.a.client(apiEndpoint, createClientOptions(req, accessToken));\n\nconst createClientOptions = (req = null, prismicAccessToken = null) => {\n  const reqOption = req ? {\n    req\n  } : {};\n  const accessTokenOption = prismicAccessToken ? {\n    accessToken: prismicAccessToken\n  } : {};\n  return _objectSpread(_objectSpread({}, reqOption), accessTokenOption);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Client);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wcmlzbWljLWNvbmZpZ3VyYXRpb24uanM/YThiMiJdLCJuYW1lcyI6WyJhcGlFbmRwb2ludCIsImFjY2Vzc1Rva2VuIiwiQ2xpZW50IiwicmVxIiwiUHJpc21pYyIsImNsaWVudCIsImNyZWF0ZUNsaWVudE9wdGlvbnMiLCJwcmlzbWljQWNjZXNzVG9rZW4iLCJyZXFPcHRpb24iLCJhY2Nlc3NUb2tlbk9wdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxNQUFNQSxXQUFXLEdBQUcsOENBQXBCO0FBQ0EsTUFBTUMsV0FBVyxHQUFHLEVBQXBCO0FBRUEsTUFBTUMsTUFBTSxHQUFHLENBQUNDLEdBQUcsR0FBRyxJQUFQLEtBQ3BCQyx5REFBTyxDQUFDQyxNQUFSLENBQWVMLFdBQWYsRUFBNEJNLG1CQUFtQixDQUFDSCxHQUFELEVBQU1GLFdBQU4sQ0FBL0MsQ0FESzs7QUFHUCxNQUFNSyxtQkFBbUIsR0FBRyxDQUFDSCxHQUFHLEdBQUcsSUFBUCxFQUFhSSxrQkFBa0IsR0FBRyxJQUFsQyxLQUEyQztBQUNyRSxRQUFNQyxTQUFTLEdBQUdMLEdBQUcsR0FBRztBQUFFQTtBQUFGLEdBQUgsR0FBYSxFQUFsQztBQUNBLFFBQU1NLGlCQUFpQixHQUFHRixrQkFBa0IsR0FDeEM7QUFBRU4sZUFBVyxFQUFFTTtBQUFmLEdBRHdDLEdBRXhDLEVBRko7QUFHQSx5Q0FDS0MsU0FETCxHQUVLQyxpQkFGTDtBQUlELENBVEQ7O0FBV2VQLHFFQUFmIiwiZmlsZSI6Ii4vcHJpc21pYy1jb25maWd1cmF0aW9uLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByaXNtaWMgZnJvbSBcInByaXNtaWMtamF2YXNjcmlwdFwiO1xuXG5leHBvcnQgY29uc3QgYXBpRW5kcG9pbnQgPSBcImh0dHBzOi8vbmdvLW5leHQtdGhlbWUuY2RuLnByaXNtaWMuaW8vYXBpL3YyXCI7XG5leHBvcnQgY29uc3QgYWNjZXNzVG9rZW4gPSBcIlwiO1xuXG5leHBvcnQgY29uc3QgQ2xpZW50ID0gKHJlcSA9IG51bGwpID0+XG4gIFByaXNtaWMuY2xpZW50KGFwaUVuZHBvaW50LCBjcmVhdGVDbGllbnRPcHRpb25zKHJlcSwgYWNjZXNzVG9rZW4pKTtcblxuY29uc3QgY3JlYXRlQ2xpZW50T3B0aW9ucyA9IChyZXEgPSBudWxsLCBwcmlzbWljQWNjZXNzVG9rZW4gPSBudWxsKSA9PiB7XG4gIGNvbnN0IHJlcU9wdGlvbiA9IHJlcSA/IHsgcmVxIH0gOiB7fTtcbiAgY29uc3QgYWNjZXNzVG9rZW5PcHRpb24gPSBwcmlzbWljQWNjZXNzVG9rZW5cbiAgICA/IHsgYWNjZXNzVG9rZW46IHByaXNtaWNBY2Nlc3NUb2tlbiB9XG4gICAgOiB7fTtcbiAgcmV0dXJuIHtcbiAgICAuLi5yZXFPcHRpb24sXG4gICAgLi4uYWNjZXNzVG9rZW5PcHRpb24sXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDbGllbnQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./prismic-configuration.js\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "prismic-javascript":
/*!*************************************!*\
  !*** external "prismic-javascript" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prismic-javascript\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcmlzbWljLWphdmFzY3JpcHRcIj83OGYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InByaXNtaWMtamF2YXNjcmlwdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByaXNtaWMtamF2YXNjcmlwdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///prismic-javascript\n");

/***/ }),

/***/ "prismic-reactjs":
/*!**********************************!*\
  !*** external "prismic-reactjs" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prismic-reactjs\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcmlzbWljLXJlYWN0anNcIj9iZDNmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InByaXNtaWMtcmVhY3Rqcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByaXNtaWMtcmVhY3Rqc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///prismic-reactjs\n");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-bootstrap\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXBcIj8zODUwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0LWJvb3RzdHJhcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-bootstrap\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });