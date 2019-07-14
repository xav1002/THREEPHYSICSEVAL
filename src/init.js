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

    var startingPosition = 100;

    for(var i = 0; i < 6; i += 1) {
        var location = new THREE.Vector3((Math.random() * startingPosition) - (startingPosition / 2), (Math.random() * startingPosition) - (startingPosition / 2), (Math.random() * startingPosition) - (startingPosition / 2));
        createBall(Math.random() * 10, location);
    }

    console.log(origin);

    window.addEventListener('keydown', function(e) {
        if(e.keyCode === 67) {
            origin.body.activate(true);
            origin.body.applyImpulse(100, new Ammo.btTransform(0, 0, 1));
            this.console.log(origin.body, origin.body.isActive(), origin.body.getWorldTransform());
        }
    })

    var testRay = new THREE.Ray();
    testRay.origin = new THREE.Vector3(0, 0, 0);
    testRay.lookAt(new THREE.Vector3(1, 1, 1));
    console.log(testRay);

    animate();

    // var testTransforma = new Ammo.btTransform();
    // var testTransformb = new Ammo.btTransform();
    // var testTransformc = new Ammo.btTransform();
    // var testTransformd = new Ammo.btTransform();
    // var testTransforme = new Ammo.btTransform();
    // var testTransformf = new Ammo.btTransform();


    // spheres[0].body.getMotionState().getWorldTransform(testTransforma)
    // spheres[1].body.getMotionState().getWorldTransform(testTransformb)
    // spheres[2].body.getMotionState().getWorldTransform(testTransformc)
    // spheres[3].body.getMotionState().getWorldTransform(testTransformd)
    // spheres[4].body.getMotionState().getWorldTransform(testTransforme)
    // spheres[5].body.getMotionState().getWorldTransform(testTransformf)

    // console.log(
    //     testTransforma,
    //     testTransformb.getOrigin().x(),
    //     testTransformc.getOrigin().x(),
    //     // testTransformd.getOrigin().x(),
    //     // testTransforme.getOrigin().x(),
    //     // testTransformf.getOrigin().x(),

    //     testTransforma.getOrigin().y(),
    //     testTransformb.getOrigin().y(),
    //     testTransformc.getOrigin().y(),
    //     // testTransformd.getOrigin().y(),
    //     // testTransforme.getOrigin().y(),
    //     // testTransformf.getOrigin().y(),

    //     testTransforma.getOrigin().z(),
    //     testTransformb.getOrigin().z(),
    //     testTransformc.getOrigin().z()
    //     // testTransformd.getOrigin().z(),
    //     // testTransforme.getOrigin().z(),
    //     // testTransformf.getOrigin().z()
    // )
}

export default init;