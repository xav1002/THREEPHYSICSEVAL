var pos = new THREE.Vector3();
var qua = new THREE.Quaternion();

export {pos, qua};

var clock = new THREE.Clock();
export {clock};

export var transformAssistant = new Ammo.btTransform();

export var rigidBodyObjects = [];

// px, py, pz, qx, qy, qz, type
// type: normal === 1, start === 2, end === 3
var map = [
    [0, 0, 0, 0, 0, 0, 2],
    [0, 0, 1, 0, 0, 0, 1],
    [1, 0, 1, 0, 0, 0, 1],
    [1, 0, 2, 15 / 60, 0, 0, 1],
    [1, 0, 3, 0, 0, 0, 3]
];

export {map};