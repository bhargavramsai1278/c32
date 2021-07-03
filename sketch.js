const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here

}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg)
    background(backgroundImg);
    noStroke();
    textSize(35)
    fill("blue")
    text("score:" + score,width-300,50) 

    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){
    var response= await fetch("http://worldclockapi.com/api/json/est/now")
var responseJSON= await response.json();
console.log(responseJSON)
var datetime=responseJSON.currentDateTime 
var hour=datetime.slice(11,13)
if(hour>=06&&hour<=19){
bg="sprites/bg.png"

}
else{
    bg="sunrise1.png,sunrise2.png,sunrise3.png,sunrise4.png,sunrise5.png,sunrise6.png,sunset7.png,sunset8.png,sunset9.png,sunset10.png,sunset11.png,sunset12,.png";

}
backgroundImg=loadImage(bg);
}

    // write code to fetch time from API

    //change the data in JSON format

    // write code slice the datetime


    // add conditions to change the background images from sunrise to sunset


    //load the image in backgroundImg variable here


