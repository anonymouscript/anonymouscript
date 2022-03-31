class FirstScreen extends Phaser.Scene{
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
    create(data){
        this.listener = new Listener2();
        this.componentQueue = new Queue2([
            new Button(this, this.listener.raise,"Start", {})
        ]);
    }
    update(){
        this.listener.raise("update");
    }
}