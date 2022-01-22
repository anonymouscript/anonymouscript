class SceneMain extends Phaser.Scene {
    constructor() {
        super("SceneMain");
    }
    preload() {
        console.log("loading")
        this.load.image("dirt", "assets/DirtTile.png");
        this.load.image("grass", "assets/DirtTile.png");
        this.load.spritesheet("dino", "assets/CC0/characters.png", {
            frameWidth: 32,
            frameHeight: 32
        });
        this.tilemap = new tilemap(this)
        this.tilemap.loadTilemapForest()
    }
    create() {
        /*this.anims.create({
            key: "right",
            frames: this.anims.generateFrameNumbers('dino', {
                start: 0,
                end: 3
            }),
            repeat: -1
        });*/
        console.log("Debug: creating")

        this.tilemap.createTilemapForest();
        player = this.physics.add.sprite(100, 428, "dino");



        addPhysics(this);
    }
    update() {
        //updatePhysics(this);
    }

}