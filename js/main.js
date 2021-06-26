import Game from "./Game.js"
import GameView from "./GameView.js"


let game = new Game();
let gameView = new GameView();

document.querySelector(".restart").addEventListener("click", () => {    
      onRestartClick();
});

document.querySelectorAll(".board__tile").forEach((tile) => {
    tile.addEventListener("click", () => {
        onTileClick(tile.dataset.index);
    });
});

function onTileClick(i) {
    game.makeMove(i)
    gameView.update(game);
}

function onRestartClick() {
    game = new Game();
    gameView.update(game)
}

gameView.update(game)


// Dark Mode Code

const options = {
    bottom: '64px', // default: '32px'
    right: 'unset', // default: '32px'
    left: '32px', // default: 'unset'
    time: '0.5s', // default: '0.3s'
    mixColor: '#fff', // default: '#fff'
    backgroundColor: '#271536',  // default: '#fff'
    buttonColorDark: '#100f2c',  // default: '#100f2c'
    buttonColorLight: '#fff', // default: '#fff'
    saveInCookies: false, // default: true,
    label: '🌓', // default: ''
    autoMatchOsTheme: true // default: true
}



const darkmode = new Darkmode(options);
darkmode.showWidget();


