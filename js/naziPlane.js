function Nazi(xPos, yPos, width, height, speed) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.width = width;
    this.height = height;
    this.speed = speed;
    this.isFired = false;
}

Nazi.prototype.show = function () {
    let naziPlaneImg = document.getElementById("naziPlaneImg");
    ctx.drawImage(naziPlaneImg, this.xPos, this.yPos, this.width, this.height);
};

Nazi.prototype.move = function() {
    this.yPos += this.speed;
}

function createNaziGroups(){
    for(let i = 0; i < 50; i++){
        let sp
    }
}

