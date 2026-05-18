import {GameVar} from 'gamevar'
import {GameHandler} from 'gamehandler'

window.onload = main
window.onerror = errorHandle
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

function errorHandle(msg, url, line, col, err) {
}

function rightClick() {
    return false
}
