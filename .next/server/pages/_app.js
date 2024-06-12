"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/CartContext.js":
/*!***********************************!*\
  !*** ./components/CartContext.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CartContext\": () => (/* binding */ CartContext),\n/* harmony export */   \"CartContextProvider\": () => (/* binding */ CartContextProvider)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"C:\\\\TFG\\\\ecommerce-front\\\\components\\\\CartContext.js\";\n\n\nconst CartContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});\nfunction CartContextProvider({\n  children\n}) {\n  const ls =  false ? 0 : null;\n  const {\n    0: cartProducts,\n    1: setCartProducts\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    if (cartProducts?.length > 0) {\n      ls?.setItem('cart', JSON.stringify(cartProducts));\n    }\n  }, [cartProducts]);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    if (ls && ls.getItem('cart')) {\n      setCartProducts(JSON.parse(ls.getItem('cart')));\n    }\n  }, []);\n\n  function addProduct(productId) {\n    setCartProducts(prev => [...prev, productId]);\n  }\n\n  function removeProduct(productId) {\n    setCartProducts(prev => {\n      const pos = prev.indexOf(productId);\n\n      if (pos !== -1) {\n        return prev.filter((value, index) => index !== pos);\n      }\n\n      return prev;\n    });\n  }\n\n  function clearCart() {\n    setCartProducts([]);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(CartContext.Provider, {\n    value: {\n      cartProducts,\n      setCartProducts,\n      addProduct,\n      removeProduct,\n      clearCart\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 34,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NhcnRDb250ZXh0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFFTyxNQUFNRyxXQUFXLGdCQUFHSCxvREFBYSxDQUFDLEVBQUQsQ0FBakM7QUFFQSxTQUFTSSxtQkFBVCxDQUE2QjtFQUFDQztBQUFELENBQTdCLEVBQXlDO0VBQzlDLE1BQU1DLEVBQUUsR0FBRyxTQUFnQ0MsQ0FBaEMsR0FBc0QsSUFBakU7RUFDQSxNQUFNO0lBQUEsR0FBQ0UsWUFBRDtJQUFBLEdBQWNDO0VBQWQsSUFBaUNSLCtDQUFRLENBQUMsRUFBRCxDQUEvQztFQUNBRCxnREFBUyxDQUFDLE1BQU07SUFDZCxJQUFJUSxZQUFZLEVBQUVFLE1BQWQsR0FBdUIsQ0FBM0IsRUFBOEI7TUFDNUJMLEVBQUUsRUFBRU0sT0FBSixDQUFZLE1BQVosRUFBb0JDLElBQUksQ0FBQ0MsU0FBTCxDQUFlTCxZQUFmLENBQXBCO0lBQ0Q7RUFDRixDQUpRLEVBSU4sQ0FBQ0EsWUFBRCxDQUpNLENBQVQ7RUFLQVIsZ0RBQVMsQ0FBQyxNQUFNO0lBQ2QsSUFBSUssRUFBRSxJQUFJQSxFQUFFLENBQUNTLE9BQUgsQ0FBVyxNQUFYLENBQVYsRUFBOEI7TUFDNUJMLGVBQWUsQ0FBQ0csSUFBSSxDQUFDRyxLQUFMLENBQVdWLEVBQUUsQ0FBQ1MsT0FBSCxDQUFXLE1BQVgsQ0FBWCxDQUFELENBQWY7SUFDRDtFQUNGLENBSlEsRUFJTixFQUpNLENBQVQ7O0VBS0EsU0FBU0UsVUFBVCxDQUFvQkMsU0FBcEIsRUFBK0I7SUFDN0JSLGVBQWUsQ0FBQ1MsSUFBSSxJQUFJLENBQUMsR0FBR0EsSUFBSixFQUFTRCxTQUFULENBQVQsQ0FBZjtFQUNEOztFQUNELFNBQVNFLGFBQVQsQ0FBdUJGLFNBQXZCLEVBQWtDO0lBQ2hDUixlQUFlLENBQUNTLElBQUksSUFBSTtNQUN0QixNQUFNRSxHQUFHLEdBQUdGLElBQUksQ0FBQ0csT0FBTCxDQUFhSixTQUFiLENBQVo7O01BQ0EsSUFBSUcsR0FBRyxLQUFLLENBQUMsQ0FBYixFQUFnQjtRQUNkLE9BQU9GLElBQUksQ0FBQ0ksTUFBTCxDQUFZLENBQUNDLEtBQUQsRUFBT0MsS0FBUCxLQUFpQkEsS0FBSyxLQUFLSixHQUF2QyxDQUFQO01BQ0Q7O01BQ0QsT0FBT0YsSUFBUDtJQUNELENBTmMsQ0FBZjtFQU9EOztFQUNELFNBQVNPLFNBQVQsR0FBcUI7SUFDbkJoQixlQUFlLENBQUMsRUFBRCxDQUFmO0VBQ0Q7O0VBQ0Qsb0JBQ0UsOERBQUMsV0FBRCxDQUFhLFFBQWI7SUFBc0IsS0FBSyxFQUFFO01BQUNELFlBQUQ7TUFBY0MsZUFBZDtNQUE4Qk8sVUFBOUI7TUFBeUNHLGFBQXpDO01BQXVETTtJQUF2RCxDQUE3QjtJQUFBLFVBQ0dyQjtFQURIO0lBQUE7SUFBQTtJQUFBO0VBQUEsUUFERjtBQUtEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWNvbW1lcmNlLWZyb250Ly4vY29tcG9uZW50cy9DYXJ0Q29udGV4dC5qcz84MjNmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3JlYXRlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgQ2FydENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9KTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDYXJ0Q29udGV4dFByb3ZpZGVyKHtjaGlsZHJlbn0pIHtcclxuICBjb25zdCBscyA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cubG9jYWxTdG9yYWdlIDogbnVsbDtcclxuICBjb25zdCBbY2FydFByb2R1Y3RzLHNldENhcnRQcm9kdWN0c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChjYXJ0UHJvZHVjdHM/Lmxlbmd0aCA+IDApIHtcclxuICAgICAgbHM/LnNldEl0ZW0oJ2NhcnQnLCBKU09OLnN0cmluZ2lmeShjYXJ0UHJvZHVjdHMpKTtcclxuICAgIH1cclxuICB9LCBbY2FydFByb2R1Y3RzXSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChscyAmJiBscy5nZXRJdGVtKCdjYXJ0JykpIHtcclxuICAgICAgc2V0Q2FydFByb2R1Y3RzKEpTT04ucGFyc2UobHMuZ2V0SXRlbSgnY2FydCcpKSk7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG4gIGZ1bmN0aW9uIGFkZFByb2R1Y3QocHJvZHVjdElkKSB7XHJcbiAgICBzZXRDYXJ0UHJvZHVjdHMocHJldiA9PiBbLi4ucHJldixwcm9kdWN0SWRdKTtcclxuICB9XHJcbiAgZnVuY3Rpb24gcmVtb3ZlUHJvZHVjdChwcm9kdWN0SWQpIHtcclxuICAgIHNldENhcnRQcm9kdWN0cyhwcmV2ID0+IHtcclxuICAgICAgY29uc3QgcG9zID0gcHJldi5pbmRleE9mKHByb2R1Y3RJZCk7XHJcbiAgICAgIGlmIChwb3MgIT09IC0xKSB7XHJcbiAgICAgICAgcmV0dXJuIHByZXYuZmlsdGVyKCh2YWx1ZSxpbmRleCkgPT4gaW5kZXggIT09IHBvcyk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHByZXY7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgZnVuY3Rpb24gY2xlYXJDYXJ0KCkge1xyXG4gICAgc2V0Q2FydFByb2R1Y3RzKFtdKTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJ0Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17e2NhcnRQcm9kdWN0cyxzZXRDYXJ0UHJvZHVjdHMsYWRkUHJvZHVjdCxyZW1vdmVQcm9kdWN0LGNsZWFyQ2FydH19PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0NhcnRDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn0iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ2FydENvbnRleHQiLCJDYXJ0Q29udGV4dFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJscyIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsImNhcnRQcm9kdWN0cyIsInNldENhcnRQcm9kdWN0cyIsImxlbmd0aCIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwiZ2V0SXRlbSIsInBhcnNlIiwiYWRkUHJvZHVjdCIsInByb2R1Y3RJZCIsInByZXYiLCJyZW1vdmVQcm9kdWN0IiwicG9zIiwiaW5kZXhPZiIsImZpbHRlciIsInZhbHVlIiwiaW5kZXgiLCJjbGVhckNhcnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/CartContext.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_CartContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/CartContext */ \"./components/CartContext.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"C:\\\\TFG\\\\ecommerce-front\\\\pages\\\\_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nconst GlobalStyles = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle)([\"@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');body{background-color:#eee;padding:0;margin:0;font-family:'Poppins',sans-serif;}\"]);\nfunction App({\n  Component,\n  pageProps\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(GlobalStyles, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_CartContext__WEBPACK_IMPORTED_MODULE_1__.CartContextProvider, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBRUEsTUFBTUUsWUFBWSxHQUFHRixvRUFBSCx3TEFBbEI7QUFVZSxTQUFTRyxHQUFULENBQWE7RUFBRUMsU0FBRjtFQUFhQztBQUFiLENBQWIsRUFBdUM7RUFDcEQsb0JBQ0U7SUFBQSx3QkFDRSw4REFBQyxZQUFEO01BQUE7TUFBQTtNQUFBO0lBQUEsUUFERixlQUVFLDhEQUFDLHdFQUFEO01BQUEsdUJBQ0UsOERBQUMsU0FBRCxvQkFBZUEsU0FBZjtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBREY7TUFBQTtNQUFBO01BQUE7SUFBQSxRQUZGO0VBQUEsZ0JBREY7QUFRRCIsInNvdXJjZXMiOlsid2VicGFjazovL2Vjb21tZXJjZS1mcm9udC8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NyZWF0ZUdsb2JhbFN0eWxlfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHtDYXJ0Q29udGV4dFByb3ZpZGVyfSBmcm9tIFwiQC9jb21wb25lbnRzL0NhcnRDb250ZXh0XCI7XHJcblxyXG5jb25zdCBHbG9iYWxTdHlsZXMgPSBjcmVhdGVHbG9iYWxTdHlsZWBcclxuICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRANDAwOzUwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xyXG4gIGJvZHl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gICAgcGFkZGluZzowO1xyXG4gICAgbWFyZ2luOjA7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEdsb2JhbFN0eWxlcyAvPlxyXG4gICAgICA8Q2FydENvbnRleHRQcm92aWRlcj5cclxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgIDwvQ2FydENvbnRleHRQcm92aWRlcj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbImNyZWF0ZUdsb2JhbFN0eWxlIiwiQ2FydENvbnRleHRQcm92aWRlciIsIkdsb2JhbFN0eWxlcyIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();