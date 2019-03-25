export default class Bacardi {
    constructor(id) {
      this.canvas = document.getElementById(id);
      this.ctx = this.canvas.getContext("2d");
      this.modelo = new Image();
      this.modelo.src = "./images/sprite.png";
      this.width = 83;
      this.height = 344;
      this.playerPosX = (this.canvas.width / 3)-this.getCenterX();
      this.playerPosY = this.canvas.height / 2;
      this.states = {
        state1: { sX: 1419, sY: 7, sWidth: 83, sHeight: 344 }
      };
      this.activeState = this.states.state1;
      this.nextState = false;
      this.order = 2;
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
  