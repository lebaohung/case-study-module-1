function Royal(xPos, yPos, width, height, speed) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.width = width;
    this.height = height;
    this.speed = speed;

}
Royal.prototype.show = function () {
    let royalPlaneImg = document.getElementById("royalPlaneImg");
    ctx.drawImage(royalPlaneImg, this.xPos, this.yPos, this.width, this.height)
};
Royal.prototype.moveLeft = function () {
    while (this.xPos - this.speed < 0) {
        this.xPos -= this.speed;
    }
};
Royal.prototype.moveRight = function () {
    while (this.xPos + this.width + this.speed > canvas.width) {
        this.xPos += this.speed;
    }
};



    


