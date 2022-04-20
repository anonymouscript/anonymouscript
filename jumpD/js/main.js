var Game;
var scene;
var startscene;
/*a global method is prefered here, initialized by the constructor, because
 *with the amount of things that need to access the scene, it makes sense for 
 *it to be able to be accessed globally, instead of mangling a bunch of bind 
 *method calls, you know what you are getting
 */
var height = 600;
var width = 800;
var config = {
    type: Phaser.AUTO,
    width: width,
    height: height,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 200
            }
        }
    },
    pixelArt: true,
    scene: FirstScreen
};

Game = new Phaser.Game(config);
var startScene = Game.scene.scenes[0];
// I have given up and will no



console.log("main finished")
