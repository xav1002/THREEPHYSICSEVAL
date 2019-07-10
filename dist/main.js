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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constructor */ \"./src/constructor.js\");\n/* harmony import */ var _physics_physicsConstructor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./physics/physicsConstructor */ \"./src/physics/physicsConstructor.js\");\n/* harmony import */ var _moveCamera__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./moveCamera */ \"./src/moveCamera.js\");\n/* harmony import */ var _physics_updatePhysics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./physics/updatePhysics */ \"./src/physics/updatePhysics.js\");\n/* harmony import */ var _physics_movePlane__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./physics/movePlane */ \"./src/physics/movePlane.js\");\n\n\n\n\n\n\n\n\n/**\n * this is the animate function, called to interate new frames\n * also calls the moveCamera function\n */\n\nvar prevTime = performance.now();\n\nfunction animate() {\n    requestAnimationFrame(function() {\n        animate();\n    });\n\n    var time = performance.now();\n    var delta = (time - prevTime) / 1000;\n    \n    var deltaTime = _physics_physicsConstructor__WEBPACK_IMPORTED_MODULE_1__[\"clock\"].getDelta();\n    Object(_physics_updatePhysics__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(deltaTime);\n\n    // movePlane();\n\n    prevTime = time;\n\n    Object(_moveCamera__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(delta);\n\n    _constructor__WEBPACK_IMPORTED_MODULE_0__[\"renderer\"].render(_constructor__WEBPACK_IMPORTED_MODULE_0__[\"scene\"], _constructor__WEBPACK_IMPORTED_MODULE_0__[\"camera\"]);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (animate);\n\n//# sourceURL=webpack:///./src/animate.js?");

/***/ }),

/***/ "./src/constructor.js":
/*!****************************!*\
  !*** ./src/constructor.js ***!
  \****************************/
/*! exports provided: scene, renderer, controls, camera, ambient, objects, origin, velocity, direction, w, s, a, d, up, down, xP, xN, yP, yN, zP, zN, axisX, axisZ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"scene\", function() { return scene; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderer\", function() { return renderer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"controls\", function() { return controls; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"camera\", function() { return camera; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ambient\", function() { return ambient; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"objects\", function() { return objects; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"origin\", function() { return origin; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"velocity\", function() { return velocity; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"direction\", function() { return direction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"w\", function() { return w; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"s\", function() { return s; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return a; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"d\", function() { return d; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"up\", function() { return up; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"down\", function() { return down; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"xP\", function() { return xP; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"xN\", function() { return xN; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"yP\", function() { return yP; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"yN\", function() { return yN; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"zP\", function() { return zP; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"zN\", function() { return zN; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"axisX\", function() { return axisX; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"axisZ\", function() { return axisZ; });\n/**\n * this file is used to initiate most of the variables and objects used in the project\n */\n\nvar scene = new THREE.Scene();\nvar camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);\n\nvar renderer = new THREE.WebGLRenderer({antialias: true});\nrenderer.setSize(window.innerWidth, window.innerHeight);\nrenderer.setClearColor('rgb(100, 100, 300)');\ndocument.body.appendChild(renderer.domElement);\n\n\nvar controls = new THREE.PointerLockControls(camera);\n\n\nvar ambient = new THREE.AmbientLight(0xffffff);\n\nvar objects = [];\n\nfor(var i = 0; i < 6; i += 1) {\n    objects.push(\n        new THREE.Mesh(new THREE.SphereGeometry(Math.random() * 10, 50, 50), new THREE.MeshPhongMaterial({color: `rgb(${Math.ceil(Math.random() * 100)}, ${Math.ceil(Math.random() * 100)}, ${Math.ceil(Math.random() * 100)})`}))\n    );\n\n    objects[i].position.set((100 * Math.random()) - 50, (100 * Math.random()) - 50, (100 * Math.random()) - 50);\n}\n\n\n\nvar origin = new THREE.Mesh( new THREE.BoxGeometry(10, 10, 10), new THREE.MeshPhongMaterial({color: 'purple'}));\n\nvar velocity = new THREE.Vector3();\nvar direction = new THREE.Vector3();\n\nvar w = false;\nvar s = false;\nvar a = false;\nvar d = false;\nvar up = false;\nvar down = false;\n\nvar xP = false;\nvar xN = false;\nvar yP = false;\nvar yN = false;\nvar zP = false;\nvar zN = false;\n\nvar axisX = 0;\nvar axisZ = 0;\n\nwindow.addEventListener('keydown', function(e) {\n    switch( e.keyCode ) {\n        case 81:\n            controls.lock();\n            break;\n\n        case 69:\n            controls.unlock();\n            break;\n\n        case 87:\n            w = true;\n            break;\n\n        case 83:\n            s = true;\n            break;\n\n        case 65:\n            a = true;\n            break;\n\n        case 68:\n            d = true;\n            break;\n\n        case 32:\n            up = true;\n            break;\n\n        case 16:\n            down = true;\n            break;\n\n        case 89:\n            xP = true;\n            axisZ = 0.05;\n            break;\n\n        case 85:\n            xN = true;\n            axisZ = -0.05;\n            break;\n\n        case 72:\n            zP = true;\n            axisX = 0.05;\n            break;\n\n        case 74:\n            zN = true;\n            axisX = -0.05;\n            break;\n\n        case 78:\n            yP = true;\n            break;\n\n        case 77:\n            yN = true;\n            break;\n    }\n});\n\nwindow.addEventListener('keyup', function(e) {\n    switch( e.keyCode ) {\n        case 87:\n            w = false;\n            break;\n\n        case 83:\n            s = false;\n            break;\n\n        case 65:\n            a = false;\n            break;\n\n        case 68:\n            d = false;\n            break;\n\n        case 32:\n            up = false;\n            break;\n\n        case 16:\n            down = false;\n            break;\n\n        case 89:\n            xP = false;\n            axisZ = 0;\n            break;\n    \n        case 85:\n            xN = false;\n            axisZ = 0;\n            break;\n\n        case 72:\n            zP = false;\n            axisX = 0;\n            break;\n\n        case 74:\n            zN = false;\n            axisX = 0;\n            break;\n\n        case 78:\n            yP = false;\n            break;\n\n        case 77:\n            yN = false;\n            break;\n    }\n});\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/constructor.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constructor */ \"./src/constructor.js\");\n/* harmony import */ var _animate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animate */ \"./src/animate.js\");\n/* harmony import */ var _physics_initiatePhysics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./physics/initiatePhysics */ \"./src/physics/initiatePhysics.js\");\n/* harmony import */ var _physics_createObjects_createBall__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./physics/createObjects/createBall */ \"./src/physics/createObjects/createBall.js\");\n/* harmony import */ var _physics_createObjects_createPlane__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./physics/createObjects/createPlane */ \"./src/physics/createObjects/createPlane.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n/**\n * used to initiate the scene, and add all the parts\n */\n\nfunction init() {\n    _constructor__WEBPACK_IMPORTED_MODULE_0__[\"scene\"].add(_constructor__WEBPACK_IMPORTED_MODULE_0__[\"ambient\"]);\n\n    _constructor__WEBPACK_IMPORTED_MODULE_0__[\"scene\"].add(_constructor__WEBPACK_IMPORTED_MODULE_0__[\"controls\"].getObject());\n\n    _constructor__WEBPACK_IMPORTED_MODULE_0__[\"scene\"].add(_constructor__WEBPACK_IMPORTED_MODULE_0__[\"origin\"]);\n\n    _constructor__WEBPACK_IMPORTED_MODULE_0__[\"objects\"].forEach(object => {\n        _constructor__WEBPACK_IMPORTED_MODULE_0__[\"scene\"].add(object);\n    });\n\n    Object(_physics_initiatePhysics__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n    Object(_physics_createObjects_createBall__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n\n    Object(_physics_createObjects_createPlane__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n\n    Object(_animate__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n}\n\ninit();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moveCamera.js":
/*!***************************!*\
  !*** ./src/moveCamera.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constructor */ \"./src/constructor.js\");\n\n\n\n\n\n/**\n * \n * @param {number} delta; this time helps make the translation of the camera more smooth\n * this funciton moves the camera\n * based on the direction and magnitude of the camera's motion\n */\n\nfunction moveCamera(delta) {\n    _constructor__WEBPACK_IMPORTED_MODULE_0__[\"velocity\"].x -= _constructor__WEBPACK_IMPORTED_MODULE_0__[\"velocity\"].x * 7.5 * delta;\n    _constructor__WEBPACK_IMPORTED_MODULE_0__[\"velocity\"].y -= _constructor__WEBPACK_IMPORTED_MODULE_0__[\"velocity\"].y * 7.5 * delta;\n    _constructor__WEBPACK_IMPORTED_MODULE_0__[\"velocity\"].z -= _constructor__WEBPACK_IMPORTED_MODULE_0__[\"velocity\"].z * 7.5 * delta;\n\n    _constructor__WEBPACK_IMPORTED_MODULE_0__[\"direction\"].z = Number(_constructor__WEBPACK_IMPORTED_MODULE_0__[\"w\"]) - Number(_constructor__WEBPACK_IMPORTED_MODULE_0__[\"s\"]);\n    _constructor__WEBPACK_IMPORTED_MODULE_0__[\"direction\"].x = Number(_constructor__WEBPACK_IMPORTED_MODULE_0__[\"a\"]) - Number(_constructor__WEBPACK_IMPORTED_MODULE_0__[\"d\"]);\n    _constructor__WEBPACK_IMPORTED_MODULE_0__[\"direction\"].y = Number(_constructor__WEBPACK_IMPORTED_MODULE_0__[\"up\"]) - Number(_constructor__WEBPACK_IMPORTED_MODULE_0__[\"down\"]);\n    _constructor__WEBPACK_IMPORTED_MODULE_0__[\"direction\"].normalize();\n\n    // console.log(direction.z, direction.x, direction.y);\n\n    if(_constructor__WEBPACK_IMPORTED_MODULE_0__[\"w\"] || _constructor__WEBPACK_IMPORTED_MODULE_0__[\"s\"]) {\n        _constructor__WEBPACK_IMPORTED_MODULE_0__[\"velocity\"].z -= _constructor__WEBPACK_IMPORTED_MODULE_0__[\"direction\"].z * 4000 * delta;\n    }\n    if(_constructor__WEBPACK_IMPORTED_MODULE_0__[\"a\"] || _constructor__WEBPACK_IMPORTED_MODULE_0__[\"d\"]) {\n        _constructor__WEBPACK_IMPORTED_MODULE_0__[\"velocity\"].x -= _constructor__WEBPACK_IMPORTED_MODULE_0__[\"direction\"].x * 4000 * delta;\n    }\n    if(_constructor__WEBPACK_IMPORTED_MODULE_0__[\"up\"] || _constructor__WEBPACK_IMPORTED_MODULE_0__[\"down\"]) {\n        _constructor__WEBPACK_IMPORTED_MODULE_0__[\"velocity\"].y += _constructor__WEBPACK_IMPORTED_MODULE_0__[\"direction\"].y * 4000 * delta;\n    }\n\n    _constructor__WEBPACK_IMPORTED_MODULE_0__[\"controls\"].getObject().translateX(_constructor__WEBPACK_IMPORTED_MODULE_0__[\"velocity\"].x * delta);\n    _constructor__WEBPACK_IMPORTED_MODULE_0__[\"controls\"].getObject().translateY(_constructor__WEBPACK_IMPORTED_MODULE_0__[\"velocity\"].y * delta);\n    _constructor__WEBPACK_IMPORTED_MODULE_0__[\"controls\"].getObject().translateZ(_constructor__WEBPACK_IMPORTED_MODULE_0__[\"velocity\"].z * delta);\n\n    // console.log(delta, controls.getObject().position);\n    // console.log(w,a,s,d,up,down);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (moveCamera);\n\n//# sourceURL=webpack:///./src/moveCamera.js?");

/***/ }),

/***/ "./src/physics/createObjects/createBall.js":
/*!*************************************************!*\
  !*** ./src/physics/createObjects/createBall.js ***!
  \*************************************************/
/*! exports provided: ball, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ball\", function() { return ball; });\n/* harmony import */ var _physicsConstructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../physicsConstructor */ \"./src/physics/physicsConstructor.js\");\n/* harmony import */ var _createRigidObjects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../createRigidObjects */ \"./src/physics/createRigidObjects.js\");\n\n\n\nvar ball;\n\nfunction createBall() {\n    var ballRadius = 1;\n    var ballSegment = 30;\n    var ballMass = 20;\n    ball = new THREE.Mesh(\n        new THREE.SphereGeometry(ballRadius, ballSegment, ballMass),\n        new THREE.MeshPhongMaterial({color: 'red'})\n    );\n    ball.name = 'player';\n    var ballShape = new Ammo.btSphereShape(ballRadius);\n    _physicsConstructor__WEBPACK_IMPORTED_MODULE_0__[\"pos\"].set(100, 40, 0);\n    _physicsConstructor__WEBPACK_IMPORTED_MODULE_0__[\"qua\"].set(0, 0, 0, 1);\n    Object(_createRigidObjects__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(ball, ballShape, ballMass, _physicsConstructor__WEBPACK_IMPORTED_MODULE_0__[\"pos\"], _physicsConstructor__WEBPACK_IMPORTED_MODULE_0__[\"qua\"]);\n}\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (createBall);\n\n//# sourceURL=webpack:///./src/physics/createObjects/createBall.js?");

/***/ }),

/***/ "./src/physics/createObjects/createPlane.js":
/*!**************************************************!*\
  !*** ./src/physics/createObjects/createPlane.js ***!
  \**************************************************/
/*! exports provided: plane, planeShape, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"plane\", function() { return plane; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"planeShape\", function() { return planeShape; });\n/* harmony import */ var _physicsConstructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../physicsConstructor */ \"./src/physics/physicsConstructor.js\");\n/* harmony import */ var _createRigidObjects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../createRigidObjects */ \"./src/physics/createRigidObjects.js\");\n\n\n\nvar plane, planeShape;\nfunction createPlane() {\n    var planeW = 10; var planeH = 1; var planeL = 10; var planeMass = 0;\n    var planeGeometry = new THREE.BoxGeometry(planeW, planeH, planeL);\n    var planeMaterial = new THREE.MeshPhongMaterial({color: '0x00ff00'});\n    plane = new THREE.Mesh(planeGeometry, planeMaterial);\n    plane.name = 'plane';\n    planeShape = new Ammo.btBoxShape(new Ammo.btVector3(planeW * 0.5, planeH * 0.5, planeL * 0.5));\n    _physicsConstructor__WEBPACK_IMPORTED_MODULE_0__[\"pos\"].set(100, 0, 0);\n    _physicsConstructor__WEBPACK_IMPORTED_MODULE_0__[\"qua\"].set(0, 0, 0, 1);\n    Object(_createRigidObjects__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(plane, planeShape, planeMass, _physicsConstructor__WEBPACK_IMPORTED_MODULE_0__[\"pos\"], _physicsConstructor__WEBPACK_IMPORTED_MODULE_0__[\"qua\"]);\n}\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (createPlane);\n\n//# sourceURL=webpack:///./src/physics/createObjects/createPlane.js?");

/***/ }),

/***/ "./src/physics/createRigidObjects.js":
/*!*******************************************!*\
  !*** ./src/physics/createRigidObjects.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constructor */ \"./src/constructor.js\");\n/* harmony import */ var _initiatePhysics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initiatePhysics */ \"./src/physics/initiatePhysics.js\");\n/* harmony import */ var _physicsConstructor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./physicsConstructor */ \"./src/physics/physicsConstructor.js\");\n\n\n\n\n/**\n * creates rigid body object\n */\nfunction createRigidObjects(object, shape, mass, position, quaternion) {\n    object.position.copy(position);\n    object.quaternion.copy(quaternion);\n    var transform = new Ammo.btTransform();\n    transform.setIdentity();\n    transform.setOrigin(new Ammo.btVector3(position.x, position.y, position.z));\n    transform.setRotation(new Ammo.btQuaternion(quaternion.x, quaternion.y, quaternion.z, quaternion.w));\n    var motionState = new Ammo.btDefaultMotionState(transform);\n    var inertia = new Ammo.btVector3(0, 0, 0);\n    shape.calculateLocalInertia(mass, inertia);\n    var rigidBodyInfo = new Ammo.btRigidBodyConstructionInfo(mass, motionState, shape, inertia);\n    var rigidBody = new Ammo.btRigidBody(rigidBodyInfo);\n    object.body = rigidBody;\n    _constructor__WEBPACK_IMPORTED_MODULE_0__[\"scene\"].add(object);\n    if(mass > 0) {\n        _physicsConstructor__WEBPACK_IMPORTED_MODULE_2__[\"rigidBodyObjects\"].push(object);\n    }\n    _initiatePhysics__WEBPACK_IMPORTED_MODULE_1__[\"physicsWorld\"].addRigidBody(rigidBody);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (createRigidObjects);\n\n//# sourceURL=webpack:///./src/physics/createRigidObjects.js?");

/***/ }),

/***/ "./src/physics/initiatePhysics.js":
/*!****************************************!*\
  !*** ./src/physics/initiatePhysics.js ***!
  \****************************************/
/*! exports provided: collisionConfiguration, dispatcher, broadphase, solver, softBodySolver, physicsWorld, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"collisionConfiguration\", function() { return collisionConfiguration; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dispatcher\", function() { return dispatcher; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"broadphase\", function() { return broadphase; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"solver\", function() { return solver; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"softBodySolver\", function() { return softBodySolver; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"physicsWorld\", function() { return physicsWorld; });\nvar collisionConfiguration, dispatcher, broadphase, solver, softBodySolver, physicsWorld;\n\n/**\n * initiates physics of the app\n */\nfunction initiatePhysics() {\n    collisionConfiguration = new Ammo.btSoftBodyRigidBodyCollisionConfiguration();\n    dispatcher = new Ammo.btCollisionDispatcher(collisionConfiguration);\n    broadphase = new Ammo.btDbvtBroadphase();\n    solver = new Ammo.btSequentialImpulseConstraintSolver();\n    softBodySolver = new Ammo.btDefaultSoftBodySolver\n    physicsWorld = new Ammo.btSoftRigidDynamicsWorld(dispatcher, broadphase, solver, collisionConfiguration, softBodySolver);\n    physicsWorld.setGravity(new Ammo.btVector3(0, -9.81, 0));\n    physicsWorld.getWorldInfo().set_m_gravity(new Ammo.btVector3(0, -1, 0));\n}\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (initiatePhysics);\n\n//# sourceURL=webpack:///./src/physics/initiatePhysics.js?");

/***/ }),

/***/ "./src/physics/movePlane.js":
/*!**********************************!*\
  !*** ./src/physics/movePlane.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constructor */ \"./src/constructor.js\");\n/* harmony import */ var _createObjects_createPlane__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createObjects/createPlane */ \"./src/physics/createObjects/createPlane.js\");\n\n\n\n\nfunction movePlane() {\n    // console.log(plane);\n    console.log(_constructor__WEBPACK_IMPORTED_MODULE_0__[\"axisX\"], _constructor__WEBPACK_IMPORTED_MODULE_0__[\"axisZ\"]);\n    if(_constructor__WEBPACK_IMPORTED_MODULE_0__[\"xP\"]) {\n        _createObjects_createPlane__WEBPACK_IMPORTED_MODULE_1__[\"plane\"].rotation.x += .01;\n    } else if(_constructor__WEBPACK_IMPORTED_MODULE_0__[\"xN\"]) {\n        _createObjects_createPlane__WEBPACK_IMPORTED_MODULE_1__[\"plane\"].rotation.x -= .01;\n    } else if(_constructor__WEBPACK_IMPORTED_MODULE_0__[\"yP\"]) {\n        _createObjects_createPlane__WEBPACK_IMPORTED_MODULE_1__[\"plane\"].rotation.y += .01;\n    } else if(_constructor__WEBPACK_IMPORTED_MODULE_0__[\"yN\"]) {\n        _createObjects_createPlane__WEBPACK_IMPORTED_MODULE_1__[\"plane\"].rotation.y -= .01;\n    } else if(_constructor__WEBPACK_IMPORTED_MODULE_0__[\"zP\"]) {\n        _createObjects_createPlane__WEBPACK_IMPORTED_MODULE_1__[\"plane\"].rotation.z += .01;\n    } else if(_constructor__WEBPACK_IMPORTED_MODULE_0__[\"zN\"]) {\n        _createObjects_createPlane__WEBPACK_IMPORTED_MODULE_1__[\"plane\"].rotation.z -= .01;\n    }\n    _createObjects_createPlane__WEBPACK_IMPORTED_MODULE_1__[\"plane\"].body.setAngularVelocity(new Ammo.btVector3(_createObjects_createPlane__WEBPACK_IMPORTED_MODULE_1__[\"plane\"].body.getAngularVelocity().x() + _constructor__WEBPACK_IMPORTED_MODULE_0__[\"axisX\"], _createObjects_createPlane__WEBPACK_IMPORTED_MODULE_1__[\"plane\"].body.getAngularVelocity().y(), _createObjects_createPlane__WEBPACK_IMPORTED_MODULE_1__[\"plane\"].body.getAngularVelocity().z() + _constructor__WEBPACK_IMPORTED_MODULE_0__[\"axisZ\"]));\n    console.log(_createObjects_createPlane__WEBPACK_IMPORTED_MODULE_1__[\"plane\"].body.getAngularVelocity().x(), _createObjects_createPlane__WEBPACK_IMPORTED_MODULE_1__[\"plane\"].body);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (movePlane);\n\n//# sourceURL=webpack:///./src/physics/movePlane.js?");

/***/ }),

/***/ "./src/physics/physicsConstructor.js":
/*!*******************************************!*\
  !*** ./src/physics/physicsConstructor.js ***!
  \*******************************************/
/*! exports provided: pos, qua, clock, transformAssistant, rigidBodyObjects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pos\", function() { return pos; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"qua\", function() { return qua; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clock\", function() { return clock; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"transformAssistant\", function() { return transformAssistant; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rigidBodyObjects\", function() { return rigidBodyObjects; });\nvar pos = new THREE.Vector3();\nvar qua = new THREE.Quaternion();\n\n\n\nvar clock = new THREE.Clock();\n\n\nvar transformAssistant = new Ammo.btTransform();\n\nvar rigidBodyObjects = [];\n\n//# sourceURL=webpack:///./src/physics/physicsConstructor.js?");

/***/ }),

/***/ "./src/physics/updatePhysics.js":
/*!**************************************!*\
  !*** ./src/physics/updatePhysics.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _initiatePhysics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initiatePhysics */ \"./src/physics/initiatePhysics.js\");\n/* harmony import */ var _physicsConstructor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./physicsConstructor */ \"./src/physics/physicsConstructor.js\");\n/* harmony import */ var _constructor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constructor */ \"./src/constructor.js\");\n\n\n\n\n\n/**\n * physics animation\n */\nfunction updatePhysics(deltaTime) {\n    _initiatePhysics__WEBPACK_IMPORTED_MODULE_0__[\"physicsWorld\"].stepSimulation(deltaTime, 10);\n    for(var i = 0, j = _physicsConstructor__WEBPACK_IMPORTED_MODULE_1__[\"rigidBodyObjects\"].length; i < j; i += 1) {\n            var objectBody = _physicsConstructor__WEBPACK_IMPORTED_MODULE_1__[\"rigidBodyObjects\"][i].body;\n            var motionState = objectBody.getMotionState();\n            if(motionState) {\n                motionState.getWorldTransform(_physicsConstructor__WEBPACK_IMPORTED_MODULE_1__[\"transformAssistant\"]);\n                var position = _physicsConstructor__WEBPACK_IMPORTED_MODULE_1__[\"transformAssistant\"].getOrigin();\n                var quaternion = _physicsConstructor__WEBPACK_IMPORTED_MODULE_1__[\"transformAssistant\"].getRotation();\n                if(_physicsConstructor__WEBPACK_IMPORTED_MODULE_1__[\"rigidBodyObjects\"][i].name === 'player') {\n                    objectBody.setAngularVelocity(new Ammo.btVector3(objectBody.getAngularVelocity().x() + _constructor__WEBPACK_IMPORTED_MODULE_2__[\"axisX\"], objectBody.getAngularVelocity().y(), objectBody.getAngularVelocity().z() + _constructor__WEBPACK_IMPORTED_MODULE_2__[\"axisZ\"]));\n                    objectBody.setLinearVelocity(new Ammo.btVector3(objectBody.getLinearVelocity().x() + _constructor__WEBPACK_IMPORTED_MODULE_2__[\"axisX\"], objectBody.getLinearVelocity().y(), objectBody.getLinearVelocity().z() + _constructor__WEBPACK_IMPORTED_MODULE_2__[\"axisZ\"]));\n                    console.log(objectBody.getAngularVelocity().x(), objectBody.getLinearVelocity().x());\n                }\n                _physicsConstructor__WEBPACK_IMPORTED_MODULE_1__[\"rigidBodyObjects\"][i].position.set(position.x(), position.y(), position.z());\n                _physicsConstructor__WEBPACK_IMPORTED_MODULE_1__[\"rigidBodyObjects\"][i].quaternion.set(quaternion.x(), quaternion.y(), quaternion.z(), quaternion.w());\n            }\n        }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (updatePhysics);\n\n//# sourceURL=webpack:///./src/physics/updatePhysics.js?");

/***/ })

/******/ });