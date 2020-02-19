var form, game, player, gameState = 0, canvas, database;
var playerCount;


function setup(){
  database = firebase.database();
  console.log(database);
  canvas = createCanvas(400,400);
  game = new Game();
  game.getState();
  game.start();
}

function draw(){

}
