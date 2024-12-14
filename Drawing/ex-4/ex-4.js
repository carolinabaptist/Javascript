function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext){
    var context = canvas.getContext('2d');

    context.beginPath();
    //move o "cursor" de desenho para o ponto (x, y) especificado, sem traçar nenhuma linha
    context.moveTo(75,75);
    context.lineTo(10,75);
    context.lineTo(10,25);
    context.fill();
  }
}
