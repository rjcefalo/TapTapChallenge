export default class Lemon {
  constructor(id) {
    this.canvas = document.getElementById(id);
    this.ctx = this.canvas.getContext("2d");
    this.modelo = new Image();
    this.modelo.src = "./images/sprite.png";
    this.width = 225;
    this.height = 130;
    this.playerPosX = (this.canvas.width / 3)-this.getCenterX();
    this.playerPosY = this.canvas.height / 2;
    this.states = {
      state1: { sX: 616, sY: 20, sWidth: 425, sHeight: 255 }
    };
    this.activeState = this.states.state1;
    this.nextState = false;
    this.order=0;
  }

  draw() {
    let state = this.activeState;
    this.ctx.drawImage(
      this.modelo,
      state.sX,
      state.sY,
      state.sWidth,
      state.sHeight,
      this.playerPosX,
      this.playerPosY,
      this.width,
      this.height
    );

    this.setListener();
  }

  setListener() {
    document.onmousedown = function(e) {
      document.onmousemove = function(e) {
        e.preventDefault();
        this.playerPosX = e.clientX - this.getCenterX();
        this.playerPosY = e.clientY - this.getCenterY();
      }.bind(this);
    }.bind(this);

    document.onmouseup = function(e) {
        this.nextState=true;
        console.log(this.nextState)
      e.preventDefault();
      document.onmousemove = null;
    }.bind(this);
  }

  getCenterX() {return this.width / 2}

  getCenterY() {return this.height / 2}
}
