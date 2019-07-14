import {spheres} from './physicsConstructor';
import {transformAssistant, transformAssistantAttraction} from './physicsConstructor';
import {origin} from './createObjects/createOrigin';

/**
 * attraction function; attraction of the spheres to the origin
 * could also do this function in repulsion.js and work with the numbers instead of having opposing forces? better performace?
 */

function attraction() {
    var originBody = origin.body;
    var originMotionState = originBody.getMotionState();
    originMotionState.getWorldTransform(transformAssistant);

    spheres.forEach(obj => {
        var newRay = new THREE.Ray();
        var newSphereMotionState = obj.body.getMotionState();
        newSphereMotionState.getWorldTransform(transformAssistantAttraction);
        var position = transformAssistantAttraction.getOrigin();
        var objectPosition = new THREE.Vector3(position.x(), position.y(), position.z());
        objectPosition.normalize();
        newRay.lookAt(objectPosition);
        var originPos = transformAssistant.getOrigin();
        newRay.origin = new THREE.Vector3(originPos.x(), originPos.y(), originPos.z());
        var magnitude = newRay.distanceSqToPoint(new THREE.Vector3(origin.position.x, origin.position.y, origin.position.z)) * 10000;
        console.log(magnitude);
        obj.body.applyCentralImpulse(new Ammo.btVector3(newRay.direction.x * magnitude, newRay.direction.y * magnitude, newRay.direction.z * magnitude));
    });
}

export default attraction;