import {pos, qua} from '../physicsConstructor';
import createRigidObjects from '../createRigidObjects';

var plane, planeShape;
function createPlane() {
    var planeW = 10; var planeH = 1; var planeL = 10; var planeMass = 0;
    var planeGeometry = new THREE.BoxGeometry(planeW, planeH, planeL);
    var planeMaterial = new THREE.MeshPhongMaterial({color: '0x00ff00'});
    plane = new THREE.Mesh(planeGeometry, planeMaterial);
    planeShape = new Ammo.btBoxShape(new Ammo.btVector3(planeW * 0.5, planeH * 0.5, planeL * 0.5));
    pos.set(100, 0, 0);
    qua.set(0, 0, 0, 1);
    createRigidObjects(plane, planeShape, planeMass, pos, qua);
}

export {plane, planeShape};

export default createPlane;