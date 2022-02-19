function addPhysics() {
    scene.player.addPhysics();
    scene.tilemap.createPhysics();

}

function updatePhysics() {
    scene.player.updatePhysics();
    scene.tilemap.updatePhysics();

}