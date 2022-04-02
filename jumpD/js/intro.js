var component;
class FirstScreen extends Phaser.Scene {
    constructor() {
        super("FirstScreen");

        this.style = {
            fontFace: "libreBaskerville",
            fontSize: "75px",
            wordWrap: {
                width: 670,
                advanced: false
            }
        };
    }
    preload() {
        console.log("preload")
        new FontFace("LibreBaskerville", `url(assets/fonts/Libre-Baskerville/LibreBaskerville-Regular.ttf)`)
    }
    next() {
        let nextComponent = this.componentQueue.next();
        nextComponent.start();
        component = nextComponent;
    }
    create(data) {
        this.listener = new Listener2();
        let smallTS = {
            fontFace: "libreBaskerville",
            fontSize: "30px",
            wordWrap: {
                width: 670,
                advanced: false
            }
        }
        let next = this.next.bind(this);
        new Button(this, next, "Start", { autostart: true, style: this.style }) //auto start
        this.componentQueue = new Queue2([
            new textScroll(this, next, `I have a fear of growing up. A fear of <1000>being<150> imprissoned<100> by social expectation, <1000>losing my freedom.`
                , { style: smallTS, x: 10, y: 10 }),
            new textScroll(this, next, `when I'm older<1000>`, { style: smallTS, x: 10, y: 200 }),
            new textScroll(this, next, `when I grow up<1000>`, { style: smallTS, x: 10, y: 230 }),
            new textScroll(this, next, `when I get a job<1000>`, { style: smallTS, x: 10, y: 260 }),
            new textScroll(this, next, `in the<1000>`, { style: smallTS, x: 10, y: 290 }),
            new textScroll(this, next, `Real World<750>`, { style: smallTS, x: 10, y: 320 })/*,

            {
                start: function () {
                    console.log('activate scene');
                    Game.scene.add("scenemain", SceneMain, true);
                }
            }*/
        ]);
    }
    update() {
        this.listener.raise("update");
    }
}