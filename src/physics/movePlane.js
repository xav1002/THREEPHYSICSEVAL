import {xP, xN, yP, yN, zP, zN} from '../graphicsConstructor';
import {plane} from './createObjects/createPlane';
import {axisX, axisZ} from '../graphicsConstructor';

function movePlane() {
    // console.log(plane);
    console.log(axisX, axisZ);
    if(xP) {
        plane.rotation.x += .01;
    } else if(xN) {
        plane.rotation.x -= .01;
    } else if(yP) {
        plane.rotation.y += .01;
    } else if(yN) {
        plane.rotation.y -= .01;
    } else if(zP) {
        plane.rotation.z += .01;
    } else if(zN) {
        plane.rotation.z -= .01;
    }
    plane.body.setAngularVelocity(new Ammo.btVector3(plane.body.getAngularVelocity().x() + axisX, plane.body.getAngularVelocity().y(), plane.body.getAngularVelocity().z() + axisZ));
    console.log(plane.body.getAngularVelocity().x(), plane.body);
}

export default movePlane;