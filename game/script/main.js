import {GameVar} from 'gamevar'
import {GameHandler} from 'gamehandler'

window.onload = main
document.getElementById('screen').oncontextmenu = rightClick

function main() {
    let gameVar = new GameVar()
    let gameHandler = new GameHandler(gameVar)
    try {
        gameHandler.run(gameVar)
    } catch (error) {
        console.log(error)
        cancelAnimationFrame(gameVar.gameLoop)
    }
}

function rightClick() {
    return false
}
