function setup() {
    video = createCapture(VIDEO);
    video.size(550, 550);

    canvas = createCanvas(550, 415);
    canvas.position(560, 135);
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw() {
 background ('#738694');

 document.getElementById("square").innerHTML="Width and Height of the square will be = "+ difference + "px";
 fill("pink");
 stroke("pink");
 square(noseX,noseY,difference);
}
function modelLoaded(){
    console.log('poseNet Is Initialized!');
}
function gotPoses(results)
{
    if (results.length > 0)
    {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;

        console.log("noseX= "+ noseX + " noseY= "+ noseY);

        leftwristX=results[0].pose.leftWrist.x;
        rightwristX=results[0].pose.rightWrist.x;

        difference = floor(leftwristX - rightwristX);
        console.log("leftwristx = "+ leftwristX + " rightwristx = "+ rightwristX + " difference =" + difference);
    }

}

