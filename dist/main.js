/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/listDisplayer.js":
/*!******************************!*\
  !*** ./src/listDisplayer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const displayList = (list) => {

    const content = document.querySelector('.content');
    for (let listItem of list) {

        content.appendChild(createItemDiv(listItem));
    }

};

const createItemDiv = (listItem) => {
    const itemDiv = createDiv();
    const itemTitle = document.createElement('h3');
    itemTitle.textContent = listItem.title;
    itemDiv.appendChild(itemTitle);

    return itemDiv;
};

const createDiv = () => {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('item-div');

    return itemDiv;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayList);

/***/ }),

/***/ "./src/todoItem.js":
/*!*************************!*\
  !*** ./src/todoItem.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
  const todoItemFactory = (title, description, dueDate, priority) => {

      return { title, description, dueDate, priority }
  };

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todoItemFactory);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _todoItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoItem */ "./src/todoItem.js");
/* harmony import */ var _listDisplayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listDisplayer */ "./src/listDisplayer.js");




//testItems
const testItem = (0,_todoItem__WEBPACK_IMPORTED_MODULE_0__["default"])("Eat Pizza", "Insert Pizza into mouth", "tomorrow", "High");
const testItem1 = (0,_todoItem__WEBPACK_IMPORTED_MODULE_0__["default"])("Wash dishes", "With soap AND water", "tomorrow", "High");
const testItem2 = (0,_todoItem__WEBPACK_IMPORTED_MODULE_0__["default"])("Put away dishes", "STACK dishes in cabinet", "tomorrow", "High");
const testItem3 = (0,_todoItem__WEBPACK_IMPORTED_MODULE_0__["default"])("Clean Oven", "With water AND soap", "tomorrow", "High");
const testItem4 = (0,_todoItem__WEBPACK_IMPORTED_MODULE_0__["default"])("Sweep kitchen", "With a BROOM", "tomorrow", "High");

const createNewTodoList = () => {
    return [];
}

const mainList = createNewTodoList();
mainList.push(testItem);
mainList.push(testItem1);
mainList.push(testItem2);
mainList.push(testItem3);
mainList.push(testItem4);

(0,_listDisplayer__WEBPACK_IMPORTED_MODULE_1__["default"])(mainList);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsV0FBVzs7Ozs7Ozs7Ozs7Ozs7QUMxQjFCOztBQUVBLGVBQWU7QUFDZjs7QUFFQSxFQUFFLGlFQUFlLGVBQWU7Ozs7OztVQ0xoQztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ055QztBQUNDOzs7QUFHMUM7QUFDQSxpQkFBaUIscURBQWU7QUFDaEMsa0JBQWtCLHFEQUFlO0FBQ2pDLGtCQUFrQixxREFBZTtBQUNqQyxrQkFBa0IscURBQWU7QUFDakMsa0JBQWtCLHFEQUFlOztBQUVqQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDBEQUFXLFciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbGlzdERpc3BsYXllci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kb0l0ZW0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGRpc3BsYXlMaXN0ID0gKGxpc3QpID0+IHtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICAgIGZvciAobGV0IGxpc3RJdGVtIG9mIGxpc3QpIHtcblxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUl0ZW1EaXYobGlzdEl0ZW0pKTtcbiAgICB9XG5cbn07XG5cbmNvbnN0IGNyZWF0ZUl0ZW1EaXYgPSAobGlzdEl0ZW0pID0+IHtcbiAgICBjb25zdCBpdGVtRGl2ID0gY3JlYXRlRGl2KCk7XG4gICAgY29uc3QgaXRlbVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBpdGVtVGl0bGUudGV4dENvbnRlbnQgPSBsaXN0SXRlbS50aXRsZTtcbiAgICBpdGVtRGl2LmFwcGVuZENoaWxkKGl0ZW1UaXRsZSk7XG5cbiAgICByZXR1cm4gaXRlbURpdjtcbn07XG5cbmNvbnN0IGNyZWF0ZURpdiA9ICgpID0+IHtcbiAgICBjb25zdCBpdGVtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaXRlbURpdi5jbGFzc0xpc3QuYWRkKCdpdGVtLWRpdicpO1xuXG4gICAgcmV0dXJuIGl0ZW1EaXY7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5TGlzdDsiLCIgIGNvbnN0IHRvZG9JdGVtRmFjdG9yeSA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSA9PiB7XG5cbiAgICAgIHJldHVybiB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkgfVxuICB9O1xuXG4gIGV4cG9ydCBkZWZhdWx0IHRvZG9JdGVtRmFjdG9yeTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB0b2RvSXRlbUZhY3RvcnkgZnJvbSBcIi4vdG9kb0l0ZW1cIjtcbmltcG9ydCBkaXNwbGF5TGlzdCBmcm9tIFwiLi9saXN0RGlzcGxheWVyXCI7XG5cblxuLy90ZXN0SXRlbXNcbmNvbnN0IHRlc3RJdGVtID0gdG9kb0l0ZW1GYWN0b3J5KFwiRWF0IFBpenphXCIsIFwiSW5zZXJ0IFBpenphIGludG8gbW91dGhcIiwgXCJ0b21vcnJvd1wiLCBcIkhpZ2hcIik7XG5jb25zdCB0ZXN0SXRlbTEgPSB0b2RvSXRlbUZhY3RvcnkoXCJXYXNoIGRpc2hlc1wiLCBcIldpdGggc29hcCBBTkQgd2F0ZXJcIiwgXCJ0b21vcnJvd1wiLCBcIkhpZ2hcIik7XG5jb25zdCB0ZXN0SXRlbTIgPSB0b2RvSXRlbUZhY3RvcnkoXCJQdXQgYXdheSBkaXNoZXNcIiwgXCJTVEFDSyBkaXNoZXMgaW4gY2FiaW5ldFwiLCBcInRvbW9ycm93XCIsIFwiSGlnaFwiKTtcbmNvbnN0IHRlc3RJdGVtMyA9IHRvZG9JdGVtRmFjdG9yeShcIkNsZWFuIE92ZW5cIiwgXCJXaXRoIHdhdGVyIEFORCBzb2FwXCIsIFwidG9tb3Jyb3dcIiwgXCJIaWdoXCIpO1xuY29uc3QgdGVzdEl0ZW00ID0gdG9kb0l0ZW1GYWN0b3J5KFwiU3dlZXAga2l0Y2hlblwiLCBcIldpdGggYSBCUk9PTVwiLCBcInRvbW9ycm93XCIsIFwiSGlnaFwiKTtcblxuY29uc3QgY3JlYXRlTmV3VG9kb0xpc3QgPSAoKSA9PiB7XG4gICAgcmV0dXJuIFtdO1xufVxuXG5jb25zdCBtYWluTGlzdCA9IGNyZWF0ZU5ld1RvZG9MaXN0KCk7XG5tYWluTGlzdC5wdXNoKHRlc3RJdGVtKTtcbm1haW5MaXN0LnB1c2godGVzdEl0ZW0xKTtcbm1haW5MaXN0LnB1c2godGVzdEl0ZW0yKTtcbm1haW5MaXN0LnB1c2godGVzdEl0ZW0zKTtcbm1haW5MaXN0LnB1c2godGVzdEl0ZW00KTtcblxuZGlzcGxheUxpc3QobWFpbkxpc3QpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==