var Game;
var scene;
var startscene;
/*a global method is prefered here, initialized by the constructor, because
 *with the amount of things that need to access the scene, it makes sense for 
 *it to be able to be accessed globally, instead of mangling a bunch of bind 
 *method calls, you know what you are getting
 */
var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 200
            }
        }
    },
    pixelArt: true,
    scene: [SceneMain, FirstScreen]
};

Game = new Phaser.Game(config);
var scene = Game.scene.scenes[0];
var startScene = Game.scene.scenes[1];
console.log("main finished")