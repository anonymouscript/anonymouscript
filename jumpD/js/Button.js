 class Button{
    constructor(scene, callback, text,config={}){
        this.scene = scene; //scene is required
        this.text = text;
        this.callback = callback;
        this.style = config.style;
        this.config = config;
        this.wait = config.wait;
        this.x = config.x ? config.x : width/2;
        this.y = config.y ? config.y : height/2 * 0.95;
        
        if(config.autostart){
            this.start()
        }
    } 
    fade(){
        this.startTween.resume.bind(this.startTween)()
        this.start.setInteractive(false);
    }
    
    start(text, callback){
        this.text = text ? text:this.text;
        this.callback = callback ? callback : this.callback;
        let start = this.scene.add.text(this.x, this.y, this.text, this.style);
        this.start = start;
        this.config.tweenIn ? this.config.tweenIn : null;
        start.setOrigin(0.5, 0.5);
        start.setInteractive();
        this.config.listens ? this.scene.listener.on(this.listens, () => {start.setInteractive(false);this.startTween.resume.bind(this.startTween)()}) : null;
        this.startTween = this.scene.tweens.add({
            targets: [start],
            duration: 1000,
            alpha: 0,
            paused: true,
            onComplete: this.callback
        });
        start.on('pointerdown', this.startTween.resume, this.startTween);
        start.on('pointerdown', )
        
        
        
    }
    
}