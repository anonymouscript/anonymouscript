var player;
class Player {
    constructor() {
        //load phase

        scene.load.spritesheet("dino", "assets/CC0/characters.png", {
            frameWidth: 32,
            frameHeight: 32
        });
        this.keys = makeKeys(scene);


        this.cursors = scene.input.keyboard.createCursorKeys();

    }
    addPhysics() {
        player = scene.physics.add.sprite(100, 428, "dino");
        this.sprite = player;

        console.log("add physics player");
        player.setMaxVelocity(180, 1000);
        player.setDrag(0.50, 0.50)
        player.setSize(16, 30);
        player.setCollideWorldBounds(true);

        for (let i = 0; i < animations.length; i++) {
            const animation = animations[i];
            console.log(player.anims.create(animation));
        }




    }
    updatePhysics() {
        let cursors = this.cursors;
        if (cursors.left.isDown) {
            player.setAccelerationX(-180);
            player.anims.play('walk', true);
            player.flipX = true;

        } else if (cursors.right.isDown) {
            player.setAccelerationX(180);
            player.play('walk', true);
            player.flipX = false;
            //player.anims.play('right', true);
        } else {
            player.setAccelerationX(0)
            player.stop();

        }


        if (cursors.up.isDown && player.body.onFloor()) { //&& player.body.touching.down
            player.setVelocityY(-170);
        }



    }

}