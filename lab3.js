function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    ctx.fillStyle="blue";
		ctx.beginPath();
    ctx.moveTo(50,30);
    ctx.lineTo(100,100);
    ctx.lineTo(0,100);
    ctx.fill();
    
    
    ctx.fillStyle="black";
    ctx.beginPath();
    ctx.moveTo(45,100);
    ctx.lineTo(45,110);
    ctx.lineTo(55,110);
    ctx.lineTo(55,100);
    ctx.fill();
    
    ctx.beginPath();
    ctx.moveTo(20,110);
    ctx.rect(30,110,40,40);
    ctx.fill();
    
    
  }
}
