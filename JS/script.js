import Cocktail from "./Cocktail.js";
import Collition from "./Collition.js";
import BacardiLogo from "./BacardiLogo.js";

window.onload = function() {
  $("#game-board").html(
    `<canvas id="ironcanvas" height="${window.innerHeight}" width="${
      window.innerWidth
    }"></canvas>`
  );

  StartGame();

  function StartGame() {
    let canvas = document.getElementById("ironcanvas");
    let ctx = canvas.getContext("2d");
    const cocktail = new Cocktail("ironcanvas");
    const logo = new BacardiLogo("ironcanvas")
    
    setInterval(() => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      logo.draw();
      cocktail.draw();
      
      if(cocktail.finalState()){
        logo.link();
        cocktail.finishedCocktail();
        $("#game-board").click(function (){
          window.open(
            'https://www3.bacardi.com',
            '_blank'
          );
        })
      }
      if (cocktail.ingredients.length>0 &&
        Collition(
          cocktail.playerPosX,
          cocktail.playerPosY,
          cocktail.width,
          cocktail.height,
          cocktail.ingredients[0].playerPosX,
          cocktail.ingredients[0].playerPosY,
          cocktail.ingredients[0].getCenterX(),
          cocktail.ingredients[0].getCenterY()
        ) && cocktail.ingredients[0].nextState
      ) {
        cocktail.changeState(cocktail.ingredients[0].order+1);
        cocktail.killIngredient();
      }
    }, 1000 / 60);
  }
};
