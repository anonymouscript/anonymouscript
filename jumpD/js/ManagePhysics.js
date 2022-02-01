function addPhysics() {
    scene.player.addPhysics();
    scene.tilemap.createPhysics();

}

function updatePhysics() {
    scene.player.updatePhysics();
    scene.tilemap.updatePhysics();

}
function cleanPhysics(){
    scene.tilemap.cleanPhysics();
    scene.player.cleanPhysics();
}