import {spheres} from './physicsConstructor';
import {transformAssistant, transformAssistantRepulsion} from './physicsConstructor';

/**
 * simulating repulsion between the spheres
 * may have issue with the spheres array
 */

function repulsion() {
    var speed = 10;
    var dir = 1;
    spheres.forEach(obj => {
        var otherObj = [];
        var xComponent = [];
        var yComponent = [];
        var zComponent = [];
        var xMean = 0;
        var yMean = 0;
        var zMean = 0;
        var body = obj.body;
        var motionState = body.getMotionState();
        motionState.getWorldTransform(transformAssistant);

            for(var i = 0; i < spheres.length; i += 1) {
                if(obj.uuid !== spheres[i].uuid) {
                    var newRay = new THREE.Ray();
                    newRay.origin = new THREE.Vector3(transformAssistant.getOrigin().x(), transformAssistant.getOrigin().y(), transformAssistant.getOrigin().z());
                    var newMotionState = spheres[i].body.getMotionState();
                    newMotionState.getWorldTransform(transformAssistantRepulsion);
                    var direction = new THREE.Vector3(transformAssistantRepulsion.getOrigin().x(), transformAssistant.getOrigin().y(), transformAssistant.getOrigin().z());
                    direction.normalize();
                    newRay.lookAt(direction);
                    // console.log(newRay.origin, newRay.direction);
                    otherObj.push(newRay);
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
            zMean = zMean / zComponent.length;

            // console.log(otherObj);

            body.setLinearVelocity(new Ammo.btVector3(dir * xMean * speed, dir * yMean * speed, dir * zMean * speed));
    });
}

export default repulsion;