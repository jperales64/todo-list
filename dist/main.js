/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "    body {\n        margin: 0;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        height: 100%;\n        width: 100%;\n    }\n    \n    .content {\n        width: 100%;\n        height: 100%;\n        display: flex;\n        justify-content: center;\n    }\n    \n    .main-div {\n        flex-grow: 8;\n        display: flex;\n        align-items: center;\n    }\n    \n    .list-div,\n    .list-info-div {\n        width: 20%;\n        height: 80%;\n        margin-left: 20px;\n        padding: 20px;\n        border-radius: 10px;\n    }\n    \n    .list-info-div {\n        background-color: rebeccapurple;\n    }\n    \n    .hover,\n    .list-item-div,\n    .list-item-selected {\n        border-radius: 5px;\n        padding: 10px;\n        border-style: solid;\n        border-radius: 1px;\n        border-width: 1px;\n        border-color: rgba(0, 0, 0, 0);\n        margin-bottom: 20px;\n        display: flex;\n        align-items: center;\n    }\n    \n    .hover {\n        background-color: #c9c9c9;\n    }\n    \n    .list-item-selected {\n        border-style: solid;\n        border-width: 3px;\n        border-color: rebeccapurple;\n    }\n    \n    .add-button,\n    .add-task-to-list-button {\n        margin-top: 30px;\n        border-radius: 30px;\n        padding: 5px 40px 5px 40px;\n    }\n    \n    .tool-bar {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        flex-grow: 1;\n        border-right: solid;\n        border-color: rgba(102, 51, 153, 0.24);\n    }\n    \n    .pop-up-form {\n        position: fixed;\n        z-index: 1;\n        background-color: white;\n        width: 30%;\n        height: 30%;\n        display: flex;\n        flex-direction: column;\n    }\n    \n    .task-title {\n        margin: 5px;\n        height: 40px;\n        font-size: 40px;\n        border-radius: 10px;\n        background-color: lightgray;\n        border: 0px none;\n    }\n    \n    .task-title:focus {\n        outline: none !important;\n        border: 1px solid rebeccapurple;\n    }\n    \n    .dimmer {\n        background: #000;\n        opacity: 0.75;\n        position: fixed;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        z-index: 1;\n    }\n    \n    .disabled {\n        display: none;\n    }\n    \n    .add-task-to-list-button {\n        margin: auto 5px 5px 5px;\n    }\n    \n    .add-task-to-list-button:hover,\n    .add-button:hover {\n        background-color: rebeccapurple;\n        color: white;\n    }\n    \n    input[type=checkbox] {\n        visibility: hidden;\n    }\n    \n    .main {\n        position: relative;\n        padding-right: 30px;\n        cursor: pointer;\n    }\n    /* Hide the default checkbox */\n    \n    input[type=checkbox] {\n        visibility: hidden;\n    }\n    /* Creating a custom checkbox\n    based on demand */\n    \n    .geekmark {\n        position: absolute;\n        top: -3;\n        left: 0;\n        height: 25px;\n        width: 25px;\n        border-radius: 100px;\n        background-color: lightgray;\n    }\n    /* Specify the background color to be\n    shown when checkbox is checked */\n    /* Checkmark to be shown in checkbox */\n    /* It is not be shown when not checked */\n    \n    .geekmark:after {\n        content: \"\";\n        position: absolute;\n        display: none;\n    }\n    /* Display checkmark when checked */\n    \n    .main input:checked~.geekmark:after {\n        display: block;\n    }\n    /* Styling the checkmark using webkit */\n    /* Rotated the rectangle by 45 degree and \n    showing only two border to make it look\n    like a tickmark */\n    \n    .main .geekmark:after {\n        left: 8px;\n        bottom: 5px;\n        width: 6px;\n        height: 12px;\n        border: solid rebeccapurple;\n        border-width: 0 4px 4px 0;\n        -webkit-transform: rotate(45deg);\n        -ms-transform: rotate(45deg);\n        transform: rotate(45deg);\n    }", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"IAAI;QACI,SAAS;QACT,aAAa;QACb,uBAAuB;QACvB,mBAAmB;QACnB,YAAY;QACZ,WAAW;IACf;;IAEA;QACI,WAAW;QACX,YAAY;QACZ,aAAa;QACb,uBAAuB;IAC3B;;IAEA;QACI,YAAY;QACZ,aAAa;QACb,mBAAmB;IACvB;;IAEA;;QAEI,UAAU;QACV,WAAW;QACX,iBAAiB;QACjB,aAAa;QACb,mBAAmB;IACvB;;IAEA;QACI,+BAA+B;IACnC;;IAEA;;;QAGI,kBAAkB;QAClB,aAAa;QACb,mBAAmB;QACnB,kBAAkB;QAClB,iBAAiB;QACjB,8BAA8B;QAC9B,mBAAmB;QACnB,aAAa;QACb,mBAAmB;IACvB;;IAEA;QACI,yBAAyB;IAC7B;;IAEA;QACI,mBAAmB;QACnB,iBAAiB;QACjB,2BAA2B;IAC/B;;IAEA;;QAEI,gBAAgB;QAChB,mBAAmB;QACnB,0BAA0B;IAC9B;;IAEA;QACI,aAAa;QACb,sBAAsB;QACtB,mBAAmB;QACnB,YAAY;QACZ,mBAAmB;QACnB,sCAAsC;IAC1C;;IAEA;QACI,eAAe;QACf,UAAU;QACV,uBAAuB;QACvB,UAAU;QACV,WAAW;QACX,aAAa;QACb,sBAAsB;IAC1B;;IAEA;QACI,WAAW;QACX,YAAY;QACZ,eAAe;QACf,mBAAmB;QACnB,2BAA2B;QAC3B,gBAAgB;IACpB;;IAEA;QACI,wBAAwB;QACxB,+BAA+B;IACnC;;IAEA;QACI,gBAAgB;QAChB,aAAa;QACb,eAAe;QACf,MAAM;QACN,OAAO;QACP,WAAW;QACX,YAAY;QACZ,UAAU;IACd;;IAEA;QACI,aAAa;IACjB;;IAEA;QACI,wBAAwB;IAC5B;;IAEA;;QAEI,+BAA+B;QAC/B,YAAY;IAChB;;IAEA;QACI,kBAAkB;IACtB;;IAEA;QACI,kBAAkB;QAClB,mBAAmB;QACnB,eAAe;IACnB;IACA,8BAA8B;;IAE9B;QACI,kBAAkB;IACtB;IACA;qBACiB;;IAEjB;QACI,kBAAkB;QAClB,OAAO;QACP,OAAO;QACP,YAAY;QACZ,WAAW;QACX,oBAAoB;QACpB,2BAA2B;IAC/B;IACA;oCACgC;IAChC,sCAAsC;IACtC,wCAAwC;;IAExC;QACI,WAAW;QACX,kBAAkB;QAClB,aAAa;IACjB;IACA,mCAAmC;;IAEnC;QACI,cAAc;IAClB;IACA,uCAAuC;IACvC;;qBAEiB;;IAEjB;QACI,SAAS;QACT,WAAW;QACX,UAAU;QACV,YAAY;QACZ,2BAA2B;QAC3B,yBAAyB;QACzB,gCAAgC;QAChC,4BAA4B;QAC5B,wBAAwB;IAC5B","sourcesContent":["    body {\n        margin: 0;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        height: 100%;\n        width: 100%;\n    }\n    \n    .content {\n        width: 100%;\n        height: 100%;\n        display: flex;\n        justify-content: center;\n    }\n    \n    .main-div {\n        flex-grow: 8;\n        display: flex;\n        align-items: center;\n    }\n    \n    .list-div,\n    .list-info-div {\n        width: 20%;\n        height: 80%;\n        margin-left: 20px;\n        padding: 20px;\n        border-radius: 10px;\n    }\n    \n    .list-info-div {\n        background-color: rebeccapurple;\n    }\n    \n    .hover,\n    .list-item-div,\n    .list-item-selected {\n        border-radius: 5px;\n        padding: 10px;\n        border-style: solid;\n        border-radius: 1px;\n        border-width: 1px;\n        border-color: rgba(0, 0, 0, 0);\n        margin-bottom: 20px;\n        display: flex;\n        align-items: center;\n    }\n    \n    .hover {\n        background-color: #c9c9c9;\n    }\n    \n    .list-item-selected {\n        border-style: solid;\n        border-width: 3px;\n        border-color: rebeccapurple;\n    }\n    \n    .add-button,\n    .add-task-to-list-button {\n        margin-top: 30px;\n        border-radius: 30px;\n        padding: 5px 40px 5px 40px;\n    }\n    \n    .tool-bar {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        flex-grow: 1;\n        border-right: solid;\n        border-color: rgba(102, 51, 153, 0.24);\n    }\n    \n    .pop-up-form {\n        position: fixed;\n        z-index: 1;\n        background-color: white;\n        width: 30%;\n        height: 30%;\n        display: flex;\n        flex-direction: column;\n    }\n    \n    .task-title {\n        margin: 5px;\n        height: 40px;\n        font-size: 40px;\n        border-radius: 10px;\n        background-color: lightgray;\n        border: 0px none;\n    }\n    \n    .task-title:focus {\n        outline: none !important;\n        border: 1px solid rebeccapurple;\n    }\n    \n    .dimmer {\n        background: #000;\n        opacity: 0.75;\n        position: fixed;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        z-index: 1;\n    }\n    \n    .disabled {\n        display: none;\n    }\n    \n    .add-task-to-list-button {\n        margin: auto 5px 5px 5px;\n    }\n    \n    .add-task-to-list-button:hover,\n    .add-button:hover {\n        background-color: rebeccapurple;\n        color: white;\n    }\n    \n    input[type=checkbox] {\n        visibility: hidden;\n    }\n    \n    .main {\n        position: relative;\n        padding-right: 30px;\n        cursor: pointer;\n    }\n    /* Hide the default checkbox */\n    \n    input[type=checkbox] {\n        visibility: hidden;\n    }\n    /* Creating a custom checkbox\n    based on demand */\n    \n    .geekmark {\n        position: absolute;\n        top: -3;\n        left: 0;\n        height: 25px;\n        width: 25px;\n        border-radius: 100px;\n        background-color: lightgray;\n    }\n    /* Specify the background color to be\n    shown when checkbox is checked */\n    /* Checkmark to be shown in checkbox */\n    /* It is not be shown when not checked */\n    \n    .geekmark:after {\n        content: \"\";\n        position: absolute;\n        display: none;\n    }\n    /* Display checkmark when checked */\n    \n    .main input:checked~.geekmark:after {\n        display: block;\n    }\n    /* Styling the checkmark using webkit */\n    /* Rotated the rectangle by 45 degree and \n    showing only two border to make it look\n    like a tickmark */\n    \n    .main .geekmark:after {\n        left: 8px;\n        bottom: 5px;\n        width: 6px;\n        height: 12px;\n        border: solid rebeccapurple;\n        border-width: 0 4px 4px 0;\n        -webkit-transform: rotate(45deg);\n        -ms-transform: rotate(45deg);\n        transform: rotate(45deg);\n    }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/todoModel.js":
/*!**************************!*\
  !*** ./src/todoModel.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const todoListItemFactory = (title, description, dueDate, priority) => {
    const getTitle = () => { return title };
    const getDescription = () => { return description };
    const getdueDate = () => { return dueDate };
    const getpriority = () => { return priority };

    return { getTitle, getDescription, getdueDate, getpriority };
};

const todoModel = (() => {
    let todoList = [];

    const addTodoListItem = (title, description, dueDate, priority) => {
        todoList.push(todoListItemFactory(title, description, dueDate, priority));

    };

    const getTodoList = () => {
        return todoList;
    }

    const getTodoItem = (index) => {
        return todoList[index];
    }

    return { addTodoListItem, getTodoList, getTodoItem };
})();


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todoModel);

/***/ }),

/***/ "./src/todoView.js":
/*!*************************!*\
  !*** ./src/todoView.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


const todoView = (() => {
    const container = document.querySelector(".content");

    //creates popup
    const popUpForm = document.createElement("div");
    popUpForm.classList.add("pop-up-form", "disabled");



    const taskTitile = document.createElement("input");
    taskTitile.setAttribute("type", "text");
    taskTitile.classList.add("task-title");
    taskTitile.addEventListener("click", () => {
        taskTitile.select();
    });
    taskTitile.placeholder = "Task Title";
    popUpForm.appendChild(taskTitile);
    const addTaskToListButton = document.createElement("button");
    addTaskToListButton.textContent = "Add Task";
    addTaskToListButton.classList.add("add-task-to-list-button");
    popUpForm.appendChild(addTaskToListButton);

    //creates toolbar
    const toolBar = document.createElement("div");
    toolBar.classList.add("tool-bar");

    const addButton = document.createElement("button");
    addButton.classList.add("add-button");
    addButton.textContent = "Create a Task";

    toolBar.appendChild(addButton);

    const mainDiv = document.createElement("div");
    mainDiv.classList.add("main-div");

    const listDiv = document.createElement("div");
    listDiv.classList.add("list-div");

    mainDiv.appendChild(listDiv);
    container.appendChild(toolBar);
    container.appendChild(mainDiv);
    document.body.append(popUpForm);

    const displayTodoList = (todoList) => {
        while (listDiv.firstChild) {
            listDiv.removeChild(listDiv.firstChild);
        }
        let count = 0;
        for (let listItem of todoList) {
            const listItemDiv = document.createElement("div");
            const listItemTitle = document.createElement("h3");
            listItemTitle.textContent = listItem.getTitle();


            const checkBoxLabel = document.createElement('label');
            checkBoxLabel.classList.add('main');

            const checkboxSpan = document.createElement('span');
            checkboxSpan.classList.add('geekmark');

            const taskCheckBox = document.createElement("input");
            taskCheckBox.setAttribute("type", "checkbox");
            taskCheckBox.classList.add("task-checkbox");

            checkBoxLabel.appendChild(taskCheckBox);
            checkBoxLabel.appendChild(checkboxSpan);

            listItemDiv.appendChild(checkBoxLabel);


            listItemDiv.appendChild(listItemTitle);
            listDiv.appendChild(listItemDiv);
            listItemDiv.classList.add("list-item-div");
            listItemDiv.setAttribute('data', count);

            listItemDiv.addEventListener("mouseenter", function() {

                this.classList.toggle("hover");
            });
            listItemDiv.addEventListener("mouseleave", function() {

                this.classList.toggle("hover");
            });

            listItemDiv.addEventListener("click", function() {
                this.classList.toggle("list-item-selected");
            });
            count++;
        }

    };


    const displayToDoItemInfo = (todoListItem) => {


        if (document.querySelector('.list-info-div')) {

            mainDiv.removeChild(document.querySelector('.list-info-div'));
        }



        const listInfoDiv = document.createElement('div');
        listInfoDiv.classList.add('list-info-div');
        const listInfoTitle = document.createElement('h3');
        listInfoTitle.textContent = todoListItem.getTitle();
        listInfoDiv.appendChild(listInfoTitle);

        mainDiv.appendChild(listInfoDiv);
    }

    const displayPopUp = () => {
        container.classList.toggle("dimmer");
        popUpForm.classList.toggle("disabled");
        taskTitile.focus();
    };

    return { displayTodoList, displayPopUp, displayToDoItemInfo };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todoView);

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/*!*******************************!*\
  !*** ./src/todoController.js ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _todoModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoModel */ "./src/todoModel.js");
/* harmony import */ var _todoView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todoView */ "./src/todoView.js");




_todoView__WEBPACK_IMPORTED_MODULE_2__["default"].displayTodoList(_todoModel__WEBPACK_IMPORTED_MODULE_1__["default"].getTodoList());
let taskItems = document.querySelectorAll('.list-item-div');

const newTaskButton = document.querySelector('.add-button');
newTaskButton.addEventListener('click', _todoView__WEBPACK_IMPORTED_MODULE_2__["default"].displayPopUp);



const addTaskToListButton = document.querySelector('.add-task-to-list-button');


const addListners = () => {
    let taskItems = document.querySelectorAll('.list-item-div');
    let count = 0;
    for (let listItem of taskItems) {

        listItem.addEventListener("click", function() {
            _todoView__WEBPACK_IMPORTED_MODULE_2__["default"].displayToDoItemInfo(_todoModel__WEBPACK_IMPORTED_MODULE_1__["default"].getTodoItem(listItem.getAttribute('data')));
        });
        count++;
    }
}


addTaskToListButton.addEventListener('click', () => {

    if (document.querySelector('.task-title').value != '') {
        _todoModel__WEBPACK_IMPORTED_MODULE_1__["default"].addTodoListItem(document.querySelector('.task-title').value, 'dude', 'dude', 'dude');
        document.querySelector('.task-title').value = document.querySelector('.task-title').defaultValue;
        _todoView__WEBPACK_IMPORTED_MODULE_2__["default"].displayTodoList(_todoModel__WEBPACK_IMPORTED_MODULE_1__["default"].getTodoList());
        taskItems = document.querySelectorAll('.list-item-div');
        _todoView__WEBPACK_IMPORTED_MODULE_2__["default"].displayPopUp();
        addListners();
    }
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBR0E7O0FBRUE7QUFDQSxRQUFRLGtFQUF5QjtBQUNqQztBQUNBLFFBQVEsaUVBQXdCLENBQUMsOERBQXFCO0FBQ3REO0FBQ0EsUUFBUSw4REFBcUI7QUFDN0I7QUFDQTtBQUNBLENBQUMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kb01vZGVsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvVmlldy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG9Db250cm9sbGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiICAgIGJvZHkge1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuICAgIFxcbiAgICAuY29udGVudCB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgfVxcbiAgICBcXG4gICAgLm1haW4tZGl2IHtcXG4gICAgICAgIGZsZXgtZ3JvdzogODtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB9XFxuICAgIFxcbiAgICAubGlzdC1kaXYsXFxuICAgIC5saXN0LWluZm8tZGl2IHtcXG4gICAgICAgIHdpZHRoOiAyMCU7XFxuICAgICAgICBoZWlnaHQ6IDgwJTtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgICAgICAgcGFkZGluZzogMjBweDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIH1cXG4gICAgXFxuICAgIC5saXN0LWluZm8tZGl2IHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlYmVjY2FwdXJwbGU7XFxuICAgIH1cXG4gICAgXFxuICAgIC5ob3ZlcixcXG4gICAgLmxpc3QtaXRlbS1kaXYsXFxuICAgIC5saXN0LWl0ZW0tc2VsZWN0ZWQge1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgcGFkZGluZzogMTBweDtcXG4gICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxcHg7XFxuICAgICAgICBib3JkZXItd2lkdGg6IDFweDtcXG4gICAgICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgfVxcbiAgICBcXG4gICAgLmhvdmVyIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjOWM5Yzk7XFxuICAgIH1cXG4gICAgXFxuICAgIC5saXN0LWl0ZW0tc2VsZWN0ZWQge1xcbiAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgICAgIGJvcmRlci13aWR0aDogM3B4O1xcbiAgICAgICAgYm9yZGVyLWNvbG9yOiByZWJlY2NhcHVycGxlO1xcbiAgICB9XFxuICAgIFxcbiAgICAuYWRkLWJ1dHRvbixcXG4gICAgLmFkZC10YXNrLXRvLWxpc3QtYnV0dG9uIHtcXG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICAgICAgcGFkZGluZzogNXB4IDQwcHggNXB4IDQwcHg7XFxuICAgIH1cXG4gICAgXFxuICAgIC50b29sLWJhciB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBmbGV4LWdyb3c6IDE7XFxuICAgICAgICBib3JkZXItcmlnaHQ6IHNvbGlkO1xcbiAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDEwMiwgNTEsIDE1MywgMC4yNCk7XFxuICAgIH1cXG4gICAgXFxuICAgIC5wb3AtdXAtZm9ybSB7XFxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgICAgICB6LWluZGV4OiAxO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgICAgICB3aWR0aDogMzAlO1xcbiAgICAgICAgaGVpZ2h0OiAzMCU7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfVxcbiAgICBcXG4gICAgLnRhc2stdGl0bGUge1xcbiAgICAgICAgbWFyZ2luOiA1cHg7XFxuICAgICAgICBoZWlnaHQ6IDQwcHg7XFxuICAgICAgICBmb250LXNpemU6IDQwcHg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcbiAgICAgICAgYm9yZGVyOiAwcHggbm9uZTtcXG4gICAgfVxcbiAgICBcXG4gICAgLnRhc2stdGl0bGU6Zm9jdXMge1xcbiAgICAgICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmViZWNjYXB1cnBsZTtcXG4gICAgfVxcbiAgICBcXG4gICAgLmRpbW1lciB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwO1xcbiAgICAgICAgb3BhY2l0eTogMC43NTtcXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgICAgIHRvcDogMDtcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIHotaW5kZXg6IDE7XFxuICAgIH1cXG4gICAgXFxuICAgIC5kaXNhYmxlZCB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuICAgIFxcbiAgICAuYWRkLXRhc2stdG8tbGlzdC1idXR0b24ge1xcbiAgICAgICAgbWFyZ2luOiBhdXRvIDVweCA1cHggNXB4O1xcbiAgICB9XFxuICAgIFxcbiAgICAuYWRkLXRhc2stdG8tbGlzdC1idXR0b246aG92ZXIsXFxuICAgIC5hZGQtYnV0dG9uOmhvdmVyIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlYmVjY2FwdXJwbGU7XFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgIH1cXG4gICAgXFxuICAgIGlucHV0W3R5cGU9Y2hlY2tib3hdIHtcXG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgfVxcbiAgICBcXG4gICAgLm1haW4ge1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgcGFkZGluZy1yaWdodDogMzBweDtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgfVxcbiAgICAvKiBIaWRlIHRoZSBkZWZhdWx0IGNoZWNrYm94ICovXFxuICAgIFxcbiAgICBpbnB1dFt0eXBlPWNoZWNrYm94XSB7XFxuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIH1cXG4gICAgLyogQ3JlYXRpbmcgYSBjdXN0b20gY2hlY2tib3hcXG4gICAgYmFzZWQgb24gZGVtYW5kICovXFxuICAgIFxcbiAgICAuZ2Vla21hcmsge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgdG9wOiAtMztcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICBoZWlnaHQ6IDI1cHg7XFxuICAgICAgICB3aWR0aDogMjVweDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcbiAgICB9XFxuICAgIC8qIFNwZWNpZnkgdGhlIGJhY2tncm91bmQgY29sb3IgdG8gYmVcXG4gICAgc2hvd24gd2hlbiBjaGVja2JveCBpcyBjaGVja2VkICovXFxuICAgIC8qIENoZWNrbWFyayB0byBiZSBzaG93biBpbiBjaGVja2JveCAqL1xcbiAgICAvKiBJdCBpcyBub3QgYmUgc2hvd24gd2hlbiBub3QgY2hlY2tlZCAqL1xcbiAgICBcXG4gICAgLmdlZWttYXJrOmFmdGVyIHtcXG4gICAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcbiAgICAvKiBEaXNwbGF5IGNoZWNrbWFyayB3aGVuIGNoZWNrZWQgKi9cXG4gICAgXFxuICAgIC5tYWluIGlucHV0OmNoZWNrZWR+LmdlZWttYXJrOmFmdGVyIHtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB9XFxuICAgIC8qIFN0eWxpbmcgdGhlIGNoZWNrbWFyayB1c2luZyB3ZWJraXQgKi9cXG4gICAgLyogUm90YXRlZCB0aGUgcmVjdGFuZ2xlIGJ5IDQ1IGRlZ3JlZSBhbmQgXFxuICAgIHNob3dpbmcgb25seSB0d28gYm9yZGVyIHRvIG1ha2UgaXQgbG9va1xcbiAgICBsaWtlIGEgdGlja21hcmsgKi9cXG4gICAgXFxuICAgIC5tYWluIC5nZWVrbWFyazphZnRlciB7XFxuICAgICAgICBsZWZ0OiA4cHg7XFxuICAgICAgICBib3R0b206IDVweDtcXG4gICAgICAgIHdpZHRoOiA2cHg7XFxuICAgICAgICBoZWlnaHQ6IDEycHg7XFxuICAgICAgICBib3JkZXI6IHNvbGlkIHJlYmVjY2FwdXJwbGU7XFxuICAgICAgICBib3JkZXItd2lkdGg6IDAgNHB4IDRweCAwO1xcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICAgICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgICB9XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiSUFBSTtRQUNJLFNBQVM7UUFDVCxhQUFhO1FBQ2IsdUJBQXVCO1FBQ3ZCLG1CQUFtQjtRQUNuQixZQUFZO1FBQ1osV0FBVztJQUNmOztJQUVBO1FBQ0ksV0FBVztRQUNYLFlBQVk7UUFDWixhQUFhO1FBQ2IsdUJBQXVCO0lBQzNCOztJQUVBO1FBQ0ksWUFBWTtRQUNaLGFBQWE7UUFDYixtQkFBbUI7SUFDdkI7O0lBRUE7O1FBRUksVUFBVTtRQUNWLFdBQVc7UUFDWCxpQkFBaUI7UUFDakIsYUFBYTtRQUNiLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLCtCQUErQjtJQUNuQzs7SUFFQTs7O1FBR0ksa0JBQWtCO1FBQ2xCLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsa0JBQWtCO1FBQ2xCLGlCQUFpQjtRQUNqQiw4QkFBOEI7UUFDOUIsbUJBQW1CO1FBQ25CLGFBQWE7UUFDYixtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSx5QkFBeUI7SUFDN0I7O0lBRUE7UUFDSSxtQkFBbUI7UUFDbkIsaUJBQWlCO1FBQ2pCLDJCQUEyQjtJQUMvQjs7SUFFQTs7UUFFSSxnQkFBZ0I7UUFDaEIsbUJBQW1CO1FBQ25CLDBCQUEwQjtJQUM5Qjs7SUFFQTtRQUNJLGFBQWE7UUFDYixzQkFBc0I7UUFDdEIsbUJBQW1CO1FBQ25CLFlBQVk7UUFDWixtQkFBbUI7UUFDbkIsc0NBQXNDO0lBQzFDOztJQUVBO1FBQ0ksZUFBZTtRQUNmLFVBQVU7UUFDVix1QkFBdUI7UUFDdkIsVUFBVTtRQUNWLFdBQVc7UUFDWCxhQUFhO1FBQ2Isc0JBQXNCO0lBQzFCOztJQUVBO1FBQ0ksV0FBVztRQUNYLFlBQVk7UUFDWixlQUFlO1FBQ2YsbUJBQW1CO1FBQ25CLDJCQUEyQjtRQUMzQixnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSx3QkFBd0I7UUFDeEIsK0JBQStCO0lBQ25DOztJQUVBO1FBQ0ksZ0JBQWdCO1FBQ2hCLGFBQWE7UUFDYixlQUFlO1FBQ2YsTUFBTTtRQUNOLE9BQU87UUFDUCxXQUFXO1FBQ1gsWUFBWTtRQUNaLFVBQVU7SUFDZDs7SUFFQTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSx3QkFBd0I7SUFDNUI7O0lBRUE7O1FBRUksK0JBQStCO1FBQy9CLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxrQkFBa0I7UUFDbEIsbUJBQW1CO1FBQ25CLGVBQWU7SUFDbkI7SUFDQSw4QkFBOEI7O0lBRTlCO1FBQ0ksa0JBQWtCO0lBQ3RCO0lBQ0E7cUJBQ2lCOztJQUVqQjtRQUNJLGtCQUFrQjtRQUNsQixPQUFPO1FBQ1AsT0FBTztRQUNQLFlBQVk7UUFDWixXQUFXO1FBQ1gsb0JBQW9CO1FBQ3BCLDJCQUEyQjtJQUMvQjtJQUNBO29DQUNnQztJQUNoQyxzQ0FBc0M7SUFDdEMsd0NBQXdDOztJQUV4QztRQUNJLFdBQVc7UUFDWCxrQkFBa0I7UUFDbEIsYUFBYTtJQUNqQjtJQUNBLG1DQUFtQzs7SUFFbkM7UUFDSSxjQUFjO0lBQ2xCO0lBQ0EsdUNBQXVDO0lBQ3ZDOztxQkFFaUI7O0lBRWpCO1FBQ0ksU0FBUztRQUNULFdBQVc7UUFDWCxVQUFVO1FBQ1YsWUFBWTtRQUNaLDJCQUEyQjtRQUMzQix5QkFBeUI7UUFDekIsZ0NBQWdDO1FBQ2hDLDRCQUE0QjtRQUM1Qix3QkFBd0I7SUFDNUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiICAgIGJvZHkge1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuICAgIFxcbiAgICAuY29udGVudCB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgfVxcbiAgICBcXG4gICAgLm1haW4tZGl2IHtcXG4gICAgICAgIGZsZXgtZ3JvdzogODtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB9XFxuICAgIFxcbiAgICAubGlzdC1kaXYsXFxuICAgIC5saXN0LWluZm8tZGl2IHtcXG4gICAgICAgIHdpZHRoOiAyMCU7XFxuICAgICAgICBoZWlnaHQ6IDgwJTtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgICAgICAgcGFkZGluZzogMjBweDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIH1cXG4gICAgXFxuICAgIC5saXN0LWluZm8tZGl2IHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlYmVjY2FwdXJwbGU7XFxuICAgIH1cXG4gICAgXFxuICAgIC5ob3ZlcixcXG4gICAgLmxpc3QtaXRlbS1kaXYsXFxuICAgIC5saXN0LWl0ZW0tc2VsZWN0ZWQge1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgcGFkZGluZzogMTBweDtcXG4gICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxcHg7XFxuICAgICAgICBib3JkZXItd2lkdGg6IDFweDtcXG4gICAgICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgfVxcbiAgICBcXG4gICAgLmhvdmVyIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjOWM5Yzk7XFxuICAgIH1cXG4gICAgXFxuICAgIC5saXN0LWl0ZW0tc2VsZWN0ZWQge1xcbiAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgICAgIGJvcmRlci13aWR0aDogM3B4O1xcbiAgICAgICAgYm9yZGVyLWNvbG9yOiByZWJlY2NhcHVycGxlO1xcbiAgICB9XFxuICAgIFxcbiAgICAuYWRkLWJ1dHRvbixcXG4gICAgLmFkZC10YXNrLXRvLWxpc3QtYnV0dG9uIHtcXG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICAgICAgcGFkZGluZzogNXB4IDQwcHggNXB4IDQwcHg7XFxuICAgIH1cXG4gICAgXFxuICAgIC50b29sLWJhciB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBmbGV4LWdyb3c6IDE7XFxuICAgICAgICBib3JkZXItcmlnaHQ6IHNvbGlkO1xcbiAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDEwMiwgNTEsIDE1MywgMC4yNCk7XFxuICAgIH1cXG4gICAgXFxuICAgIC5wb3AtdXAtZm9ybSB7XFxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgICAgICB6LWluZGV4OiAxO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgICAgICB3aWR0aDogMzAlO1xcbiAgICAgICAgaGVpZ2h0OiAzMCU7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfVxcbiAgICBcXG4gICAgLnRhc2stdGl0bGUge1xcbiAgICAgICAgbWFyZ2luOiA1cHg7XFxuICAgICAgICBoZWlnaHQ6IDQwcHg7XFxuICAgICAgICBmb250LXNpemU6IDQwcHg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcbiAgICAgICAgYm9yZGVyOiAwcHggbm9uZTtcXG4gICAgfVxcbiAgICBcXG4gICAgLnRhc2stdGl0bGU6Zm9jdXMge1xcbiAgICAgICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmViZWNjYXB1cnBsZTtcXG4gICAgfVxcbiAgICBcXG4gICAgLmRpbW1lciB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwO1xcbiAgICAgICAgb3BhY2l0eTogMC43NTtcXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgICAgIHRvcDogMDtcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIHotaW5kZXg6IDE7XFxuICAgIH1cXG4gICAgXFxuICAgIC5kaXNhYmxlZCB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuICAgIFxcbiAgICAuYWRkLXRhc2stdG8tbGlzdC1idXR0b24ge1xcbiAgICAgICAgbWFyZ2luOiBhdXRvIDVweCA1cHggNXB4O1xcbiAgICB9XFxuICAgIFxcbiAgICAuYWRkLXRhc2stdG8tbGlzdC1idXR0b246aG92ZXIsXFxuICAgIC5hZGQtYnV0dG9uOmhvdmVyIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlYmVjY2FwdXJwbGU7XFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgIH1cXG4gICAgXFxuICAgIGlucHV0W3R5cGU9Y2hlY2tib3hdIHtcXG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgfVxcbiAgICBcXG4gICAgLm1haW4ge1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgcGFkZGluZy1yaWdodDogMzBweDtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgfVxcbiAgICAvKiBIaWRlIHRoZSBkZWZhdWx0IGNoZWNrYm94ICovXFxuICAgIFxcbiAgICBpbnB1dFt0eXBlPWNoZWNrYm94XSB7XFxuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIH1cXG4gICAgLyogQ3JlYXRpbmcgYSBjdXN0b20gY2hlY2tib3hcXG4gICAgYmFzZWQgb24gZGVtYW5kICovXFxuICAgIFxcbiAgICAuZ2Vla21hcmsge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgdG9wOiAtMztcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICBoZWlnaHQ6IDI1cHg7XFxuICAgICAgICB3aWR0aDogMjVweDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcbiAgICB9XFxuICAgIC8qIFNwZWNpZnkgdGhlIGJhY2tncm91bmQgY29sb3IgdG8gYmVcXG4gICAgc2hvd24gd2hlbiBjaGVja2JveCBpcyBjaGVja2VkICovXFxuICAgIC8qIENoZWNrbWFyayB0byBiZSBzaG93biBpbiBjaGVja2JveCAqL1xcbiAgICAvKiBJdCBpcyBub3QgYmUgc2hvd24gd2hlbiBub3QgY2hlY2tlZCAqL1xcbiAgICBcXG4gICAgLmdlZWttYXJrOmFmdGVyIHtcXG4gICAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcbiAgICAvKiBEaXNwbGF5IGNoZWNrbWFyayB3aGVuIGNoZWNrZWQgKi9cXG4gICAgXFxuICAgIC5tYWluIGlucHV0OmNoZWNrZWR+LmdlZWttYXJrOmFmdGVyIHtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB9XFxuICAgIC8qIFN0eWxpbmcgdGhlIGNoZWNrbWFyayB1c2luZyB3ZWJraXQgKi9cXG4gICAgLyogUm90YXRlZCB0aGUgcmVjdGFuZ2xlIGJ5IDQ1IGRlZ3JlZSBhbmQgXFxuICAgIHNob3dpbmcgb25seSB0d28gYm9yZGVyIHRvIG1ha2UgaXQgbG9va1xcbiAgICBsaWtlIGEgdGlja21hcmsgKi9cXG4gICAgXFxuICAgIC5tYWluIC5nZWVrbWFyazphZnRlciB7XFxuICAgICAgICBsZWZ0OiA4cHg7XFxuICAgICAgICBib3R0b206IDVweDtcXG4gICAgICAgIHdpZHRoOiA2cHg7XFxuICAgICAgICBoZWlnaHQ6IDEycHg7XFxuICAgICAgICBib3JkZXI6IHNvbGlkIHJlYmVjY2FwdXJwbGU7XFxuICAgICAgICBib3JkZXItd2lkdGg6IDAgNHB4IDRweCAwO1xcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICAgICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgICB9XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCB0b2RvTGlzdEl0ZW1GYWN0b3J5ID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpID0+IHtcbiAgICBjb25zdCBnZXRUaXRsZSA9ICgpID0+IHsgcmV0dXJuIHRpdGxlIH07XG4gICAgY29uc3QgZ2V0RGVzY3JpcHRpb24gPSAoKSA9PiB7IHJldHVybiBkZXNjcmlwdGlvbiB9O1xuICAgIGNvbnN0IGdldGR1ZURhdGUgPSAoKSA9PiB7IHJldHVybiBkdWVEYXRlIH07XG4gICAgY29uc3QgZ2V0cHJpb3JpdHkgPSAoKSA9PiB7IHJldHVybiBwcmlvcml0eSB9O1xuXG4gICAgcmV0dXJuIHsgZ2V0VGl0bGUsIGdldERlc2NyaXB0aW9uLCBnZXRkdWVEYXRlLCBnZXRwcmlvcml0eSB9O1xufTtcblxuY29uc3QgdG9kb01vZGVsID0gKCgpID0+IHtcbiAgICBsZXQgdG9kb0xpc3QgPSBbXTtcblxuICAgIGNvbnN0IGFkZFRvZG9MaXN0SXRlbSA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSA9PiB7XG4gICAgICAgIHRvZG9MaXN0LnB1c2godG9kb0xpc3RJdGVtRmFjdG9yeSh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSk7XG5cbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0VG9kb0xpc3QgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiB0b2RvTGlzdDtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRUb2RvSXRlbSA9IChpbmRleCkgPT4ge1xuICAgICAgICByZXR1cm4gdG9kb0xpc3RbaW5kZXhdO1xuICAgIH1cblxuICAgIHJldHVybiB7IGFkZFRvZG9MaXN0SXRlbSwgZ2V0VG9kb0xpc3QsIGdldFRvZG9JdGVtIH07XG59KSgpO1xuXG5cbmV4cG9ydCBkZWZhdWx0IHRvZG9Nb2RlbDsiLCJpbXBvcnQgeyBhZGQgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcblxuY29uc3QgdG9kb1ZpZXcgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcblxuICAgIC8vY3JlYXRlcyBwb3B1cFxuICAgIGNvbnN0IHBvcFVwRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcG9wVXBGb3JtLmNsYXNzTGlzdC5hZGQoXCJwb3AtdXAtZm9ybVwiLCBcImRpc2FibGVkXCIpO1xuXG5cblxuICAgIGNvbnN0IHRhc2tUaXRpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgdGFza1RpdGlsZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICB0YXNrVGl0aWxlLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLXRpdGxlXCIpO1xuICAgIHRhc2tUaXRpbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgdGFza1RpdGlsZS5zZWxlY3QoKTtcbiAgICB9KTtcbiAgICB0YXNrVGl0aWxlLnBsYWNlaG9sZGVyID0gXCJUYXNrIFRpdGxlXCI7XG4gICAgcG9wVXBGb3JtLmFwcGVuZENoaWxkKHRhc2tUaXRpbGUpO1xuICAgIGNvbnN0IGFkZFRhc2tUb0xpc3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGFkZFRhc2tUb0xpc3RCdXR0b24udGV4dENvbnRlbnQgPSBcIkFkZCBUYXNrXCI7XG4gICAgYWRkVGFza1RvTGlzdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWRkLXRhc2stdG8tbGlzdC1idXR0b25cIik7XG4gICAgcG9wVXBGb3JtLmFwcGVuZENoaWxkKGFkZFRhc2tUb0xpc3RCdXR0b24pO1xuXG4gICAgLy9jcmVhdGVzIHRvb2xiYXJcbiAgICBjb25zdCB0b29sQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0b29sQmFyLmNsYXNzTGlzdC5hZGQoXCJ0b29sLWJhclwiKTtcblxuICAgIGNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYWRkQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhZGQtYnV0dG9uXCIpO1xuICAgIGFkZEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ3JlYXRlIGEgVGFza1wiO1xuXG4gICAgdG9vbEJhci5hcHBlbmRDaGlsZChhZGRCdXR0b24pO1xuXG4gICAgY29uc3QgbWFpbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWFpbkRpdi5jbGFzc0xpc3QuYWRkKFwibWFpbi1kaXZcIik7XG5cbiAgICBjb25zdCBsaXN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsaXN0RGl2LmNsYXNzTGlzdC5hZGQoXCJsaXN0LWRpdlwiKTtcblxuICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQobGlzdERpdik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRvb2xCYXIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluRGl2KTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChwb3BVcEZvcm0pO1xuXG4gICAgY29uc3QgZGlzcGxheVRvZG9MaXN0ID0gKHRvZG9MaXN0KSA9PiB7XG4gICAgICAgIHdoaWxlIChsaXN0RGl2LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIGxpc3REaXYucmVtb3ZlQ2hpbGQobGlzdERpdi5maXJzdENoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgY291bnQgPSAwO1xuICAgICAgICBmb3IgKGxldCBsaXN0SXRlbSBvZiB0b2RvTGlzdCkge1xuICAgICAgICAgICAgY29uc3QgbGlzdEl0ZW1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgY29uc3QgbGlzdEl0ZW1UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICAgICAgICAgIGxpc3RJdGVtVGl0bGUudGV4dENvbnRlbnQgPSBsaXN0SXRlbS5nZXRUaXRsZSgpO1xuXG5cbiAgICAgICAgICAgIGNvbnN0IGNoZWNrQm94TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgY2hlY2tCb3hMYWJlbC5jbGFzc0xpc3QuYWRkKCdtYWluJyk7XG5cbiAgICAgICAgICAgIGNvbnN0IGNoZWNrYm94U3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIGNoZWNrYm94U3Bhbi5jbGFzc0xpc3QuYWRkKCdnZWVrbWFyaycpO1xuXG4gICAgICAgICAgICBjb25zdCB0YXNrQ2hlY2tCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgICAgICB0YXNrQ2hlY2tCb3guc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xuICAgICAgICAgICAgdGFza0NoZWNrQm94LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWNoZWNrYm94XCIpO1xuXG4gICAgICAgICAgICBjaGVja0JveExhYmVsLmFwcGVuZENoaWxkKHRhc2tDaGVja0JveCk7XG4gICAgICAgICAgICBjaGVja0JveExhYmVsLmFwcGVuZENoaWxkKGNoZWNrYm94U3Bhbik7XG5cbiAgICAgICAgICAgIGxpc3RJdGVtRGl2LmFwcGVuZENoaWxkKGNoZWNrQm94TGFiZWwpO1xuXG5cbiAgICAgICAgICAgIGxpc3RJdGVtRGl2LmFwcGVuZENoaWxkKGxpc3RJdGVtVGl0bGUpO1xuICAgICAgICAgICAgbGlzdERpdi5hcHBlbmRDaGlsZChsaXN0SXRlbURpdik7XG4gICAgICAgICAgICBsaXN0SXRlbURpdi5jbGFzc0xpc3QuYWRkKFwibGlzdC1pdGVtLWRpdlwiKTtcbiAgICAgICAgICAgIGxpc3RJdGVtRGl2LnNldEF0dHJpYnV0ZSgnZGF0YScsIGNvdW50KTtcblxuICAgICAgICAgICAgbGlzdEl0ZW1EaXYuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmNsYXNzTGlzdC50b2dnbGUoXCJob3ZlclwiKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbGlzdEl0ZW1EaXYuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmNsYXNzTGlzdC50b2dnbGUoXCJob3ZlclwiKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBsaXN0SXRlbURpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKFwibGlzdC1pdGVtLXNlbGVjdGVkXCIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG5cbiAgICBjb25zdCBkaXNwbGF5VG9Eb0l0ZW1JbmZvID0gKHRvZG9MaXN0SXRlbSkgPT4ge1xuXG5cbiAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0LWluZm8tZGl2JykpIHtcblxuICAgICAgICAgICAgbWFpbkRpdi5yZW1vdmVDaGlsZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdC1pbmZvLWRpdicpKTtcbiAgICAgICAgfVxuXG5cblxuICAgICAgICBjb25zdCBsaXN0SW5mb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsaXN0SW5mb0Rpdi5jbGFzc0xpc3QuYWRkKCdsaXN0LWluZm8tZGl2Jyk7XG4gICAgICAgIGNvbnN0IGxpc3RJbmZvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICBsaXN0SW5mb1RpdGxlLnRleHRDb250ZW50ID0gdG9kb0xpc3RJdGVtLmdldFRpdGxlKCk7XG4gICAgICAgIGxpc3RJbmZvRGl2LmFwcGVuZENoaWxkKGxpc3RJbmZvVGl0bGUpO1xuXG4gICAgICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQobGlzdEluZm9EaXYpO1xuICAgIH1cblxuICAgIGNvbnN0IGRpc3BsYXlQb3BVcCA9ICgpID0+IHtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoXCJkaW1tZXJcIik7XG4gICAgICAgIHBvcFVwRm9ybS5jbGFzc0xpc3QudG9nZ2xlKFwiZGlzYWJsZWRcIik7XG4gICAgICAgIHRhc2tUaXRpbGUuZm9jdXMoKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHsgZGlzcGxheVRvZG9MaXN0LCBkaXNwbGF5UG9wVXAsIGRpc3BsYXlUb0RvSXRlbUluZm8gfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHRvZG9WaWV3OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJ1xuaW1wb3J0IHRvZG9Nb2RlbCBmcm9tICcuL3RvZG9Nb2RlbCc7XG5pbXBvcnQgdG9kb1ZpZXcgZnJvbSAnLi90b2RvVmlldyc7XG5cbnRvZG9WaWV3LmRpc3BsYXlUb2RvTGlzdCh0b2RvTW9kZWwuZ2V0VG9kb0xpc3QoKSk7XG5sZXQgdGFza0l0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpc3QtaXRlbS1kaXYnKTtcblxuY29uc3QgbmV3VGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtYnV0dG9uJyk7XG5uZXdUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9kb1ZpZXcuZGlzcGxheVBvcFVwKTtcblxuXG5cbmNvbnN0IGFkZFRhc2tUb0xpc3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2stdG8tbGlzdC1idXR0b24nKTtcblxuXG5jb25zdCBhZGRMaXN0bmVycyA9ICgpID0+IHtcbiAgICBsZXQgdGFza0l0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpc3QtaXRlbS1kaXYnKTtcbiAgICBsZXQgY291bnQgPSAwO1xuICAgIGZvciAobGV0IGxpc3RJdGVtIG9mIHRhc2tJdGVtcykge1xuXG4gICAgICAgIGxpc3RJdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRvZG9WaWV3LmRpc3BsYXlUb0RvSXRlbUluZm8odG9kb01vZGVsLmdldFRvZG9JdGVtKGxpc3RJdGVtLmdldEF0dHJpYnV0ZSgnZGF0YScpKSk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb3VudCsrO1xuICAgIH1cbn1cblxuXG5hZGRUYXNrVG9MaXN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLXRpdGxlJykudmFsdWUgIT0gJycpIHtcbiAgICAgICAgdG9kb01vZGVsLmFkZFRvZG9MaXN0SXRlbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay10aXRsZScpLnZhbHVlLCAnZHVkZScsICdkdWRlJywgJ2R1ZGUnKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stdGl0bGUnKS52YWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLXRpdGxlJykuZGVmYXVsdFZhbHVlO1xuICAgICAgICB0b2RvVmlldy5kaXNwbGF5VG9kb0xpc3QodG9kb01vZGVsLmdldFRvZG9MaXN0KCkpO1xuICAgICAgICB0YXNrSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlzdC1pdGVtLWRpdicpO1xuICAgICAgICB0b2RvVmlldy5kaXNwbGF5UG9wVXAoKTtcbiAgICAgICAgYWRkTGlzdG5lcnMoKTtcbiAgICB9XG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=