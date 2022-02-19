var camera;

function createCamera() {
    camera.setZoom(2);
    camera.startFollow(player);
    camera.setBounds(0, 0, scene.tilemap.width, scene.tilemap.height);
}