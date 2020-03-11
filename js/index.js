let canvas = document.getElementById("mainGame");
let ctx = canvas.getContext("2d");
let royalPlane = new Royal(canvas.width/2 - ROYAL_WIDTH/2, canvas.height - ROYAL_HEIGHT - 10, ROYAL_WIDTH, ROYAL_HEIGHT, ROYAL_SPEED );

royalPlane.show();

