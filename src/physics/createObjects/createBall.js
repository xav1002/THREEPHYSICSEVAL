import {pos, qua} from '../physicsConstructor';
import createRigidObjects from '../createRigidObjects';

var ball;

function createBall(ballRadius, ballPos) {
    // var ballRadius = 1;
    var ballSegment = 30;
    // var ballMass = 20;
    ball = new THREE.Mesh(
        new THREE.SphereGeometry(ballRadius, ballSegment, ballSegment),
        new THREE.MeshPhongMaterial({color: 'red'})
    );
    ball.name = 'ball';
    var ballShape = new Ammo.btSphereShape(ballRadius);
    pos.set(ballPos.x, ballPos.y, ballPos.z);
    // console.log(pos);
    qua.set(0, 0, 0, 1);
    createRigidObjects(ball, ballShape, ballRadius * 2, pos, qua);
}

export {ball};

export default createBall;