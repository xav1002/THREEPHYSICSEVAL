import {pos, qua} from '../physicsConstructor';
import createRigidObjects from '../createRigidObjects';

var origin, originShape;

function createOrigin() {
    var originSize = 1;
    var originMass = originSize * 1000;
    origin = new THREE.Mesh(
        new THREE.BoxGeometry(originSize, originSize, originSize),
        new THREE.MeshPhongMaterial({color: 'purple'})
    );
    origin.name = 'origin';
    originShape = new Ammo.btBoxShape(new Ammo.btVector3(originSize * 0.5, originSize * 0.5, originSize * 0.5));
    pos.set(0, 0, 0);
    qua.set(0, 0, 0, 1);
    createRigidObjects(origin, originShape, originMass, pos, qua);
}

export {origin, originShape};

export default createOrigin;