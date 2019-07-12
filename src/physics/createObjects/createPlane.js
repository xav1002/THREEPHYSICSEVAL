import {pos, qua, planeSize} from '../physicsConstructor';
import createRigidObjects from '../createRigidObjects';

var plane, planeShape;
function createPlane(px, py, pz, qx, qy, qz, planeMaterial) {
    var planeW = planeSize; var planeH = 1; var planeL = planeSize; var planeMass = 0;
    var planeGeometry = new THREE.BoxGeometry(planeW, planeH, planeL);
    plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.name = 'plane';
    planeShape = new Ammo.btBoxShape(new Ammo.btVector3(planeW * 0.5, planeH * 0.5, planeL * 0.5));
    pos.set((px * planeSize), py * planeSize, pz * planeSize);
    qua.set(qx, qy, qz, 1);
    createRigidObjects(plane, planeShape, planeMass, pos, qua);
    return plane;
}

export {plane, planeShape};

export default createPlane;