export default class BacardiLogo {
  constructor(id) {
    this.canvas = document.getElementById(id);
    this.ctx = this.canvas.getContext("2d");
    this.modelo = new Image();
    this.modelo.src = "./images/logo.png";
    this.width = 200;
    this.height = 100;
    this.playerPosX = this.canvas.width / 2 - this.getCenterX();
    this.playerPosY = this.canvas.height * 0.05;
  }

  draw() {
    this.ctx.drawImage(
      this.modelo,
      this.playerPosX,
      this.playerPosY,
      this.width,
      this.height
    );
    this.subtitle();
  }

  getCenterX() {
    return this.width / 2;
  }

  getCenterY() {
    return this.height / 2;
  }

  subtitle() {
    this.ctx.textAlign = "center";
    this.ctx.font = "38px Arial";
    this.ctx.strokeStyle = "white";
    this.ctx.fillStyle = "white";
    this.ctx.lineWidth = 1;
    this.ctx.strokeText(
      `Lets make some mojitos!`,
      this.canvas.width / 2,
      this.playerPosY + 150
    );
    this.ctx.fillText(
      `Lets make some mojitos!`,
      this.canvas.width / 2,
      this.playerPosY + 150
    );
  }

  link() {
    this.ctx.textAlign = "center";
    this.ctx.font = "38px Arial";
    this.ctx.strokeStyle = "white";
    this.ctx.fillStyle = "white";
    this.ctx.lineWidth = 1;
    this.ctx.strokeText(
      `Get your \bBacardi Mojito`,
      this.canvas.width / 2,
      this.canvas.height*0.9
    );
    this.ctx.fillText(
      `Get your \bBacardi Mojito`,
      this.canvas.width / 2,
      this.canvas.height*0.9
    );
  }
}
