var imgOriginal = null;
var imgRed = null;
var imgGray = null;
var imgRainbow = null;
var canvas = null;
function loadImage() {
  var imgFile = document.getElementById("imgfile");
  imgOriginal = new SimpleImage(imgFile);
  /* make copies of the original img*/
  imgRed = new SimpleImage(imgFile);
  imgGray = new SimpleImage(imgFile);
  imgRainbow = new SimpleImage(imgFile);
  /* make copies of the original img*/
  canvas = document.getElementById("can");
  imgOriginal.drawTo(canvas);
}

function doGray() {
   if ( imageIsLoaded(imgGray) ) { 
    filterGray();
    imgGray.drawTo(canvas);
  }
  else alert("Image is not loaded");
}
function imageIsLoaded(img) {
  if(img == null || !img.complete())
    return false;
  else return true;
}
function filterGray() {
  for(var px of imgGray.values()) {
        var avg = ( px.getRed() 
                   + px.getGreen() 
                   + px.getBlue() ) / 3;
        px.setRed(avg);
        px.setGreen(avg);
        px.setBlue(avg);
    }
}

function doRed() {
    if ( imageIsLoaded(imgRed) ) {
        filterRed();
        imgRed.drawTo(canvas);
    }
    else alert("Image is not loaded");
}
function filterRed() {
    for(var px of imgRed.values()) {
        var avg = ( px.getRed()
            + px.getGreen()
            + px.getBlue() ) / 3;
        if(avg < 128) {
            px.setRed(2*avg);
            px.setGreen(0);
            px.setBlue(0);
        }
        else {
            px.setRed(255);
            px.setGreen((2*avg) - 255);
            px.setBlue((2*avg) - 255);
        }
    }
}
function filter3() {
  alert("filter 3");
}
function reset() {
  if ( imageIsLoaded(imgOriginal) ) {
    imgOriginal.drawTo(canvas);
  }
  else alert("Image is not loaded");
}