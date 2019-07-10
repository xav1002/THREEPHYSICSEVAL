/**
 * this file is used to initiate most of the variables and objects used in the project
 */

export var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);

var renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor('rgb(100, 100, 300)');
document.body.appendChild(renderer.domElement);
export {renderer};

export var controls = new THREE.PointerLockControls(camera);
export {camera};

export var ambient = new THREE.AmbientLight(0xffffff);

var objects = [];

for(var i = 0; i < 6; i += 1) {
    objects.push(
        new THREE.Mesh(new THREE.SphereGeometry(Math.random() * 10, 50, 50), new THREE.MeshPhongMaterial({color: `rgb(${Math.ceil(Math.random() * 100)}, ${Math.ceil(Math.random() * 100)}, ${Math.ceil(Math.random() * 100)})`}))
    );

    objects[i].position.set((100 * Math.random()) - 50, (100 * Math.random()) - 50, (100 * Math.random()) - 50);
}

export {objects};

export var origin = new THREE.Mesh( new THREE.BoxGeometry(10, 10, 10), new THREE.MeshPhongMaterial({color: 'purple'}));

export var velocity = new THREE.Vector3();
export var direction = new THREE.Vector3();

var w = false;
var s = false;
var a = false;
var d = false;
var up = false;
var down = false;

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
    }
});

export {w, s, a, d, up, down};