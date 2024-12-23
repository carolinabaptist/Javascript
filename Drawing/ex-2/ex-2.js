//Write a JavaScript program to draw a circle.

function draw() {
  var canvas = document.getElementById('circle');
  if (canvas.getContext)  {
    var ctx = canvas.getContext('2d'); 
    var X = canvas.width / 2;
    var Y = canvas.height / 2;
    var R = 45;
    ctx.beginPath();
    ctx.arc(X, Y, R, 0, 2 * Math.PI, false);
    ctx.lineWidth = 3;
    ctx.strokeStyle = '#FF0000';
    ctx.stroke();
  }
}
