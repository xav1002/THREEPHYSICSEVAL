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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _graphicsConstructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./graphicsConstructor */ \"./src/graphicsConstructor.js\");\n/* harmony import */ var _physics_physicsConstructor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./physics/physicsConstructor */ \"./src/physics/physicsConstructor.js\");\n/* harmony import */ var _moveCamera__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./moveCamera */ \"./src/moveCamera.js\");\n/* harmony import */ var _physics_updatePhysics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./physics/updatePhysics */ \"./src/physics/updatePhysics.js\");\n/* harmony import */ var _physics_createObjects_createOrigin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./physics/createObjects/createOrigin */ \"./src/physics/createObjects/createOrigin.js\");\n\n\n\n\n\n\n\n\n\n/**\n * this is the animate function, called to interate new frames\n * also calls the moveCamera function\n */\n\nvar prevTime = performance.now();\n\nfunction animate() {\n    requestAnimationFrame(function() {\n        animate();\n    });\n\n    var time = performance.now();\n    var delta = (time - prevTime) / 1000;\n    \n    var deltaTime = _physics_physicsConstructor__WEBPACK_IMPORTED_MODULE_1__[\"clock\"].getDelta();\n    Object(_physics_updatePhysics__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(deltaTime);\n\n    prevTime = time;\n\n    Object(_moveCamera__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(delta);\n\n    _graphicsConstructor__WEBPACK_IMPORTED_MODULE_0__[\"renderer\"].render(_graphicsConstructor__WEBPACK_IMPORTED_MODULE_0__[\"scene\"], _graphicsConstructor__WEBPACK_IMPORTED_MODULE_0__[\"camera\"]);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (animate);\n\n//# sourceURL=webpack:///./src/animate.js?");

/***/ }),

/***/ "./src/graphicsConstructor.js":
/*!************************************!*\
  !*** ./src/graphicsConstructor.js ***!
  \************************************/
/*! exports provided: scene, renderer, controls, camera, ambient, velocity, direction, w, s, a, d, up, down, xP, xN, yP, yN, zP, zN, axisX, axisZ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"scene\", function() { return scene; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderer\", function() { return renderer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"controls\", function() { return controls; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"camera\", function() { return camera; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ambient\", function() { return ambient; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"velocity\", function() { return velocity; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"direction\", function() { return direction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"w\", function() { return w; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"s\", function() { return s; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return a; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"d\", function() { return d; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"up\", function() { return up; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"down\", function() { return down; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"xP\", function() { return xP; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"xN\", function() { return xN; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"yP\", function() { return yP; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"yN\", function() { return yN; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"zP\", function() { return zP; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"zN\", function() { return zN; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"axisX\", function() { return axisX; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"axisZ\", function() { return axisZ; });\n/**\n * this file is used to initiate most of the variables and objects used in the project\n */\n\nvar scene = new THREE.Scene();\nvar camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);\n\nvar renderer = new THREE.WebGLRenderer({antialias: true});\nrenderer.setSize(window.innerWidth, window.innerHeight);\nrenderer.setClearColor('rgb(100, 100, 300)');\ndocument.body.appendChild(renderer.domElement);\n\n\nvar controls = new THREE.PointerLockControls(camera);\n\n\nvar ambient = new THREE.AmbientLight(0xffffff);\n\n// var objects = [];\n\n// for(var i = 0; i < 6; i += 1) {\n//     objects.push(\n//         new THREE.Mesh(new THREE.SphereGeometry(Math.random() * 10, 50, 50), new THREE.MeshPhongMaterial({color: `rgb(${Math.ceil(Math.random() * 100)}, ${Math.ceil(Math.random() * 100)}, ${Math.ceil(Math.random() * 100)})`}))\n//     );\n\n//     objects[i].position.set((100 * Math.random()) - 50, (100 * Math.random()) - 50, (100 * Math.random()) - 50);\n// }\n\n// export {objects};\n\n// export var origin = new THREE.Mesh( new THREE.BoxGeometry(10, 10, 10), new THREE.MeshPhongMaterial({color: 'purple'}));\n\nvar velocity = new THREE.Vector3();\nvar direction = new THREE.Vector3();\n\nvar w = false;\nvar s = false;\nvar a = false;\nvar d = false;\nvar up = false;\nvar down = false;\n\nvar xP = false;\nvar xN = false;\nvar yP = false;\nvar yN = false;\nvar zP = false;\nvar zN = false;\n\nvar axisX = 0;\nvar axisZ = 0;\n\nwindow.addEventListener('keydown', function(e) {\n    switch( e.keyCode ) {\n        case 81:\n            controls.lock();\n            break;\n\n        case 69:\n            controls.unlock();\n            break;\n\n        case 87:\n            w = true;\n            break;\n\n        case 83:\n            s = true;\n            break;\n\n        case 65:\n            a = true;\n            break;\n\n        case 68:\n            d = true;\n            break;\n\n        case 32:\n            up = true;\n            break;\n\n        case 16:\n            down = true;\n            break;\n\n        case 89:\n            xP = true;\n            axisZ = 0.05;\n            break;\n\n        case 85:\n            xN = true;\n            axisZ = -0.05;\n            break;\n\n        case 72:\n            zP = true;\n            axisX = 0.05;\n            break;\n\n        case 74:\n            zN = true;\n            axisX = -0.05;\n            break;\n\n        case 78:\n            yP = true;\n            break;\n\n        case 77:\n            yN = true;\n            break;\n    }\n});\n\nwindow.addEventListener('keyup', function(e) {\n    switch( e.keyCode ) {\n        case 87:\n            w = false;\n            break;\n\n        case 83:\n            s = false;\n            break;\n\n        case 65:\n            a = false;\n            break;\n\n        case 68:\n            d = false;\n            break;\n\n        case 32:\n            up = false;\n            break;\n\n        case 16:\n            down = false;\n            break;\n\n        case 89:\n            xP = false;\n            axisZ = 0;\n            break;\n    \n        case 85:\n            xN = false;\n            axisZ = 0;\n            break;\n\n        case 72:\n            zP = false;\n            axisX = 0;\n            break;\n\n        case 74:\n            zN = false;\n            axisX = 0;\n            break;\n\n        case 78:\n            yP = false;\n            break;\n\n        case 77:\n            yN = false;\n            break;\n    }\n});\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/graphicsConstructor.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init */ \"./src/init.js\");\n\nObject(_init__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/init.js":
/*!*********************!*\
  !*** ./src/init.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _graphicsConstructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./graphicsConstructor */ \"./src/graphicsConstructor.js\");\n/* harmony import */ var _animate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animate */ \"./src/animate.js\");\n/* harmony import */ var _physics_initiatePhysics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./physics/initiatePhysics */ \"./src/physics/initiatePhysics.js\");\n/* harmony import */ var _physics_createObjects_createBall__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./physics/createObjects/createBall */ \"./src/physics/createObjects/createBall.js\");\n/* harmony import */ var _physics_createObjects_createMap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./physics/createObjects/createMap */ \"./src/physics/createObjects/createMap.js\");\n/* harmony import */ var _physics_physicsConstructor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./physics/physicsConstructor */ \"./src/physics/physicsConstructor.js\");\n/* harmony import */ var _physics_createObjects_createOrigin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./physics/createObjects/createOrigin */ \"./src/physics/createObjects/createOrigin.js\");\n/* harmony import */ var _physics_repulsion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./physics/repulsion */ \"./src/physics/repulsion.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n/**\n * used to initiate the scene, and add all the parts\n */\n\nfunction init() {\n    _graphicsConstructor__WEBPACK_IMPORTED_MODULE_0__[\"scene\"].add(_graphicsConstructor__WEBPACK_IMPORTED_MODULE_0__[\"ambient\"]);\n\n    _graphicsConstructor__WEBPACK_IMPORTED_MODULE_0__[\"controls\"].getObject().position.set(0, 0, 100);\n    _graphicsConstructor__WEBPACK_IMPORTED_MODULE_0__[\"scene\"].add(_graphicsConstructor__WEBPACK_IMPORTED_MODULE_0__[\"controls\"].getObject());\n\n    Object(_physics_initiatePhysics__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n    Object(_physics_createObjects_createMap__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_physics_physicsConstructor__WEBPACK_IMPORTED_MODULE_5__[\"map\"]);\n    Object(_physics_createObjects_createOrigin__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n\n    var startingPosition = 100;\n\n    for(var i = 0; i < 6; i += 1) {\n        var location = new THREE.Vector3((Math.random() * startingPosition) - (startingPosition / 2), (Math.random() * startingPosition) - (startingPosition / 2), (Math.random() * startingPosition) - (startingPosition / 2));\n        Object(_physics_createObjects_createBall__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Math.random() * 10, location);\n    }\n\n    console.log(_physics_createObjects_createOrigin__WEBPACK_IMPORTED_MODULE_6__[\"origin\"]);\n\n    window.addEventListener('keydown', function(e) {\n        if(e.keyCode === 67) {\n            _physics_createObjects_createOrigin__WEBPACK_IMPORTED_MODULE_6__[\"origin\"].body.activate(true);\n            _physics_createObjects_createOrigin__WEBPACK_IMPORTED_MODULE_6__[\"origin\"].body.applyImpulse(100, new Ammo.btTransform(0, 0, 1));\n            this.console.log(_physics_createObjects_createOrigin__WEBPACK_IMPORTED_MODULE_6__[\"origin\"].body, _physics_createObjects_createOrigin__WEBPACK_IMPORTED_MODULE_6__[\"origin\"].body.isActive(), _physics_createObjects_createOrigin__WEBPACK_IMPORTED_MODULE_6__[\"origin\"].body.getWorldTransform());\n        }\n    })\n\n    var testRay = new THREE.Ray();\n    testRay.origin = new THREE.Vector3(0, 0, 0);\n    testRay.lookAt(new THREE.Vector3(1, 1, 1));\n    console.log(testRay);\n\n    console.log(Object(_physics_repulsion__WEBPACK_IMPORTED_MODULE_7__[\"default\"])());\n\n    Object(_animate__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (init);\n\n//# sourceURL=webpack:///./src/init.js?");

/***/ }),

/***/ "./src/moveCamera.js":
/*!***************************!*\
  !*** ./src/moveCamera.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _graphicsConstructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./graphicsConstructor */ \"./src/graphicsConstructor.js\");\n\n\n\n\n\n/**\n * \n * @param {number} delta; this time helps make the translation of the camera more smooth\n * this funciton moves the camera\n * based on the direction and magnitude of the camera's motion\n */\n\nfunction moveCamera(delta) {\n    _graphicsConstructor__WEBPACK_IMPORTED_MODULE_0__[\"velocity\"].x -= _graphicsConstructor__WEBPACK_IMPORTED_MODULE_0__[\"velocity\"].x * 7.5 * delta;\n    _graphicsConstructor__WEBPACK_IMPORTED_MODULE_0__[\"velocity\"].y -= _graphicsConstructor__WEBPACK_IMPORTED_MODULE_0__[\"velocity\"].y * 7.5 * delta;\n    _graphicsConstructor__WEBPACK_IMPORTED_MODULE_0__[\"velocity\"].z -= _graphicsConstructor__WEBPACK_IMPORTED_MODULE_0__[\"velocity\"].z * 7.5 * delta;\n\n    _graphicsConstructor__WEBPACK_IMPORTED_MODULE_0__[\"direction\"].z = Number(_graphicsConstructor__WEBPACK_IMPORTED_MODULE_0__[\"w\"]) - Number(_graphicsConstructor__WEBPACK_IMPORTED_MODULE_0__[\"s\"]);\n    _graphicsConstructor__WEBPACK_IMPORTED_MODULE_0__[\"direction\"].x = Number(_graphicsConstructor__WEBPACK_IMPORTED_MODULE_0__[\"a\"]) - Number(_graphicsConstructor__WEBPACK_IMPORTED_MODULE_0__[\"d\"]);\n    _graphicsConstructor__WEBPACK_IMPORTED_MODULE_0__[\"direction\"].y = Number(_graphicsConstructor__WEBPACK_IMPORTED_MODULE_0__[\"up\"]) - Number(_graphicsConstructor__WEBPACK_IMPORTED_MODULE_0__[\"down\"]);\n    _graphicsConstructor__WEBPACK_IMPORTED_MODULE_0__[\"direction\"].normalize();\n\n    // console.log(direction.z, direction.x, direction.y);\n\n    if(_graphicsConstructor__WEBPACK_IMPORTED_MODULE_0__[\"w\"] || _graphicsConstructor__WEBPACK_IMPORTED_MODULE_0__[\"s\"]) {\n        _graphicsConstructor__WEBPACK_IMPORTED_MODULE_0__[\"velocity\"].z -= _graphicsConstructor__WEBPACK_IMPORTED_MODULE_0__[\"direction\"].z * 400 * delta;\n    }\n    if(_graphicsConstructor__WEBPACK_IMPORTED_MODULE_0__[\"a\"] || _graphicsConstructor__WEBPACK_IMPORTED_MODULE_0__[\"d\"]) {\n        _graphicsConstructor__WEBPACK_IMPORTED_MODULE_0__[\"velocity\"].x -= _graphicsConstructor__WEBPACK_IMPORTED_MODULE_0__[\"direction\"].x * 400 * delta;\n    }\n    if(_graphicsConstructor__WEBPACK_IMPORTED_MODULE_0__[\"up\"] || _graphicsConstructor__WEBPACK_IMPORTED_MODULE_0__[\"down\"]) {\n        _graphicsConstructor__WEBPACK_IMPORTED_MODULE_0__[\"velocity\"].y += _graphicsConstructor__WEBPACK_IMPORTED_MODULE_0__[\"direction\"].y * 400 * delta;\n    }\n\n    _graphicsConstructor__WEBPACK_IMPORTED_MODULE_0__[\"controls\"].getObject().translateX(_graphicsConstructor__WEBPACK_IMPORTED_MODULE_0__[\"velocity\"].x * delta);\n    _graphicsConstructor__WEBPACK_IMPORTED_MODULE_0__[\"controls\"].getObject().translateY(_graphicsConstructor__WEBPACK_IMPORTED_MODULE_0__[\"velocity\"].y * delta);\n    _graphicsConstructor__WEBPACK_IMPORTED_MODULE_0__[\"controls\"].getObject().translateZ(_graphicsConstructor__WEBPACK_IMPORTED_MODULE_0__[\"velocity\"].z * delta);\n\n    // console.log(delta, controls.getObject().position);\n    // console.log(w,a,s,d,up,down);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (moveCamera);\n\n//# sourceURL=webpack:///./src/moveCamera.js?");

/***/ }),

/***/ "./src/physics/createObjects/createBall.js":
/*!*************************************************!*\
  !*** ./src/physics/createObjects/createBall.js ***!
  \*************************************************/
/*! exports provided: ball, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ball\", function() { return ball; });\n/* harmony import */ var _physicsConstructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../physicsConstructor */ \"./src/physics/physicsConstructor.js\");\n/* harmony import */ var _createRigidObjects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../createRigidObjects */ \"./src/physics/createRigidObjects.js\");\n\n\n\nvar ball;\n\nfunction createBall(ballRadius, ballPos) {\n    // var ballRadius = 1;\n    var ballSegment = 30;\n    // var ballMass = 20;\n    ball = new THREE.Mesh(\n        new THREE.SphereGeometry(ballRadius, ballSegment, ballSegment),\n        new THREE.MeshPhongMaterial({color: 'red'})\n    );\n    ball.name = 'ball';\n    var ballShape = new Ammo.btSphereShape(ballRadius);\n    _physicsConstructor__WEBPACK_IMPORTED_MODULE_0__[\"pos\"].set(ballPos.x, ballPos.y, ballPos.z);\n    // console.log(pos);\n    _physicsConstructor__WEBPACK_IMPORTED_MODULE_0__[\"qua\"].set(0, 0, 0, 1);\n    Object(_createRigidObjects__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(ball, ballShape, ballRadius * 2, _physicsConstructor__WEBPACK_IMPORTED_MODULE_0__[\"pos\"], _physicsConstructor__WEBPACK_IMPORTED_MODULE_0__[\"qua\"]);\n}\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (createBall);\n\n//# sourceURL=webpack:///./src/physics/createObjects/createBall.js?");

/***/ }),

/***/ "./src/physics/createObjects/createMap.js":
/*!************************************************!*\
  !*** ./src/physics/createObjects/createMap.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _physicsConstructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../physicsConstructor */ \"./src/physics/physicsConstructor.js\");\n/* harmony import */ var _createPlane__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createPlane */ \"./src/physics/createObjects/createPlane.js\");\n\n\n\nfunction createMap(map) {\n    for(var i = 0; i < map.length; i += 1) {\n        switch(map[i][6]) {\n            case 1:\n                // console.log(materialNormal);\n                Object(_createPlane__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(map[i][0], map[i][1], map[i][2], map[i][3], map[i][4], map[i][5], _physicsConstructor__WEBPACK_IMPORTED_MODULE_0__[\"materialNormal\"]);\n                break;\n            \n            case 2:\n                Object(_createPlane__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(map[i][0], map[i][1], map[i][2], map[i][3], map[i][4], map[i][5], _physicsConstructor__WEBPACK_IMPORTED_MODULE_0__[\"materialStart\"]);\n                break;\n\n            case 3:\n                Object(_createPlane__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(map[i][0], map[i][1], map[i][2], map[i][3], map[i][4], map[i][5], _physicsConstructor__WEBPACK_IMPORTED_MODULE_0__[\"materialEnd\"]);\n                break;\n\n            case 4:\n                Object(_createPlane__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(map[i][0], map[i][1], map[i][2], map[i][3], map[i][4], map[i][5], _physicsConstructor__WEBPACK_IMPORTED_MODULE_0__[\"materialEnd\"]);\n                break;\n        }\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (createMap);\n\n//# sourceURL=webpack:///./src/physics/createObjects/createMap.js?");

/***/ }),

/***/ "./src/physics/createObjects/createOrigin.js":
/*!***************************************************!*\
  !*** ./src/physics/createObjects/createOrigin.js ***!
  \***************************************************/
/*! exports provided: origin, originShape, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"origin\", function() { return origin; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"originShape\", function() { return originShape; });\n/* harmony import */ var _physicsConstructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../physicsConstructor */ \"./src/physics/physicsConstructor.js\");\n/* harmony import */ var _createRigidObjects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../createRigidObjects */ \"./src/physics/createRigidObjects.js\");\n\n\n\nvar origin, originShape;\n\nfunction createOrigin() {\n    var originSize = 1;\n    var originMass = originSize;\n    origin = new THREE.Mesh(\n        new THREE.BoxGeometry(originSize, originSize, originSize),\n        new THREE.MeshPhongMaterial({color: 'purple'})\n    );\n    origin.name = 'origin';\n    originShape = new Ammo.btBoxShape(new Ammo.btVector3(originSize * 0.5, originSize * 0.5, originSize * 0.5));\n    _physicsConstructor__WEBPACK_IMPORTED_MODULE_0__[\"pos\"].set(0, 0, 0);\n    _physicsConstructor__WEBPACK_IMPORTED_MODULE_0__[\"qua\"].set(0, 0, 0, 1);\n    Object(_createRigidObjects__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(origin, originShape, originMass, _physicsConstructor__WEBPACK_IMPORTED_MODULE_0__[\"pos\"], _physicsConstructor__WEBPACK_IMPORTED_MODULE_0__[\"qua\"]);\n}\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (createOrigin);\n\n//# sourceURL=webpack:///./src/physics/createObjects/createOrigin.js?");

/***/ }),

/***/ "./src/physics/createObjects/createPlane.js":
/*!**************************************************!*\
  !*** ./src/physics/createObjects/createPlane.js ***!
  \**************************************************/
/*! exports provided: plane, planeShape, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"plane\", function() { return plane; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"planeShape\", function() { return planeShape; });\n/* harmony import */ var _physicsConstructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../physicsConstructor */ \"./src/physics/physicsConstructor.js\");\n/* harmony import */ var _createRigidObjects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../createRigidObjects */ \"./src/physics/createRigidObjects.js\");\n\n\n\nvar plane, planeShape;\nfunction createPlane(px, py, pz, qx, qy, qz, planeMaterial) {\n    var planeW = _physicsConstructor__WEBPACK_IMPORTED_MODULE_0__[\"planeSize\"]; var planeH = 1; var planeL = _physicsConstructor__WEBPACK_IMPORTED_MODULE_0__[\"planeSize\"]; var planeMass = 0;\n    var planeGeometry = new THREE.BoxGeometry(planeW, planeH, planeL);\n    plane = new THREE.Mesh(planeGeometry, planeMaterial);\n    plane.name = 'plane';\n    planeShape = new Ammo.btBoxShape(new Ammo.btVector3(planeW * 0.5, planeH * 0.5, planeL * 0.5));\n    _physicsConstructor__WEBPACK_IMPORTED_MODULE_0__[\"pos\"].set((px * _physicsConstructor__WEBPACK_IMPORTED_MODULE_0__[\"planeSize\"]), py * _physicsConstructor__WEBPACK_IMPORTED_MODULE_0__[\"planeSize\"], pz * _physicsConstructor__WEBPACK_IMPORTED_MODULE_0__[\"planeSize\"]);\n    _physicsConstructor__WEBPACK_IMPORTED_MODULE_0__[\"qua\"].set(qx, qy, qz, 1);\n    Object(_createRigidObjects__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(plane, planeShape, planeMass, _physicsConstructor__WEBPACK_IMPORTED_MODULE_0__[\"pos\"], _physicsConstructor__WEBPACK_IMPORTED_MODULE_0__[\"qua\"]);\n    return plane;\n}\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (createPlane);\n\n//# sourceURL=webpack:///./src/physics/createObjects/createPlane.js?");

/***/ }),

/***/ "./src/physics/createRigidObjects.js":
/*!*******************************************!*\
  !*** ./src/physics/createRigidObjects.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _graphicsConstructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../graphicsConstructor */ \"./src/graphicsConstructor.js\");\n/* harmony import */ var _initiatePhysics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initiatePhysics */ \"./src/physics/initiatePhysics.js\");\n/* harmony import */ var _physicsConstructor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./physicsConstructor */ \"./src/physics/physicsConstructor.js\");\n\n\n\n\n/**\n * creates rigid body object\n */\nfunction createRigidObjects(object, shape, mass, position, quaternion) {\n    object.position.copy(position);\n    object.quaternion.copy(quaternion);\n    var transform = new Ammo.btTransform();\n    transform.setIdentity();\n    // console.log(transform);\n    transform.setOrigin(new Ammo.btVector3(position.x, position.y, position.z));\n    transform.setRotation(new Ammo.btQuaternion(quaternion.x, quaternion.y, quaternion.z, quaternion.w));\n    var motionState = new Ammo.btDefaultMotionState(transform);\n    var inertia = new Ammo.btVector3(0, 0, 0);\n    shape.calculateLocalInertia(mass, inertia);\n    var rigidBodyInfo = new Ammo.btRigidBodyConstructionInfo(mass, motionState, shape, inertia);\n    var rigidBody = new Ammo.btRigidBody(rigidBodyInfo);\n    object.body = rigidBody;\n    _graphicsConstructor__WEBPACK_IMPORTED_MODULE_0__[\"scene\"].add(object);\n    if(mass > 0) {\n        _physicsConstructor__WEBPACK_IMPORTED_MODULE_2__[\"rigidBodyObjects\"].push(object);\n        if(object.name === 'ball') {\n            _physicsConstructor__WEBPACK_IMPORTED_MODULE_2__[\"spheres\"].push(object);\n        }\n    }\n    _initiatePhysics__WEBPACK_IMPORTED_MODULE_1__[\"physicsWorld\"].addRigidBody(rigidBody);\n    return object;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (createRigidObjects);\n\n//# sourceURL=webpack:///./src/physics/createRigidObjects.js?");

/***/ }),

/***/ "./src/physics/initiatePhysics.js":
/*!****************************************!*\
  !*** ./src/physics/initiatePhysics.js ***!
  \****************************************/
/*! exports provided: collisionConfiguration, dispatcher, broadphase, solver, softBodySolver, physicsWorld, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"collisionConfiguration\", function() { return collisionConfiguration; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dispatcher\", function() { return dispatcher; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"broadphase\", function() { return broadphase; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"solver\", function() { return solver; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"softBodySolver\", function() { return softBodySolver; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"physicsWorld\", function() { return physicsWorld; });\nvar collisionConfiguration, dispatcher, broadphase, solver, softBodySolver, physicsWorld;\n\n/**\n * initiates physics of the app\n */\nfunction initiatePhysics() {\n    collisionConfiguration = new Ammo.btDefaultCollisionConfiguration();\n    dispatcher = new Ammo.btCollisionDispatcher(collisionConfiguration);\n    broadphase = new Ammo.btDbvtBroadphase();\n    solver = new Ammo.btSequentialImpulseConstraintSolver();\n    // softBodySolver = new Ammo.btDefaultSoftBodySolver\n    physicsWorld = new Ammo.btDiscreteDynamicsWorld(dispatcher, broadphase, solver, collisionConfiguration);\n    physicsWorld.setGravity(new Ammo.btVector3(0, 0, 0));\n}\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (initiatePhysics);\n\n//# sourceURL=webpack:///./src/physics/initiatePhysics.js?");

/***/ }),

/***/ "./src/physics/physicsConstructor.js":
/*!*******************************************!*\
  !*** ./src/physics/physicsConstructor.js ***!
  \*******************************************/
/*! exports provided: pos, qua, clock, transformAssistant, transformAssistantRepulsion, rigidBodyObjects, spheres, map, materialStart, materialEnd, materialNormal, planeSize, startPoint, endPoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pos\", function() { return pos; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"qua\", function() { return qua; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clock\", function() { return clock; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"transformAssistant\", function() { return transformAssistant; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"transformAssistantRepulsion\", function() { return transformAssistantRepulsion; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rigidBodyObjects\", function() { return rigidBodyObjects; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"spheres\", function() { return spheres; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"map\", function() { return map; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"materialStart\", function() { return materialStart; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"materialEnd\", function() { return materialEnd; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"materialNormal\", function() { return materialNormal; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"planeSize\", function() { return planeSize; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"startPoint\", function() { return startPoint; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"endPoint\", function() { return endPoint; });\nvar pos = new THREE.Vector3();\nvar qua = new THREE.Quaternion();\n\n\n\nvar clock = new THREE.Clock();\n\n\nvar transformAssistant = new Ammo.btTransform();\nvar transformAssistantRepulsion = new Ammo.btTransform();\n\nvar rigidBodyObjects = [];\nvar spheres = [];\n\n// px, py, pz, qx, qy, qz, type\n// type: normal === 1, start === 2, end === 3\nvar map = [\n    [0, -1, 0, 0, 0, 0, 2],\n    [0, -1, 1, 0, 0, 0, 1],\n    [1, -1, 1, 0, 0, 0, 1],\n    [1, -1, 2, 15 / 60, 0, 0, 1],\n    [1, -1, 3, 0, 0, 0, 3],\n    [0, -5, 0, 0, 0, 0, 4]\n];\n\n\n\nvar materialStart = new THREE.MeshPhongMaterial({color: 'rgb(0, 100, 0)'});\nvar materialEnd = new THREE.MeshPhongMaterial({color: 'rgb(0, 0, 100)'});\nvar materialNormal = new THREE.MeshPhongMaterial({color: 'rgb(100, 0, 0)'});\n\n\n\nvar planeSize = 50;\n\nvar startPoint\nvar endPoint;\n\n//# sourceURL=webpack:///./src/physics/physicsConstructor.js?");

/***/ }),

/***/ "./src/physics/repulsion.js":
/*!**********************************!*\
  !*** ./src/physics/repulsion.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _physicsConstructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./physicsConstructor */ \"./src/physics/physicsConstructor.js\");\n\n\n\n/**\n * simulating repulsion between the spheres\n * may have issue with the spheres array\n */\n\nfunction repulsion() {\n    var speed = 10;\n    var dir = 1;\n    _physicsConstructor__WEBPACK_IMPORTED_MODULE_0__[\"spheres\"].forEach(obj => {\n        var otherObj = [];\n        var xComponent = [];\n        var yComponent = [];\n        var zComponent = [];\n        var xMean = 0;\n        var yMean = 0;\n        var zMean = 0;\n        var body = obj.body;\n        var motionState = body.getMotionState();\n        motionState.getWorldTransform(_physicsConstructor__WEBPACK_IMPORTED_MODULE_0__[\"transformAssistant\"]);\n\n            for(var i = 0; i < _physicsConstructor__WEBPACK_IMPORTED_MODULE_0__[\"spheres\"].length; i += 1) {\n                if(obj.uuid !== _physicsConstructor__WEBPACK_IMPORTED_MODULE_0__[\"spheres\"][i].uuid) {\n                    var newRay = new THREE.Ray();\n                    newRay.origin = new THREE.Vector3(_physicsConstructor__WEBPACK_IMPORTED_MODULE_0__[\"transformAssistant\"].getOrigin().x(), _physicsConstructor__WEBPACK_IMPORTED_MODULE_0__[\"transformAssistant\"].getOrigin().y(), _physicsConstructor__WEBPACK_IMPORTED_MODULE_0__[\"transformAssistant\"].getOrigin().z());\n                    var newMotionState = _physicsConstructor__WEBPACK_IMPORTED_MODULE_0__[\"spheres\"][i].body.getMotionState();\n                    newMotionState.getWorldTransform(_physicsConstructor__WEBPACK_IMPORTED_MODULE_0__[\"transformAssistantRepulsion\"]);\n                    var direction = new THREE.Vector3(_physicsConstructor__WEBPACK_IMPORTED_MODULE_0__[\"transformAssistantRepulsion\"].getOrigin().x(), _physicsConstructor__WEBPACK_IMPORTED_MODULE_0__[\"transformAssistant\"].getOrigin().y(), _physicsConstructor__WEBPACK_IMPORTED_MODULE_0__[\"transformAssistant\"].getOrigin().z());\n                    direction.normalize();\n                    newRay.lookAt(direction);\n                    // console.log(newRay.origin, newRay.direction);\n                    otherObj.push(newRay);\n                }\n            }\n\n            otherObj.forEach(ray => {\n                xComponent.push(ray.direction.x);\n                yComponent.push(ray.direction.y);\n                zComponent.push(ray.direction.z);\n            });\n\n            for(var i = 0; i < xComponent.length; i += 1) {\n                xMean = xMean + xComponent[i];\n                yMean = yMean + yComponent[i];\n                zMean = zMean + zComponent[i];\n            }\n\n            xMean = xMean / xComponent.length;\n            yMean = yMean / xComponent.length;\n            zMean = zMean / zComponent.length;\n\n            // console.log(otherObj);\n\n            body.setLinearVelocity(new Ammo.btVector3(dir * xMean * speed, dir * yMean * speed, dir * zMean * speed));\n    });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (repulsion);\n\n//# sourceURL=webpack:///./src/physics/repulsion.js?");

/***/ }),

/***/ "./src/physics/updatePhysics.js":
/*!**************************************!*\
  !*** ./src/physics/updatePhysics.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _initiatePhysics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initiatePhysics */ \"./src/physics/initiatePhysics.js\");\n/* harmony import */ var _physicsConstructor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./physicsConstructor */ \"./src/physics/physicsConstructor.js\");\n/* harmony import */ var _graphicsConstructor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../graphicsConstructor */ \"./src/graphicsConstructor.js\");\n/* harmony import */ var _repulsion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./repulsion */ \"./src/physics/repulsion.js\");\n\n\n\n\n\n\n/**\n * physics animation\n */\n\nfunction updatePhysics(deltaTime) {\n    _initiatePhysics__WEBPACK_IMPORTED_MODULE_0__[\"physicsWorld\"].stepSimulation(deltaTime, 10);\n    for(var i = 0, j = _physicsConstructor__WEBPACK_IMPORTED_MODULE_1__[\"rigidBodyObjects\"].length; i < j; i += 1) {\n            var objectBody = _physicsConstructor__WEBPACK_IMPORTED_MODULE_1__[\"rigidBodyObjects\"][i].body;\n            var motionState = objectBody.getMotionState();\n            if(motionState) {\n                motionState.getWorldTransform(_physicsConstructor__WEBPACK_IMPORTED_MODULE_1__[\"transformAssistant\"]);\n                var position = _physicsConstructor__WEBPACK_IMPORTED_MODULE_1__[\"transformAssistant\"].getOrigin();\n                var quaternion = _physicsConstructor__WEBPACK_IMPORTED_MODULE_1__[\"transformAssistant\"].getRotation();\n                if(_physicsConstructor__WEBPACK_IMPORTED_MODULE_1__[\"rigidBodyObjects\"][i].name === 'player') {\n                    objectBody.setAngularVelocity(new Ammo.btVector3(objectBody.getAngularVelocity().x() + (5 * _graphicsConstructor__WEBPACK_IMPORTED_MODULE_2__[\"axisX\"]), objectBody.getAngularVelocity().y(), objectBody.getAngularVelocity().z() + (5 * _graphicsConstructor__WEBPACK_IMPORTED_MODULE_2__[\"axisZ\"])));\n                    objectBody.setLinearVelocity(new Ammo.btVector3(objectBody.getLinearVelocity().x() + (5 * _graphicsConstructor__WEBPACK_IMPORTED_MODULE_2__[\"axisX\"]), objectBody.getLinearVelocity().y(), objectBody.getLinearVelocity().z() + (5 * _graphicsConstructor__WEBPACK_IMPORTED_MODULE_2__[\"axisZ\"])));\n                    // console.log(objectBody.getLinearVelocity().x());\n                    // console.log(objectBody.getLinearVelocity().z());\n                }\n                _physicsConstructor__WEBPACK_IMPORTED_MODULE_1__[\"rigidBodyObjects\"][i].position.set(position.x(), position.y(), position.z());\n                _physicsConstructor__WEBPACK_IMPORTED_MODULE_1__[\"rigidBodyObjects\"][i].quaternion.set(quaternion.x(), quaternion.y(), quaternion.z(), quaternion.w());\n            }\n        }\n        Object(_repulsion__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (updatePhysics);\n\n//# sourceURL=webpack:///./src/physics/updatePhysics.js?");

/***/ })

/******/ });