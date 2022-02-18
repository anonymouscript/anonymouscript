function addPhysics(scene) {
    scene.player.addPhysics();
    scene.tilemap.createPhysics();

}

function updatePhysics(scene) {
    scene.player.updatePhysics();
    scene.tilemap.updatePhysics();

}