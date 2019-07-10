import {renderer} from './constructor';
import {scene} from './constructor';
import {camera} from './constructor';
import {clock} from './physics/physicsConstructor';
import moveCamera from './moveCamera';
import updatePhysics from './physics/updatePhysics';

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
    
    var deltaTime = clock.getDelta();
    updatePhysics(deltaTime);

    prevTime = time;

    moveCamera(delta);

    renderer.render(scene, camera);
}

export default animate;