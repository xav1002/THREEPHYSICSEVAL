import {scene} from './constructor';
import {camera} from './constructor';
import {renderer} from './constructor';
import {ambient} from './constructor';
import {objects} from './constructor';
import {controls} from './constructor';
import {origin} from './constructor';
import animate from './animate';
import initiatePhysics from './physics/initiatePhysics';
import createBall from './physics/createObjects/createBall';
import createPlane from './physics/createObjects/createPlane';

/**
 * used to initiate the scene, and add all the parts
 */

function init() {
    scene.add(ambient);

    scene.add(controls.getObject());

    scene.add(origin);

    objects.forEach(object => {
        scene.add(object);
    });

    initiatePhysics();

    createBall();

    createPlane();

    animate();
}

init();