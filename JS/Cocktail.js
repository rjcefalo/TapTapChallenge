import Lemon from "./ingredients/Lemon.js";
import Mint from "./ingredients/Mint.js";
import Bacardi from "./ingredients/Bacardi.js";
import Ice from "./ingredients/Ice.js";
import Soda from "./ingredients/Soda.js";
export default class Player {
  constructor(id) {
    this.canvas = document.getElementById(id);
    this.ctx = this.canvas.getContext("2d");
    this.modelo = new Image();
    this.modelo.src = "./images/sprite.png";
    this.width = 100;
    this.height = 100;
    this.playerPosX = (this.canvas.width * 2) / 3 - this.getCenterX();
    this.playerPosY = this.canvas.height / 2;
    this.states = {
      state1: { sX: 0, sY: 0, sWidth: 97, sHeight: 216 },
      state2: { sX: 100, sY: 0, sWidth: 97, sHeight: 216 },
      state3: { sX: 200, sY: 0, sWidth: 97, sHeight: 216 },
      state4: { sX: 300, sY: 0, sWidth: 97, sHeight: 216 },
      state5: { sX: 405, sY: 0, sWidth: 104, sHeight: 236 }
    };
    this.currentStateID = 0;
    this.activeState = this.states.state1;
    this.ingredients = [
      new Lemon(id),
      new Mint(id),
      new Bacardi(id),
      new Ice(id),
      new Soda(id)
    ];
  }

  draw() {
    //console.log(this.currentStateID)

    let state = this.activeState;
    this.ctx.drawImage(
      this.modelo,
      state.sX,
      state.sY,
      state.sWidth,
      state.sHeight,
      this.playerPosX,
      this.playerPosY,
      state.sWidth,
      state.sHeight
    );
    this.height = this.activeState.sHeight;
    this.width = this.activeState.sWidth;
    if (this.ingredients.length > 0) {
      this.ingredients[0].draw();
    }
  }

  changeState(state) {
    switch (state) {
      case 1:
        this.activeState = this.states.state1;
        this.currentStateID = 1;
        break;
      case 2:
        this.activeState = this.states.state2;
        this.currentStateID = 2;
        break;
      case 3:
        this.activeState = this.states.state3;
        this.currentStateID = 3;
        break;
      case 4:
        this.activeState = this.states.state4;
        this.currentStateID = 4;
        break;
      case 5:
        this.activeState = this.states.state5;
        this.currentStateID = 5;
        break;
      case 6:
        this.activeState = this.states.state5;
        break;
    }
  }

  killIngredient() {
    this.ingredients.shift();
  }

  finishedCocktail() {
    if (this.playerPosX > (this.canvas.width / 2)-this.getCenterX()) {this.playerPosX -= 0.5; this.playerPosY-=0.5}
  }

  finalState() {
    if ((this.currentStateID === 5)) return true;
    return false;
  }

  getCenterX() {
    return this.width / 2;
  }

  getCenterY() {
    return this.height / 2;
  }
}
