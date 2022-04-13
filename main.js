function setup() {
video = createCapture(VIDEO);
video.size (550 , 500);

canvas = createCanvas(500 , 550);
canvas.position(560 , 150); 

poseNet = ml5.poseNet(Video,modelLoaded);
poseNet.on('pose', gotPoses);

}

function draw(){

background('red');

document.getElementById("Span_Output") .innerHTML = "Width And The Height Of The Square Is" + difference +"px";

fill('aqua');
stroke('black');
square(noseX , noseY , difference);

}

function modelLoaded(){

    console.log(" PoseNet is Intitialized! ")

}

noseX=0;
noseY=0;
difference=0;
rightWristX=0;
leftWristX=0;

function gotPoses(results){

if (results.length > 0)
{
console.log(results);
noseX= results[0].pose.nose.x;
noseY= results[0].pose.nose.y;
console.log("noseX =" + noseX +"noseY =" + noseY);

leftWristX=results[0].pose.leftWrist.x;
rightWristX=results[0].pose.rightWrist.x;
difference=floor (leftWristX-rightWristX);
console.log('leftWristX=' + leftWristX + 'rightWriteX=' + rightWristX + 'difference=' + difference);
}

}