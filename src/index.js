import {scene} from './constructor';
import {camera} from './constructor';
import {renderer} from './constructor';
import {ambient} from './constructor';
import {objects} from './constructor';
import {controls} from './constructor';
import {origin} from './constructor';
import animate from './animate';

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

    animate();
}

init();