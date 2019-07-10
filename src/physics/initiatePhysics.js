var collisionConfiguration, dispatcher, broadphase, solver, softBodySolver, physicsWorld;

/**
 * initiates physics of the app
 */
function initiatePhysics() {
    collisionConfiguration = new Ammo.btSoftBodyRigidBodyCollisionConfiguration();
    dispatcher = new Ammo.btCollisionDispatcher(collisionConfiguration);
    broadphase = new Ammo.btDbvtBroadphase();
    solver = new Ammo.btSequentialImpulseConstraintSolver();
    softBodySolver = new Ammo.btDefaultSoftBodySolver
    physicsWorld = new Ammo.btSoftRigidDynamicsWorld(dispatcher, broadphase, solver, collisionConfiguration, softBodySolver);
    physicsWorld.setGravity(new Ammo.btVector3(0, -9.81, 0));
    physicsWorld.getWorldInfo().set_m_gravity(new Ammo.btVector3(0, -1, 0));
}

export {collisionConfiguration, dispatcher, broadphase, solver, softBodySolver, physicsWorld};

export default initiatePhysics;