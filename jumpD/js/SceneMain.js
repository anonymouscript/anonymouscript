class SceneMain extends Phaser.Scene {
    constructor() {
        super({ key: "scenemain", visible: true });
        scene = this;
    }
    preload() {
        console.log("loading")
        this.player = new Player();
        this.tilemap = new tilemap();
        this.tilemap.loadTilemapForest();
        camera = this.cameras.main;

    }
    create() {

        console.log("Debug: creating")

        this.tilemap.createTilemapForest();





        addPhysics();
        createCamera(); //watch after it is created
    }
    update() {
        updatePhysics();
        cleanPhysics();
    }

}