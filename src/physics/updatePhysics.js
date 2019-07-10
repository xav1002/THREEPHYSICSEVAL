import {physicsWorld} from './initiatePhysics';
import {transformAssistant} from './physicsConstructor';
import {rigidBodyObjects} from './physicsConstructor';

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
                rigidBodyObjects[i].position.set(position.x(), position.y(), position.z());
                rigidBodyObjects[i].quaternion.set(quaternion.x(), quaternion.y(), quaternion.z(), quaternion.w());
            }
        }
}

export default updatePhysics;