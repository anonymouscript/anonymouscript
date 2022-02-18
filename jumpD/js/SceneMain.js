class SceneMain extends Phaser.Scene {
    constructor() {
        super("SceneMain");
    }
    preload() {
        console.log("loading")
        this.load.image("dirt", "assets/DirtTile.png");
        this.load.image("grass", "assets/DirtTile.png");
        this.player = new Player(this);
        this.tilemap = new tilemap(this);
        this.tilemap.loadTilemapForest();
        camera = this.cameras.main;
    }
    create() {

        console.log("Debug: creating")

        this.tilemap.createTilemapForest();





        addPhysics(this);
        createCamera(); //watch after it is created
    }
    update() {
        updatePhysics(this);
    }

}