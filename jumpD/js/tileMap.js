class tilemap {
    //dummy class, methods should be bound to scene
    constructor(scene) {
        this.scene = scene;
        this.dimentionNum = 2;
    }
    loadTilemapForest() {
        this.scene.load.image("forestTiles", "assets/CC0/Forest.png");
        this.scene.load.tilemapTiledJSON('forestTilemap', "assets/CC0/Forest.json");
    }
    createTilemapForest() {
        this.map = this.scene.make.tilemap({ key: 'forestTilemap' });
        //reminder            Tileset Name in Tiled |        | image Name
        //                                          v        v
        this.tileset = this.map.addTilesetImage('Forest', 'forestTiles');
        this.background = this.map.createLayer('BackGround', this.tileset);
        this.Layer1 = this.map.createLayer('Ground1', this.tileset);
        this.Layer1.alpha = 0.9;
        this.Layer2 = this.map.createLayer('Ground2', this.tileset);
        this.Layer2.alpha = 0.3;
        console.log(this.Layer1)
        this.Decor = this.map.createLayer('Decor', this.tileset);
        this.activeLayer = this.Layer1;


        if (this.layers) {
            this.layers.append(this.Layer1, this.Layer2)
        } else {
            this.layers = [this.Layer1, this.Layer2]
        }

    }
    createPhysics() {
        this.map.setCollisionByExclusion(-1, true, true, this.Layer1);
        this.scene.physics.add.collider(this.Layer1, player);
    }
    updatePhysics() {

    }
}