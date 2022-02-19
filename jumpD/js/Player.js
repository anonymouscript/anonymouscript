var player;
class Player {
    constructor() {
        //load phase

        scene.load.spritesheet("dino", "assets/CC0/characters.png", {
            frameWidth: 32,
            frameHeight: 32
        });
        this.keys = makeKeys(['w', 'a', 's', 'd', 'j']);

        this.drag = 300;
        this.maxVelocityX = 180;

        this.cursors = scene.input.keyboard.createCursorKeys();

    }
    addPhysics() {
        player = scene.physics.add.sprite(100, 428, "dino");
        this.sprite = player;

        console.log("add physics player");
        player.setMaxVelocity(this.maxVelocityX, 1000);
        player.setDragX(this.drag);

        player.setSize(16, 30);
        player.setCollideWorldBounds(true);

        for (let i = 0; i < animations.length; i++) {
            const animation = animations[i];
            console.log(player.anims.create(animation));
        }
        scene.input.keyboard.on("keyup", this.onKeyUp);



    }
    onKeyUp(event) {
        if (event.keyCode == Phaser.Input.Keyboard.KeyCodes.J) {
            scene.tilemap.swapLayers();
        }
    }
    updatePhysics() {
        if (player.body.onFloor()) {
            player.setDragX(this.drag);
        } else {
            player.setDragX(0);
        }
        let downKeys = getKeysDown(this.keys);
        let up = false;
        let down = false;
        let left = false;
        let right = false;
        let keys = this.keys;
        for (var i in downKeys) {
            switch (downKeys[i]) {
                case keys.w:
                    up = true;
                    break;
                case keys.a:
                    left = true;
                case keys.d:
                    right = true;
                case keys.s:
                    down = true;
                default:
                    break;
            }
        }


        let cursors = this.cursors;
        if (cursors.left.isDown || left) {
            player.setAccelerationX(-180);
            player.anims.play('walk', true);
            player.flipX = true;

        } else if (cursors.right.isDown || right) {
            player.setAccelerationX(180);
            player.play('walk', true);
            player.flipX = false;

        } else {
            player.setAccelerationX(0);

            player.stop();

        }


        if ((cursors.up.isDown || up) && player.body.onFloor()) {
            player.setVelocityY(-170);
        }



    }

}