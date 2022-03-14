class FirstScreen extends Phaser.Scene {
    constructor() {
        super("FirstScreen");
        this.style = {
            fontFace: "libreBaskerville",
            fontSize: "75px"
        };

    }
    preload() {
        console.log("preload")
        this.centerX = config.width / 2;
        this.centerY = config.height / 2;
        var LibreBaskerville = new FontFace("LibreBaskerville", `url(assets/fonts/Libre-Baskerville/LibreBaskerville-Regular.ttf)`)
    }
    startPointerDown() {
        this.startTween.resume();
        console.log("start tween")
    }
    activateSceneMain() {
        console.log('activate scene')
        this.scene.launch('scenemain')
            //this.scene.add(scene);

        //this.scene.start("scenemain");
        //this.scene.pause();
    }
    create() {
        //this.scene.add("SceneMain")
        let start = this.add.text(this.centerX, this.centerY * 0.95, "Start", this.style);
        start.setOrigin(0.5, 0.5);
        start.setInteractive();
        start.on('pointerdown', this.startPointerDown, this);
        this.startTween = this.tweens.add({
            targets: [start],
            duration: 1000,
            alpha: 0,
            paused: true,
            ease: "power0",
            onComplete: this.activateSceneMain.bind(this)

        });



    }
    update() {

    }

}