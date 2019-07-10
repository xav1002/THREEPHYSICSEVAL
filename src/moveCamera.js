import {controls} from './constructor';
import {velocity} from './constructor';
import {direction} from './constructor';
import {w, s, a, d, up, down} from './constructor';

/**
 * 
 * @param {number} delta; this time helps make the translation of the camera more smooth
 * this funciton moves the camera
 * based on the direction and magnitude of the camera's motion
 */

function moveCamera(delta) {
    velocity.x -= velocity.x * 7.5 * delta;
    velocity.y -= velocity.y * 7.5 * delta;
    velocity.z -= velocity.z * 7.5 * delta;

    direction.z = Number(w) - Number(s);
    direction.x = Number(a) - Number(d);
    direction.y = Number(up) - Number(down);
    direction.normalize();

    // console.log(direction.z, direction.x, direction.y);

    if(w || s) {
        velocity.z -= direction.z * 4000 * delta;
    }
    if(a || d) {
        velocity.x -= direction.x * 4000 * delta;
    }
    if(up || down) {
        velocity.y += direction.y * 4000 * delta;
    }

    controls.getObject().translateX(velocity.x * delta);
    controls.getObject().translateY(velocity.y * delta);
    controls.getObject().translateZ(velocity.z * delta);

    // console.log(delta, controls.getObject().position);
    // console.log(w,a,s,d,up,down);
}

export default moveCamera;