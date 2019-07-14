/**
 * this file is used to initiate most of the variables and objects used in the project
 */

export var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);
export {camera};

var renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor('rgb(100, 100, 300)');
document.body.appendChild(renderer.domElement);
export {renderer};

// var controls = new THREE.TrackballControls(camera, renderer.domElement);
// controls.rotateSpeed = 1.0;
// controls.zoomSpeed = 1.2;
// controls.panSpeed = 2;
// controls.noZoom = false;
// controls.noPan = false;
// controls.staticMoving = true;
// controls.dynamicDampingFactor = 0.3;
// controls.keys = [ 65, 83, 68 ];

var controls = new THREE.PointerLockControls(camera);
export {controls};

export var ambient = new THREE.AmbientLight(0xffffff);

// var objects = [];

// for(var i = 0; i < 6; i += 1) {
//     objects.push(
//         new THREE.Mesh(new THREE.SphereGeometry(Math.random() * 10, 50, 50), new THREE.MeshPhongMaterial({color: `rgb(${Math.ceil(Math.random() * 100)}, ${Math.ceil(Math.random() * 100)}, ${Math.ceil(Math.random() * 100)})`}))
//     );

//     objects[i].position.set((100 * Math.random()) - 50, (100 * Math.random()) - 50, (100 * Math.random()) - 50);
// }

// export {objects};

// export var origin = new THREE.Mesh( new THREE.BoxGeometry(10, 10, 10), new THREE.MeshPhongMaterial({color: 'purple'}));

export var velocity = new THREE.Vector3();
export var direction = new THREE.Vector3();

var w = false;
var s = false;
var a = false;
var d = false;
var up = false;
var down = false;

var xP = false;
var xN = false;
var yP = false;
var yN = false;
var zP = false;
var zN = false;

var axisX = 0;
var axisZ = 0;

window.addEventListener('keydown', function(e) {
    switch( e.keyCode ) {
        case 81:
            controls.lock();
            break;

        case 69:
            controls.unlock();
            break;

        case 87:
            w = true;
            break;

        case 83:
            s = true;
            break;

        case 65:
            a = true;
            break;

        case 68:
            d = true;
            break;

        case 32:
            up = true;
            break;

        case 16:
            down = true;
            break;

        case 89:
            xP = true;
            axisZ = 0.05;
            break;

        case 85:
            xN = true;
            axisZ = -0.05;
            break;

        case 72:
            zP = true;
            axisX = 0.05;
            break;

        case 74:
            zN = true;
            axisX = -0.05;
            break;

        case 78:
            yP = true;
            break;

        case 77:
            yN = true;
            break;
    }
});

window.addEventListener('keyup', function(e) {
    switch( e.keyCode ) {
        case 87:
            w = false;
            break;

        case 83:
            s = false;
            break;

        case 65:
            a = false;
            break;

        case 68:
            d = false;
            break;

        case 32:
            up = false;
            break;

        case 16:
            down = false;
            break;

        case 89:
            xP = false;
            axisZ = 0;
            break;
    
        case 85:
            xN = false;
            axisZ = 0;
            break;

        case 72:
            zP = false;
            axisX = 0;
            break;

        case 74:
            zN = false;
            axisX = 0;
            break;

        case 78:
            yP = false;
            break;

        case 77:
            yN = false;
            break;
    }
});

export {w, s, a, d, up, down};

export {xP, xN, yP, yN, zP, zN};

export {axisX, axisZ};