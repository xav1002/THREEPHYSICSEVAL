import createRigidObjects from '../createRigidObjects';
import {camera} from '../../graphicsConstructor';
import { physicsWorld } from '../initiatePhysics';

var cameraShape;

function createCameraObj() {
    cameraShape = new Ammo.btSphereShape(5);
    var transform = new Ammo.btTransform();
    transform.setIdentity();
    var position = new THREE.Vector3(camera.position.x, camera.position.y, camera.postion.z);
    transform.setOrigin(new Ammo.btVector3(position.x, position.y, position.z));
    transform.setRotation(new Ammo.btQuaternion(0, 0, 0, 1));
    var motionState = new Ammo.btDefaultMotionState(transform);
    var inertia = new Ammo.btVector3(0, 0, 0);
    cameraShape.calculateLocalInertia(0, inertia);
    var rigidBodyInfo = new Ammo.btRigidBodyConstructionInfo(0, motionState, cameraShape, inertia);
    var rigidBody = new Ammo.btRigidBody(rigidBodyInfo);
    physicsWorld.addRigidBody(rigidBody); 
}

export {cameraShape};

export default createCameraObj;