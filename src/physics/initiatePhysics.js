var collisionConfiguration, dispatcher, broadphase, solver, softBodySolver, physicsWorld;

/**
 * initiates physics of the app
 */
function initiatePhysics() {
    collisionConfiguration = new Ammo.btDefaultCollisionConfiguration();
    dispatcher = new Ammo.btCollisionDispatcher(collisionConfiguration);
    broadphase = new Ammo.btDbvtBroadphase();
    solver = new Ammo.btSequentialImpulseConstraintSolver();
    // softBodySolver = new Ammo.btDefaultSoftBodySolver
    physicsWorld = new Ammo.btDiscreteDynamicsWorld(dispatcher, broadphase, solver, collisionConfiguration);
    physicsWorld.setGravity(new Ammo.btVector3(0, 0, 0));
}

export {collisionConfiguration, dispatcher, broadphase, solver, softBodySolver, physicsWorld};

export default initiatePhysics;