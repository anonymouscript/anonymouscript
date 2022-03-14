var Game;
Game = 1;

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