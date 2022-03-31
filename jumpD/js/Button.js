class Button{
    constructor(scene, callback, text,config={}){
        this.scene = scene; //scene is required
        this.text = text;
        this.callback = callback;
        this.start = show;
        if(!config.paused){
            this.show()
        }
    } 
    start = show;
    show(text, callback){
        this.text = text ? text:this.text;
        this.callback = callback ? callback : this.callback;
        let start = this.scene.add.text(this.centerX, this.centerY * 0.95, this.text, this.style);
        start.setOrigin(0.5, 0.5);
        start.setInteractive();
        start.on('pointerdown', this.scene.startPointerDown, this);
        this.startTween = this.scene.tweens.add({
            targets: [start],
            duration: 1000,
            alpha: 0,
            paused: true,
            ease: "power0",
            onComplete: this.callback
        });
        this.listener = new listener();
    }
    
}