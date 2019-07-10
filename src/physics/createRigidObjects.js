import {scene} from '../constructor';
import {physicsWorld} from './initiatePhysics';
import {rigidBodyObjects} from './physicsConstructor';

/**
 * creates rigid body object
 */
function createRigidObjects(object, shape, mass, position, quaternion) {
    object.position.copy(position);
    object.quaternion.copy(quaternion);
    var transform = new Ammo.btTransform();
    transform.setIdentity();
    transform.setOrigin(new Ammo.btVector3(position.x, position.y, position.z));
    transform.setRotation(new Ammo.btQuaternion(quaternion.x, quaternion.y, quaternion.z, quaternion.w));
    var motionState = new Ammo.btDefaultMotionState(transform);
    var inertia = new Ammo.btVector3(0, 0, 0);
    shape.calculateLocalInertia(mass, inertia);
    var rigidBodyInfo = new Ammo.btRigidBodyConstructionInfo(mass, motionState, shape, inertia);
    var rigidBody = new Ammo.btRigidBody(rigidBodyInfo);
    object.body = rigidBody;
    scene.add(object);
    if(mass > 0) {
        rigidBodyObjects.push(object);
    }
    physicsWorld.addRigidBody(rigidBody);
}

export default createRigidObjects;