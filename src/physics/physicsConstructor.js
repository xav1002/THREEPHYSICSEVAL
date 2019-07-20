var pos = new THREE.Vector3();
var qua = new THREE.Quaternion();

export {pos, qua};

var clock = new THREE.Clock();
export {clock};

export var transformAssistant = new Ammo.btTransform();
export var transformAssistantRepulsion = new Ammo.btTransform();
export var transformAssistantAttraction = new Ammo.btTransform();

export var rigidBodyObjects = [];
export var spheres = [];

// px, py, pz, qx, qy, qz, type
// type: normal === 1, start === 2, end === 3
var map = [
    [1, -4, -1, 0, 0, 0, 1],
    [1, -4, 0, 0, 0, 0, 2],
    [1, -4, 1, 0, 0, 0, 3],
    [0, -4, -1, 0, 0, 0, 1],
    [0, -4, 0, 0, 0, 0, 2],
    [0, -4, 1, 0, 0, 0, 3],
    [-1, -4, -1, 0, 0, 0, 1],
    [-1, -4, 0, 0, 0, 0, 2],
    [-1, -4, 1, 0, 0, 0, 3]
];

export {map};

var materialStart = new THREE.MeshPhongMaterial({color: 'rgb(0, 100, 0)'});
var materialEnd = new THREE.MeshPhongMaterial({color: 'rgb(0, 0, 100)'});
var materialNormal = new THREE.MeshPhongMaterial({color: 'rgb(100, 0, 0)'});

export {materialStart, materialEnd, materialNormal};

export var planeSize = 50;

export var startPoint
export var endPoint;