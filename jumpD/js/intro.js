var component;
var intro;
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
        intro = this;
    }
    preload() {
        console.log("preload")
        new FontFace("LibreBaskerville", `url(assets/fonts/Libre-Baskerville/LibreBaskerville-Regular.ttf)`)
    }
    next() {
        let nextComponent = intro.componentQueue.next();
        nextComponent.start();
        component = nextComponent;
        if(nextComponent.wait === false){
            this.next()
        }
    }

    specialTween(){
        this.scene.tweens.add({
            targets: [this.tObj],
            x:150,
            y: 50,
            duration: 1000
        })
        this.scene.tweens.addCounter({ 
            from: 30,
            to: 70,
            duration: 1000,
            onUpdate: function (tween) { this.tObj.setFontSize(tween.getValue()); }.bind(this),
            onComplete: this.scene.next.bind(this.scene)
        });

       
        this.scene.listener.raise("ScreenClear");
        
        
    }
    close(){
        
    }
    create(data) {
        this.go = 0
        this.letterRate = 60;
        this.listener = new Listener2();
        let smallTS = {
            fontFace: "libreBaskerville",
            fontSize: "30px",
            size: 30,
            wordWrap: {
                width: 700,
                advanced: false
            }
        }
        let longTS = {
            fontFace:"libreBasherville",
            fontSize: "30px",
            wordWrap: {
                width: 750
            }
        }
        
        let next = this.next.bind(this);
        
        new Button(this, next, "Start", { autostart: true, style: this.style }) //auto start
        
        let QuickFunction = (func,args=[]) => ({wait: false, args: args, start: () => func.call(...this.args)});
        let wait = {start: () => (null), wait: true};

        let yes = new Button(this, () => this.listener.raise("Yes"), "Yes", {x: 100, y:200,wait: false, style: longTS });
        let no = new Button(this, () => this.listener.raise("No"), "No", {x: 300, y:200, wait: true, style: longTS});

        let realWorld = new textScroll(this, next, `"Real World"<1000>`, { style: smallTS, x: 200, y: 320, manualClear: "CLRSPECIAL" })
        
        this.componentQueue = new Queue2([
            new textScroll(this, next, `I have a fear of growing up.<1000> A fear of being imprissoned<200> by social expectations, <300>losing my freedom.<450>`
                , { style: smallTS, x: 10, y: 10 }),
            new textScroll(this, next, `when I'm older<900>`, { style: smallTS, x: 200, y: 200 }),
            new textScroll(this, next, `when I get a job<900>`, { style: smallTS, x: 200, y: 230 }),
            new textScroll(this, next, `in the<100>`, { style: smallTS, x: 200, y: 290 }),
            realWorld,
            {start: this.specialTween.bind(realWorld)},
            new textScroll(this,next, `<750>A place that is the death of dreams.<500> A place where your joys dissapear.<500> A place of disasters and sorrow<750> and death.<750> A place where you can't "be yourself".<1000>`, {
                x:50, y: 150, style:{
                    fontFace: "libreBaskerville",
                    fontSize: "40px",
                    wordWrap: {
                        width: 700,
                        advanced: false
                    }
                }
            }),
            {start: () => {this.listener.raise("CLRSPECIAL");this.listener.raise("ScreenClear"); next()}},
            new textScroll(this,next, `I decided not to go to this "Real World"<300>`, {style:longTS, x:25,y:25}),
            new textScroll(this,next, `Care to join me?<700>`, {style: longTS, x: 25, y: 100}),
            yes,
            no,
            new textScroll(this, next, `Well, then.<1000>`, {style: smallTS, x: 50, y: 500}),
        ]);
        this.listener.on("Yes", this.componentQueue.add, QuickFunction(this.scene.add, ["scenemain", SceneMain, true]));
        this.listener.on("Yes", no.fade.bind(no));
        this.listener.on("No", yes.fade.bind(yes));
        this.listener.on("No", this.listener.raise.bind(this.listener), "ScreenClear");
    
    

    }
    update() {
        if(this.go < 0){ 
        this.listener.raise("update");
        this.go += 60/this.letterRate;
        } else {
            this.go -= 1;
        }
    }
}