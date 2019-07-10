import {renderer} from './constructor';
import {scene} from './constructor';
import {camera} from './constructor';
import moveCamera from './moveCamera';

/**
 * this is the animate function, called to interate new frames
 * also calls the moveCamera function
 */

var prevTime = performance.now();

function animate() {
    requestAnimationFrame(function() {
        animate();
    });

    var time = performance.now();
    var delta = (time - prevTime) / 1000;
    // console.log(delta);

    prevTime = time;

    moveCamera(delta);

    renderer.render(scene, camera);
}

export default animate;