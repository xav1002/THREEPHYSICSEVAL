import {physicsWorld} from './initiatePhysics';
import {transformAssistant} from './physicsConstructor';
import {rigidBodyObjects} from './physicsConstructor';
import {axisX, axisZ} from '../graphicsConstructor';
import repulsion from './repulsion';
import attraction from './attraction';

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
                // if(rigidBodyObjects[i].name === 'player') {
                //     objectBody.setAngularVelocity(new Ammo.btVector3(objectBody.getAngularVelocity().x() + (5 * axisX), objectBody.getAngularVelocity().y(), objectBody.getAngularVelocity().z() + (5 * axisZ)));
                //     objectBody.setLinearVelocity(new Ammo.btVector3(objectBody.getLinearVelocity().x() + (5 * axisX), objectBody.getLinearVelocity().y(), objectBody.getLinearVelocity().z() + (5 * axisZ)));
                //     // console.log(objectBody.getLinearVelocity().x());
                //     // console.log(objectBody.getLinearVelocity().z());
                // }
                rigidBodyObjects[i].position.set(position.x(), position.y(), position.z());
                rigidBodyObjects[i].quaternion.set(quaternion.x(), quaternion.y(), quaternion.z(), quaternion.w());
            }
        }
        // repulsion();
        attraction();
        // rigidBodyObjects[4].body.applyCentralImpulse(new Ammo.btVector3(0, 100, 0));
}

export default updatePhysics;