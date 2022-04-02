 class Button{
    constructor(scene, callback, text,config={}){
        this.scene = scene; //scene is required
        this.text = text;
        this.callback = callback;
        this.style = config.style;
        this.x = config.x ? config.x : width/2;
        this.y = config.y ? config.y : height/2 * 0.95;
        if(config.autostart){
            this.start()
        }
    } 
    
    start(text, callback){
        this.text = text ? text:this.text;
        this.callback = callback ? callback : this.callback;
        let start = this.scene.add.text(this.x, this.y, this.text, this.style);
        start.setOrigin(0.5, 0.5);
        start.setInteractive();
        this.startTween = this.scene.tweens.add({
            targets: [start],
            duration: 1000,
            alpha: 0,
            paused: true,
            ease: "power0",
            onComplete: this.callback
        });
        start.on('pointerdown', this.startTween.resume, this.startTween);
        
    }
    
}