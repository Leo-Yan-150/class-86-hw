const { fabric } = require("./fabric");

var canvas = new fabric.Canvas("myCanvas");
var block_image_height = 30;
var block_image_width = 30;
var playerX = 10;
var playerY = 10;
var playerObject = "";
var block_image = "";
function player_update(){
fabric.Image.fromURL("player.png");
playerObject = "Img";

playerObject.scaleToHeight(140);
playerObject.scaleToWidth(150);
playerObject.set({top:playerY, left:playerX});

canvas.add(playerObject);
}
function new_image(get_image){
fabric.Image.fromURL(get_image, function(Img){
block_image_object = "Img";

block_image_object.scaleToWidth(block_image_width);
block_image_object.scaleToHeight(block_image_height);
block_image_object.set({top:player_y, left:player_x});
canvas.add(block_image_object);
});
}