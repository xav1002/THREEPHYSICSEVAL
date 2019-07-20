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

    // var originPosition = new THREE.Vector3(origin.position.x, origin.position.y, origin.position.z);

    spheres.forEach(obj => {
        var newRay = new THREE.Ray();
        newRay.origin = new THREE.Vector3(transformAssistant.getOrigin().x(), transformAssistant.getOrigin().y(), transformAssistant.getOrigin().z());
        var newSphereMotionState = obj.body.getMotionState();
        newSphereMotionState.getWorldTransform(transformAssistantAttraction);
        var position = transformAssistantAttraction.getOrigin();
        var direction = new THREE.Vector3(position.x(), position.y(), position.z());
        // direction.normalize();
        newRay.lookAt(direction);
        var magnitude = direction.distanceTo(newRay.origin);
        // console.table(magnitude, newRay);
        obj.body.applyCentralImpulse(new Ammo.btVector3(-newRay.direction.x * magnitude, -newRay.direction.y * magnitude, -newRay.direction.z * magnitude));
    });
}

export default attraction;