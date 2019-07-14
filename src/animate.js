import {renderer} from './graphicsConstructor';
import {scene} from './graphicsConstructor';
import {camera} from './graphicsConstructor';
import {clock} from './physics/physicsConstructor';
import moveCamera from './moveCamera';
import updatePhysics from './physics/updatePhysics';
import {controls} from './graphicsConstructor';
import {origin} from './physics/createObjects/createOrigin';
import repulsion from './physics/repulsion';

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

    // controls.update();

    renderer.render(scene, camera);
}

export default animate;