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
function filter1() {
  alert("filter 1");
}
function filter2() {
  alert("filter 2");
}
function filter3() {
  alert("filter 3");
}
function reset() {
  alert("reset btn");
}