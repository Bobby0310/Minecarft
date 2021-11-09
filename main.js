var canvas= new  fabric.Canvas("myCanvas");

B_height= 30;
B_width= 30;
P_x=10;
P_y=10;

var player_object="";
var block_image="";
function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;

        player_object.scaleToWidth(143);
        player_object.scaleToHeight(136);
        player_object.set({top: P_y, left: P_x});
        canvas.add(player_object);
    })
}

function Block_F(get_image){
fabric.Image.fromURL(get_image, function(Img){

    block_image=Img;

    block_image.scaleToHeight(B_height);
    
    block_image.scaleToWidth(B_width);

    block_image.set({

        top:P_y,
        left:P_x
    });
    canvas.add(block_image);
});
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e){
keyPressed=e.keycode;
console.log("keyPressed");
if(e.shiftkey=true && keyPressed=="73"){
B_height= B_height+5;
B_width= B_width+5;
document.getElementById("current_width") .innerHTML= B_width;
document.getElementById("current_height").innerHTML =B_height;
console.log("I and Shift pressed together")
}

if(e.shiftkey=true && keyPressed=="83"){
    B_height= B_height-5;
    B_width= B_width-5;
    document.getElementById("current_width") .innerHTML= B_width;
    document.getElementById("current_height").innerHTML =B_height;
    console.log("S and Shift pressed together")
    }


if(keyPressed==38 ){
    up();
    console.log("up");
}

if(keyPressed==39 ){
    right();
    console.log("right");
}

if(keyPressed==40 ){
   down();
    console.log("down");
}

if(keyPressed==37){
    left();
    console.log("left");
}
if(keyPressed==84){
    Block_F
    ("trunk.jpg");
    console.log("T is pressed");
}

if(keyPressed==68){
    Block_F
    ("dark_green.png");
    console.log("D is pressed");
}

if(keyPressed==76){
    Block_F
    ("light_green.png");
    console.log("L is pressed");
}
if(keyPressed==71){
    Block_F
    ("ground.png");
    console.log("g is pressed");
}
if(keyPressed==87){
    Block_F
    ("wall.jpg");
    console.log("W is pressed");
}

if(keyPressed==89){
    Block_F
    ("yellow_wall.png");
    console.log("y is pressed");
}

if(keyPressed==82){
    Block_F
    ("roof.jpg");
    console.log("r is pressed");
}

if(keyPressed==67){
    Block_F
    ("cloud.jpg");
    console.log("c is pressed");
}
if(keyPressed==85){
    Block_F
    ("unique.png");
    console.log("u is pressed");
}
}

function up(){
if(P_y>=0){
    P_y= P_y-5
    canvas.remove(player_object);
    player_update();
}
}

function down(){
    if(P_y<=600){
        P_y= P_y+5
        canvas.remove(player_object);
        player_update();
    }
}

function left(){
    if(P_x>=0){
        P_x= P_x-5
        canvas.remove(player_object);
        player_update();
    }
}

function right(){
    if(P_x<=1000){
        P_x= P_x+5
        canvas.remove(player_object);
        player_update();
    }
}