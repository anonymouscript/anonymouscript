class textScroll{
    /*
    * a class to take care of character by character text.
    */
    constructor(scene,  callback, rawTextScript, config){
        this.scene = scene; this.callback = callback;
        this.rawTextScript = rawTextScript; this.config = config;


        this.tObj = scene.add.text(config.x,config.y,"",config.style);
        this.rawTextScript = rawTextScript;
    
        config.autostart ? this.activate() : null;


    }

    activate(){
        this.scene.listener.on("update", this.printText);
    }
    start = activate;
    printText(){
        if(this.wait > 0){
            this.wait -= 1000/60
            return;
        }
        if(this.rawTextScript[0] == "<"){
            let dex = this.rawTextScript.indexOf(">");
            let newS = this.rawTextScript.slice(1, dex);
            this.wait += +newS;
            this.rawTextScript(dex + 1);
            return;
        }
        this.tObj += this.rawTextScript[0]
        this.rawTextScript = this.rawTextScript.slice(1);
        if (this.rawTextScript == "") { this.callback.bind(this.scene)(...this.config.args); return false;} else {return true;} 
    }


}