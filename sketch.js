function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
}
//write code to define variable "val" to store value for filter as  "GRAY" or "INVERT"
var val = "INVERT";
function draw() {
  image(video, 0, 0, 300, 300);
  //write an if else block, if val = "GRAY" change the image filter to "GRAY" using filter() function else change the image filter to "INVERT" using filter() function
  if(val == "GRAY"){
    filter(GRAY);
  } else{
   filter(INVERT);
  }
  
  
}
//Define function gray() and set the value of "val" variable to "GRAY" and call draw()
function gray()
{
  val = "GRAY";
  draw();
}

//Define function invert() and set the value of "val" variable to "INVERT" and call draw()
function invert()
{
  val = "INVERT";
  draw();
}

function ts(){
  save('myFilterImage.png');
}