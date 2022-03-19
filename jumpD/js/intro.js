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
        this.centerX = config.width / 2;
        this.centerY = config.height / 2;
        var LibreBaskerville = new FontFace("LibreBaskerville", `url(assets/fonts/Libre-Baskerville/LibreBaskerville-Regular.ttf)`)
    }
    secondSlide(){
        
        this.style.fontSize = "20px"
        this.out = this.add.text(50,50, "", this.style);
        this.slide = 1;  
    }
    slidethree(){
        this.slide = 2;
    }
    printText(textObj, text, callback, args, scope){
        if(this.wait && this.wait > 0){
            this.wait -= 1000/60
            return text;
        }
        if(text[0] == "<"){
            let dex = text.indexOf(">");
            let newS = text.slice(1, dex);
            this.wait += +newS;
            return text.slice(dex + 1);
        }
        textObj.text += text[0];
        let s = text.slice(1);
        this.wait += 1000/60
        return s == "" ? callback.bind(scope)(args) : s;

    }
    startPointerDown() {
        this.startTween.resume();
        console.log("start tween");
    }
    activateSceneMain() {
        console.log('activate scene');
        Game.scene.add("scenemain", SceneMain, true);
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
            onComplete: this.secondSlide.bind(this)
        });
        
        this.start = start;
        this.slide = 0;
        this.index = 0;
        this.wait = 0;
        this.text = `I have a fear of growing up. A fear of <1000>being<150>\nimprissoned<1500> by social expectation, <1000>losing my freedom.`; 
        this.slide2 = [`when I'm older<1000>`,`when I grow up<1000>`,`when I get a job<1000>`, `in the<1000>`,"Real World<750>"];

    }
    update() {
        if(this.slide == 1){
            let text = this.printText(this.out, this.text, this.slidethree, null, this);
            this.text = text
        }
        if (this.slide == 2){
            let text = this.printText()
        }
    }

}
