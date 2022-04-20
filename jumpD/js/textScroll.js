class textScroll{
    /*
    * a class to take care of character by character text.
    */
    constructor(scene,  callback, rawTextScript, config={}){
        this.scene = scene; this.callback = callback;
        this.rawTextScript = rawTextScript; this.config = config;
        this.wait = config.wait;
        
        this.tObj = scene.add.text(config.x,config.y,"",config.style);
    
        config.autostart ? this.start() : null;
        !config.args ? config.args = [] : null;
        this.clearOn = config.manualClear ? config.manualClear : "ScreenClear";
        
        this.size = config.style.size;

    }
    fade(){
        this.scene.tweens.add({
            targets: this.tObj,
            alpha: 0,
            duration: 1000,
            paused: false
        });
    }
    start(){
        this.scene.listener.on("update", this.printText.bind(this));
        this.scene.listener.on(this.clearOn, this.fade.bind(this));
        this.wait = 0;
    }
    
    printText(){
        if(this.wait > 0){
            this.wait -= 1000/this.scene.letterRate
            return true;
        }
        if (this.rawTextScript == "") { this.callback.bind(this.scene)(...this.config.args); return false;}
        if(this.rawTextScript[0] == "<"){
            let dex = this.rawTextScript.indexOf(">");
            let newS = this.rawTextScript.slice(1, dex);
            this.wait += +newS;
            this.rawTextScript = this.rawTextScript.slice(dex+1);
            return true;
        }
        this.tObj.text += this.rawTextScript[0]
        this.rawTextScript = this.rawTextScript.slice(1);
       return true; 
    }


}