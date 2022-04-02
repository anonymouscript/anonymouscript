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
    secondSlide(){
        this.style.fontSize = "20px"
        let scrawl1 = new textScroll(this,this.text,this.style);
        this.listener.on(this.update,scrawl1.printText,this.slidethree);
    }
    
    slidethree(){
        console.log("slide three");
        
    }
    
    startPointerDown() {
        this.startTween.resume();
        console.log("start tween");
    }
    activateSceneMain() {
        console.log('activate scene');
        Game.scene.add("scenemain", SceneMain, true);
    }
    create(data) {
        //this.scene.add("SceneMain")
        this.startButton = new Button(this, "Start", this.secondSlide);
        this.startButton.start();
        this.listener = new Listener2();
        this.stack = data;

        this.text = `I have a fear of growing up. A fear of <1000>being<150>\nimprissoned<100> by social expectation, <1000>losing my freedom.`; 
        this.slide2 = [`when I'm older<1000>`,`when I grow up<1000>`,`when I get a job<1000>`, `in the<1000>`,"Real World<750>"];

    }
    update() {
        this.listener.raise(this.update);
    }

}
let stack = [
    {
        objClass: Button

    }
]