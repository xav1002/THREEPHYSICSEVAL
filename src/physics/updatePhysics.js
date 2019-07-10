import {physicsWorld} from './initiatePhysics';
import {transformAssistant} from './physicsConstructor';
import {rigidBodyObjects} from './physicsConstructor';
import {axisX, axisZ} from '../constructor';

/**
 * physics animation
 */
function updatePhysics(deltaTime) {
    physicsWorld.stepSimulation(deltaTime, 10);
    for(var i = 0, j = rigidBodyObjects.length; i < j; i += 1) {
            var objectBody = rigidBodyObjects[i].body;
            var motionState = objectBody.getMotionState();
            if(motionState) {
                motionState.getWorldTransform(transformAssistant);
                var position = transformAssistant.getOrigin();
                var quaternion = transformAssistant.getRotation();
                if(rigidBodyObjects[i].name === 'player') {
                    objectBody.setAngularVelocity(new Ammo.btVector3(objectBody.getAngularVelocity().x() + axisX, objectBody.getAngularVelocity().y(), objectBody.getAngularVelocity().z() + axisZ));
                    objectBody.setLinearVelocity(new Ammo.btVector3(objectBody.getLinearVelocity().x() + axisX, objectBody.getLinearVelocity().y(), objectBody.getLinearVelocity().z() + axisZ));
                    console.log(objectBody.getAngularVelocity().x(), objectBody.getLinearVelocity().x());
                }
                rigidBodyObjects[i].position.set(position.x(), position.y(), position.z());
                rigidBodyObjects[i].quaternion.set(quaternion.x(), quaternion.y(), quaternion.z(), quaternion.w());
            }
        }
}

export default updatePhysics;