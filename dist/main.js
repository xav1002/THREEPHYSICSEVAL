/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/animate.js":
/*!************************!*\
  !*** ./src/animate.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constructor */ \"./src/constructor.js\");\n/* harmony import */ var _moveCamera__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moveCamera */ \"./src/moveCamera.js\");\n\n\n\n\n\n/**\n * this is the animate function, called to interate new frames\n * also calls the moveCamera function\n */\n\nvar prevTime = performance.now();\n\nfunction animate() {\n    requestAnimationFrame(function() {\n        animate();\n    });\n\n    var time = performance.now();\n    var delta = (time - prevTime) / 1000;\n    // console.log(delta);\n\n    prevTime = time;\n\n    Object(_moveCamera__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(delta);\n\n    _constructor__WEBPACK_IMPORTED_MODULE_0__[\"renderer\"].render(_constructor__WEBPACK_IMPORTED_MODULE_0__[\"scene\"], _constructor__WEBPACK_IMPORTED_MODULE_0__[\"camera\"]);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (animate);\n\n//# sourceURL=webpack:///./src/animate.js?");

/***/ }),

/***/ "./src/constructor.js":
/*!****************************!*\
  !*** ./src/constructor.js ***!
  \****************************/
/*! exports provided: scene, renderer, controls, camera, ambient, objects, origin, velocity, direction, w, s, a, d, up, down */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"scene\", function() { return scene; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderer\", function() { return renderer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"controls\", function() { return controls; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"camera\", function() { return camera; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ambient\", function() { return ambient; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"objects\", function() { return objects; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"origin\", function() { return origin; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"velocity\", function() { return velocity; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"direction\", function() { return direction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"w\", function() { return w; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"s\", function() { return s; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return a; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"d\", function() { return d; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"up\", function() { return up; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"down\", function() { return down; });\nvar scene = new THREE.Scene();\nvar camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);\n\nvar renderer = new THREE.WebGLRenderer(scene, camera);\nrenderer.setSize(window.innerWidth, window.innerHeight);\nrenderer.setClearColor('rgb(100, 100, 300)');\ndocument.body.appendChild(renderer.domElement);\n\n\nvar controls = new THREE.PointerLockControls(camera);\n\n\nvar ambient = new THREE.AmbientLight(0xffffff);\n\nvar objects = [];\n\nfor(var i = 0; i < 6; i += 1) {\n    objects.push(\n        new THREE.Mesh(new THREE.SphereGeometry(Math.random() * 10, 50, 50), new THREE.MeshPhongMaterial())\n    );\n\n    objects[i].position.set((100 * Math.random()) - 50, (100 * Math.random()) - 50, (100 * Math.random()) - 50);\n}\n\n\n\nvar origin = new THREE.Mesh( new THREE.BoxGeometry(10, 10, 10), new THREE.MeshPhongMaterial({color: 'purple'}));\n\nvar velocity = new THREE.Vector3();\nvar direction = new THREE.Vector3();\n\nvar w = false;\nvar s = false;\nvar a = false;\nvar d = false;\nvar up = false;\nvar down = false;\n\nwindow.addEventListener('keydown', function(e) {\n    switch( e.keyCode ) {\n        case 81:\n            controls.lock();\n            break;\n\n        case 69:\n            controls.unlock();\n            break;\n\n        case 87:\n            w = true;\n            break;\n\n        case 83:\n            s = true;\n            break;\n\n        case 65:\n            a = true;\n            break;\n\n        case 68:\n            d = true;\n            break;\n\n        case 32:\n            up = true;\n            break;\n\n        case 16:\n            down = true;\n            break;\n    }\n});\n\nwindow.addEventListener('keyup', function(e) {\n    switch( e.keyCode ) {\n        case 87:\n            w = false;\n            break;\n\n        case 83:\n            s = false;\n            break;\n\n        case 65:\n            a = false;\n            break;\n\n        case 68:\n            d = false;\n            break;\n\n        case 32:\n            up = false;\n            break;\n\n        case 16:\n            down = false;\n            break;\n    }\n});\n\n\n\n//# sourceURL=webpack:///./src/constructor.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constructor */ \"./src/constructor.js\");\n/* harmony import */ var _animate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animate */ \"./src/animate.js\");\n\n\n\n\n\n\n\n\n\n/**\n * used to initiate the scene, and add all the parts\n */\n\nfunction init() {\n    _constructor__WEBPACK_IMPORTED_MODULE_0__[\"scene\"].add(_constructor__WEBPACK_IMPORTED_MODULE_0__[\"ambient\"]);\n\n    _constructor__WEBPACK_IMPORTED_MODULE_0__[\"scene\"].add(_constructor__WEBPACK_IMPORTED_MODULE_0__[\"controls\"].getObject());\n\n    _constructor__WEBPACK_IMPORTED_MODULE_0__[\"scene\"].add(_constructor__WEBPACK_IMPORTED_MODULE_0__[\"origin\"]);\n\n    _constructor__WEBPACK_IMPORTED_MODULE_0__[\"objects\"].forEach(object => {\n        _constructor__WEBPACK_IMPORTED_MODULE_0__[\"scene\"].add(object);\n    });\n\n    Object(_animate__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n}\n\ninit();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moveCamera.js":
/*!***************************!*\
  !*** ./src/moveCamera.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constructor */ \"./src/constructor.js\");\n\n\n\n\n\n/**\n * \n * @param {number} delta; this time helps make the translation of the camera more smooth\n * this funciton moves the camera\n * based on the direction and magnitude of the camera's motion\n */\n\nfunction moveCamera(delta) {\n    _constructor__WEBPACK_IMPORTED_MODULE_0__[\"velocity\"].x -= _constructor__WEBPACK_IMPORTED_MODULE_0__[\"velocity\"].x * 7.5 * delta;\n    _constructor__WEBPACK_IMPORTED_MODULE_0__[\"velocity\"].y -= _constructor__WEBPACK_IMPORTED_MODULE_0__[\"velocity\"].y * 7.5 * delta;\n    _constructor__WEBPACK_IMPORTED_MODULE_0__[\"velocity\"].z -= _constructor__WEBPACK_IMPORTED_MODULE_0__[\"velocity\"].z * 7.5 * delta;\n\n    _constructor__WEBPACK_IMPORTED_MODULE_0__[\"direction\"].z = Number(_constructor__WEBPACK_IMPORTED_MODULE_0__[\"w\"]) - Number(_constructor__WEBPACK_IMPORTED_MODULE_0__[\"s\"]);\n    _constructor__WEBPACK_IMPORTED_MODULE_0__[\"direction\"].x = Number(_constructor__WEBPACK_IMPORTED_MODULE_0__[\"a\"]) - Number(_constructor__WEBPACK_IMPORTED_MODULE_0__[\"d\"]);\n    _constructor__WEBPACK_IMPORTED_MODULE_0__[\"direction\"].y = Number(_constructor__WEBPACK_IMPORTED_MODULE_0__[\"up\"]) - Number(_constructor__WEBPACK_IMPORTED_MODULE_0__[\"down\"]);\n    _constructor__WEBPACK_IMPORTED_MODULE_0__[\"direction\"].normalize();\n\n    // console.log(direction.z, direction.x, direction.y);\n\n    if(_constructor__WEBPACK_IMPORTED_MODULE_0__[\"w\"] || _constructor__WEBPACK_IMPORTED_MODULE_0__[\"s\"]) {\n        _constructor__WEBPACK_IMPORTED_MODULE_0__[\"velocity\"].z -= _constructor__WEBPACK_IMPORTED_MODULE_0__[\"direction\"].z * 4000 * delta;\n    }\n    if(_constructor__WEBPACK_IMPORTED_MODULE_0__[\"a\"] || _constructor__WEBPACK_IMPORTED_MODULE_0__[\"d\"]) {\n        _constructor__WEBPACK_IMPORTED_MODULE_0__[\"velocity\"].x -= _constructor__WEBPACK_IMPORTED_MODULE_0__[\"direction\"].x * 4000 * delta;\n    }\n    if(_constructor__WEBPACK_IMPORTED_MODULE_0__[\"up\"] || _constructor__WEBPACK_IMPORTED_MODULE_0__[\"down\"]) {\n        _constructor__WEBPACK_IMPORTED_MODULE_0__[\"velocity\"].y += _constructor__WEBPACK_IMPORTED_MODULE_0__[\"direction\"].y * 4000 * delta;\n    }\n\n    _constructor__WEBPACK_IMPORTED_MODULE_0__[\"controls\"].getObject().translateX(_constructor__WEBPACK_IMPORTED_MODULE_0__[\"velocity\"].x * delta);\n    _constructor__WEBPACK_IMPORTED_MODULE_0__[\"controls\"].getObject().translateY(_constructor__WEBPACK_IMPORTED_MODULE_0__[\"velocity\"].y * delta);\n    _constructor__WEBPACK_IMPORTED_MODULE_0__[\"controls\"].getObject().translateZ(_constructor__WEBPACK_IMPORTED_MODULE_0__[\"velocity\"].z * delta);\n\n    // console.log(delta, controls.getObject().position);\n    // console.log(w,a,s,d,up,down);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (moveCamera);\n\n//# sourceURL=webpack:///./src/moveCamera.js?");

/***/ })

/******/ });