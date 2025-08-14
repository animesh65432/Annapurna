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

/***/ "(pages-dir-node)/./languages/bengali.json":
/*!********************************!*\
  !*** ./languages/bengali.json ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"Explore":"অন্বেষণ করুন","Save":"সংরক্ষণ করুন"}');

/***/ }),

/***/ "(pages-dir-node)/./languages/english.json":
/*!********************************!*\
  !*** ./languages/english.json ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"Explore":"Explore","Save":"Save"}');

/***/ }),

/***/ "(pages-dir-node)/./lib/i18n.ts":
/*!*********************!*\
  !*** ./lib/i18n.ts ***!
  \*********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! i18next */ \"i18next\");\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ \"react-i18next\");\n/* harmony import */ var i18next_browser_languagedetector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! i18next-browser-languagedetector */ \"i18next-browser-languagedetector\");\n/* harmony import */ var _languages_english_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/languages/english.json */ \"(pages-dir-node)/./languages/english.json\");\n/* harmony import */ var _languages_bengali_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/languages/bengali.json */ \"(pages-dir-node)/./languages/bengali.json\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([i18next__WEBPACK_IMPORTED_MODULE_0__, react_i18next__WEBPACK_IMPORTED_MODULE_1__, i18next_browser_languagedetector__WEBPACK_IMPORTED_MODULE_2__]);\n([i18next__WEBPACK_IMPORTED_MODULE_0__, react_i18next__WEBPACK_IMPORTED_MODULE_1__, i18next_browser_languagedetector__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\ni18next__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(i18next_browser_languagedetector__WEBPACK_IMPORTED_MODULE_2__[\"default\"]).use(react_i18next__WEBPACK_IMPORTED_MODULE_1__.initReactI18next).init({\n    resources: {\n        en: {\n            translation: _languages_english_json__WEBPACK_IMPORTED_MODULE_3__\n        },\n        bn: {\n            translation: _languages_bengali_json__WEBPACK_IMPORTED_MODULE_4__\n        }\n    },\n    fallbackLng: \"en\",\n    supportedLngs: [\n        \"en\",\n        \"hi\",\n        \"bn\",\n        \"ta\"\n    ],\n    interpolation: {\n        escapeValue: false\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (i18next__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2xpYi9pMThuLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEyQjtBQUNzQjtBQUNlO0FBRVg7QUFDQTtBQUVyREEsbURBQ1EsQ0FBQ0Usd0VBQWdCQSxFQUNwQkcsR0FBRyxDQUFDSiwyREFBZ0JBLEVBQ3BCSyxJQUFJLENBQUM7SUFDRkMsV0FBVztRQUNQQyxJQUFJO1lBQUVDLGFBQWFOLG9EQUFhQTtRQUFDO1FBQ2pDTyxJQUFJO1lBQUVELGFBQWFMLG9EQUFhQTtRQUFDO0lBQ3JDO0lBQ0FPLGFBQWE7SUFDYkMsZUFBZTtRQUFDO1FBQU07UUFBTTtRQUFNO0tBQUs7SUFDdkNDLGVBQWU7UUFDWEMsYUFBYTtJQUNqQjtBQUNKO0FBRUosaUVBQWVkLCtDQUFJQSxFQUFDIiwic291cmNlcyI6WyIvaG9tZS9hbmltZXNoL1Byb2plY3RzL0FubmFwdXJuYS9mcm9udGVuZC9saWIvaTE4bi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaTE4biBmcm9tIFwiaTE4bmV4dFwiO1xuaW1wb3J0IHsgaW5pdFJlYWN0STE4bmV4dCB9IGZyb20gXCJyZWFjdC1pMThuZXh0XCI7XG5pbXBvcnQgTGFuZ3VhZ2VEZXRlY3RvciBmcm9tIFwiaTE4bmV4dC1icm93c2VyLWxhbmd1YWdlZGV0ZWN0b3JcIjtcblxuaW1wb3J0IHRyYW5zbGF0aW9uRU4gZnJvbSBcIkAvbGFuZ3VhZ2VzL2VuZ2xpc2guanNvblwiO1xuaW1wb3J0IHRyYW5zbGF0aW9uQk4gZnJvbSBcIkAvbGFuZ3VhZ2VzL2JlbmdhbGkuanNvblwiO1xuXG5pMThuXG4gICAgLnVzZShMYW5ndWFnZURldGVjdG9yKVxuICAgIC51c2UoaW5pdFJlYWN0STE4bmV4dClcbiAgICAuaW5pdCh7XG4gICAgICAgIHJlc291cmNlczoge1xuICAgICAgICAgICAgZW46IHsgdHJhbnNsYXRpb246IHRyYW5zbGF0aW9uRU4gfSxcbiAgICAgICAgICAgIGJuOiB7IHRyYW5zbGF0aW9uOiB0cmFuc2xhdGlvbkJOIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGZhbGxiYWNrTG5nOiBcImVuXCIsXG4gICAgICAgIHN1cHBvcnRlZExuZ3M6IFtcImVuXCIsIFwiaGlcIiwgXCJiblwiLCBcInRhXCJdLFxuICAgICAgICBpbnRlcnBvbGF0aW9uOiB7XG4gICAgICAgICAgICBlc2NhcGVWYWx1ZTogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgfSk7XG5cbmV4cG9ydCBkZWZhdWx0IGkxOG47XG4iXSwibmFtZXMiOlsiaTE4biIsImluaXRSZWFjdEkxOG5leHQiLCJMYW5ndWFnZURldGVjdG9yIiwidHJhbnNsYXRpb25FTiIsInRyYW5zbGF0aW9uQk4iLCJ1c2UiLCJpbml0IiwicmVzb3VyY2VzIiwiZW4iLCJ0cmFuc2xhdGlvbiIsImJuIiwiZmFsbGJhY2tMbmciLCJzdXBwb3J0ZWRMbmdzIiwiaW50ZXJwb2xhdGlvbiIsImVzY2FwZVZhbHVlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./lib/i18n.ts\n");

/***/ }),

/***/ "(pages-dir-node)/./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/i18n */ \"(pages-dir-node)/./lib/i18n.ts\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/globals.css */ \"(pages-dir-node)/./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"(pages-dir-node)/./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-i18next */ \"next-i18next\");\n/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_i18n__WEBPACK_IMPORTED_MODULE_1__, react_toastify__WEBPACK_IMPORTED_MODULE_5__]);\n([_lib_i18n__WEBPACK_IMPORTED_MODULE_1__, react_toastify__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                    rel: \"icon\",\n                    href: \"/favicon.ico\"\n                }, void 0, false, {\n                    fileName: \"/home/animesh/Projects/Annapurna/frontend/pages/_app.tsx\",\n                    lineNumber: 12,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/animesh/Projects/Annapurna/frontend/pages/_app.tsx\",\n                lineNumber: 11,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/home/animesh/Projects/Annapurna/frontend/pages/_app.tsx\",\n                lineNumber: 14,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_5__.ToastContainer, {\n                position: \"top-right\",\n                autoClose: 3000,\n                hideProgressBar: false,\n                newestOnTop: false,\n                closeOnClick: true,\n                rtl: false,\n                pauseOnFocusLoss: true,\n                draggable: true,\n                pauseOnHover: true\n            }, void 0, false, {\n                fileName: \"/home/animesh/Projects/Annapurna/frontend/pages/_app.tsx\",\n                lineNumber: 15,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_i18next__WEBPACK_IMPORTED_MODULE_4__.appWithTranslation)(MyApp));\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3BhZ2VzL19hcHAudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFtQjtBQUNXO0FBQ0Q7QUFFcUI7QUFDRjtBQUdoRCxTQUFTRyxNQUFNLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFZO0lBQy9DLHFCQUFPOzswQkFDTCw4REFBQ0wsa0RBQUlBOzBCQUNILDRFQUFDTTtvQkFBS0MsS0FBSTtvQkFBT0MsTUFBSzs7Ozs7Ozs7Ozs7MEJBRXhCLDhEQUFDSjtnQkFBVyxHQUFHQyxTQUFTOzs7Ozs7MEJBQ3hCLDhEQUFDSCwwREFBY0E7Z0JBQ2JPLFVBQVM7Z0JBQ1RDLFdBQVc7Z0JBQ1hDLGlCQUFpQjtnQkFDakJDLGFBQWE7Z0JBQ2JDLFlBQVk7Z0JBQ1pDLEtBQUs7Z0JBQ0xDLGdCQUFnQjtnQkFDaEJDLFNBQVM7Z0JBQ1RDLFlBQVk7Ozs7Ozs7O0FBR2xCO0FBRUEsaUVBQWVoQixnRUFBa0JBLENBQUNFLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIi9ob21lL2FuaW1lc2gvUHJvamVjdHMvQW5uYXB1cm5hL2Zyb250ZW5kL3BhZ2VzL19hcHAudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIkAvbGliL2kxOG5cIlxuaW1wb3J0ICdAL3N0eWxlcy9nbG9iYWxzLmNzcyc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJztcbmltcG9ydCB7IGFwcFdpdGhUcmFuc2xhdGlvbiB9IGZyb20gXCJuZXh0LWkxOG5leHRcIjtcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyIH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xuXG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgcmV0dXJuIDw+XG4gICAgPEhlYWQ+XG4gICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgPC9IZWFkPlxuICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8VG9hc3RDb250YWluZXJcbiAgICAgIHBvc2l0aW9uPVwidG9wLXJpZ2h0XCJcbiAgICAgIGF1dG9DbG9zZT17MzAwMH1cbiAgICAgIGhpZGVQcm9ncmVzc0Jhcj17ZmFsc2V9XG4gICAgICBuZXdlc3RPblRvcD17ZmFsc2V9XG4gICAgICBjbG9zZU9uQ2xpY2tcbiAgICAgIHJ0bD17ZmFsc2V9XG4gICAgICBwYXVzZU9uRm9jdXNMb3NzXG4gICAgICBkcmFnZ2FibGVcbiAgICAgIHBhdXNlT25Ib3ZlclxuICAgIC8+XG4gIDwvPlxufVxuXG5leHBvcnQgZGVmYXVsdCBhcHBXaXRoVHJhbnNsYXRpb24oTXlBcHApO1xuIl0sIm5hbWVzIjpbIkhlYWQiLCJhcHBXaXRoVHJhbnNsYXRpb24iLCJUb2FzdENvbnRhaW5lciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwibGluayIsInJlbCIsImhyZWYiLCJwb3NpdGlvbiIsImF1dG9DbG9zZSIsImhpZGVQcm9ncmVzc0JhciIsIm5ld2VzdE9uVG9wIiwiY2xvc2VPbkNsaWNrIiwicnRsIiwicGF1c2VPbkZvY3VzTG9zcyIsImRyYWdnYWJsZSIsInBhdXNlT25Ib3ZlciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./pages/_app.tsx\n");

/***/ }),

/***/ "(pages-dir-node)/./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "i18next":
/*!**************************!*\
  !*** external "i18next" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = import("i18next");;

/***/ }),

/***/ "i18next-browser-languagedetector":
/*!***************************************************!*\
  !*** external "i18next-browser-languagedetector" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = import("i18next-browser-languagedetector");;

/***/ }),

/***/ "next-i18next":
/*!*******************************!*\
  !*** external "next-i18next" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-i18next");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-i18next":
/*!********************************!*\
  !*** external "react-i18next" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = import("react-i18next");;

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = import("react-toastify");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("(pages-dir-node)/./pages/_app.tsx")));
module.exports = __webpack_exports__;

})();