import {pos, qua} from '../physicsConstructor';
import createRigidObjects from '../createRigidObjects';

var ball;

function createBall() {
    var ballRadius = 1;
    var ballSegment = 30;
    var ballMass = 20;
    ball = new THREE.Mesh(
        new THREE.SphereGeometry(ballRadius, ballSegment, ballMass),
        new THREE.MeshPhongMaterial({color: 'red'})
    );
    ball.name = 'player';
    var ballShape = new Ammo.btSphereShape(ballRadius);
    pos.set(100, 40, 0);
    qua.set(0, 0, 0, 1);
    createRigidObjects(ball, ballShape, ballMass, pos, qua);
}

export {ball};

export default createBall;