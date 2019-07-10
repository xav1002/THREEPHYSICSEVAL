import {xP, xN, yP, yN, zP, zN} from '../constructor';
import {plane} from './createObjects/createPlane';
import {axisX, axisZ} from '../constructor';

function movePlane() {
    // console.log(plane);
    if(xP) {
        plane.rotation.x += .001;
        plane.body.setAngularVelocity(new Ammo.btVector3(plane.body.getAngularVelocity().x() + axisX, plane.body.getAngularVelocity().y(), plane.body.getAngularVelocity().z() + axisZ));
    } else if(xN) {
        plane.rotation.x -= .001;
        plane.body.setAngularVelocity(new Ammo.btVector3(plane.body.getAngularVelocity().x() + axisX, plane.body.getAngularVelocity().y(), plane.body.getAngularVelocity().z() + axisZ));
    } else if(yP) {
        plane.rotation.y += .001;
        plane.body.setAngularVelocity(new Ammo.btVector3(plane.body.getAngularVelocity().x() + axisX, plane.body.getAngularVelocity().y(), plane.body.getAngularVelocity().z() + axisZ));
    } else if(yN) {
        plane.rotation.y -= .001;
        plane.body.setAngularVelocity(new Ammo.btVector3(plane.body.getAngularVelocity().x() + axisX, plane.body.getAngularVelocity().y(), plane.body.getAngularVelocity().z() + axisZ));
    } else if(zP) {
        plane.rotation.z += .001;
        plane.body.setAngularVelocity(new Ammo.btVector3(plane.body.getAngularVelocity().x() + axisX, plane.body.getAngularVelocity().y(), plane.body.getAngularVelocity().z() + axisZ));
    } else if(zN) {
        plane.rotation.z -= .001;
        plane.body.setAngularVelocity(new Ammo.btVector3(plane.body.getAngularVelocity().x() + axisX, plane.body.getAngularVelocity().y(), plane.body.getAngularVelocity().z() + axisZ));
    }
}

export default movePlane;