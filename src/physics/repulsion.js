import {spheres} from './physicsConstructor';
import {transformAssistant, transformAssistantRepulsion} from './physicsConstructor';

/**
 * simulating repulsion between the spheres
 * may have issue with the spheres array
 * add factor for decreasing impulse amount with distance increase
 */

function repulsion() {
    var magnitude = 1;
    spheres.forEach(obj => {
        var otherObj = [];
        var xComponent = [];
        var yComponent = [];
        var zComponent = [];
        var xMean = 0;
        var yMean = 0;
        var zMean = 0;
        var body = obj.body;
        var bodyMotionState = body.getMotionState();
        bodyMotionState.getWorldTransform(transformAssistant);
        // console.log(transformAssistant.getOrigin().x(), transformAssistant.getOrigin().y(), transformAssistant.getOrigin().z());

        if(bodyMotionState) {
            for(var i = 0; i < spheres.length; i += 1) {
                if(obj.uuid !== spheres[i].uuid) {
                    var newRay = new THREE.Ray();
                    newRay.origin = new THREE.Vector3(transformAssistant.getOrigin().x(), transformAssistant.getOrigin().y(), transformAssistant.getOrigin().z());
                    var newBodyMotionState = spheres[i].body.getMotionState();
                    newBodyMotionState.getWorldTransform(transformAssistantRepulsion);
                    var position = transformAssistantRepulsion.getOrigin();
                    var direction = new THREE.Vector3(position.x(), position.y(), position.z());
                    // direction.normalize();
                    newRay.lookAt(direction);
                    // console.log(newRay.origin, newRay.direction);
                    otherObj.push(newRay);
                }
            }
        }

            otherObj.forEach(ray => {
                xComponent.push(ray.direction.x);
                yComponent.push(ray.direction.y);
                zComponent.push(ray.direction.z);
            });

            for(var i = 0; i < xComponent.length; i += 1) {
                xMean = xMean + xComponent[i];
                yMean = yMean + yComponent[i];
                zMean = zMean + zComponent[i];
            }

            xMean = xMean / xComponent.length;
            yMean = yMean / xComponent.length;
            zMean = zMean / xComponent.length;

            // console.log(otherObj);

            // body.setLinearVelocity(new Ammo.btVector3((xMean) * magnitude, (yMean) * magnitude, (zMean) * magnitude));
            body.applyCentralImpulse(new Ammo.btVector3((xMean) * magnitude, (yMean) * magnitude, (zMean) * magnitude));
    });
}

export default repulsion;