import {scene} from './graphicsConstructor';
import {camera} from './graphicsConstructor';
import {renderer} from './graphicsConstructor';
import {ambient} from './graphicsConstructor';
import {controls} from './graphicsConstructor';
import animate from './animate';
import initiatePhysics from './physics/initiatePhysics';
import createBall from './physics/createObjects/createBall';
import createMap from './physics/createObjects/createMap';
import {map} from './physics/physicsConstructor';
import createOrigin, {origin} from './physics/createObjects/createOrigin';
import repulsion from './physics/repulsion';
import {spheres} from './physics/physicsConstructor';

/**
 * used to initiate the scene, and add all the parts
 */

function init() {
    scene.add(ambient);

    controls.getObject().position.set(0, 0, 100);
    scene.add(controls.getObject());

    // controls.update();

    initiatePhysics();

    createMap(map);
    createOrigin();

    var startingPosition = 2;

    for(var i = 0; i < 6; i += 1) {
        var location = new THREE.Vector3((Math.random() * startingPosition) - (startingPosition / 2), (Math.random() * startingPosition) - (startingPosition / 2), (Math.random() * startingPosition) - (startingPosition / 2));
        createBall(Math.random() * 10, location);
    }

    window.addEventListener('keydown', function(e) {
        // updatePhysics aquires a hidden module when the launchBall.js was created?
        this.console.log(e.keyCode);
    });

    animate();
}

export default init;