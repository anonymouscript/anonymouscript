class tilemap {
    //scene accessed via globals. Here I prefer Globals over membership
    constructor() {;
        this.dimentionNum = 2;
        this.activeAlpha = 1;
        this.inactiveAlpha = 0.3;
    }
    loadTilemapForest() {
        scene.load.image("forestTiles_extruded", "assets/CC0/Forest_extruded.png");
        scene.load.tilemapTiledJSON('forestTilemap', "assets/CC0/Forest.json");
    }
    createTilemapForest() {
        this.map = scene.make.tilemap({ key: 'forestTilemap' });
        //reminder            Tileset Name in Tiled |        | image Name
        //                                          v        v
        this.tileset = this.map.addTilesetImage('Forest', 'forestTiles_extruded', 16, 16, 1, 2);
        this.background = this.map.createLayer('BackGround', this.tileset);
        this.Layer1 = this.map.createLayer('Ground1', this.tileset);
        this.Layer1.alpha = 1;
        this.Layer2 = this.map.createLayer('Ground2', this.tileset);
        this.Layer2.alpha = 0.3;
        console.log(this.Layer1)
        this.Decor = this.map.createLayer('Decor', this.tileset);
        this.activeLayer = this.Layer1;

        scene.physics.world.setBounds(0, 0, this.map.widthInPixels, this.map.heightInPixels);

        this.layers = [this.Layer1, this.Layer2];
        this.activeLayer = 0;

    }
    createPhysics() {
        this.map.setCollisionByExclusion(-1, true, true, this.Layer1);
        this.map.setCollisionByExclusion(-1, true, true, this.Layer2);

        let c1 = scene.physics.add.collider(this.Layer1, player);
        let c2 = scene.physics.add.collider(this.Layer2, player);
        c2.active = false;
        this.colliders = [c1, c2];
    }
    swapLayers() {
        let currentCollider = this.colliders[this.activeLayer];
        let currentLayer = this.layers[this.activeLayer];

        this.activeLayer = (this.activeLayer + 1) % 2;

        let newCollider = this.colliders[this.activeLayer];
        let newLayer = this.layers[this.activeLayer];

        currentCollider.active = false;
        newCollider.active = true;

        currentLayer.setAlpha(this.inactiveAlpha);
        newLayer.setAlpha(this.activeAlpha);

    }
    updatePhysics() {

    }
}