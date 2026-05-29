import {AssetLoader} from 'asset'

import {GameVar} from 'gamevar'
import {GameHandler} from 'gamehandler'

window.onload = main
document.getElementById('screen').oncontextmenu = rightClick

async function main() {
    let gameVar
    let gameHandler

    try {
        const [image, audio] = await Promise.all([
            AssetLoader.loadImage(),
            AssetLoader.loadAudio()
        ])
        gameVar = new GameVar()
        gameHandler = new GameHandler(gameVar)
        gameHandler.run(gameVar)
    } catch (error) {
        console.log(error)
        if (gameVar.gameLoop) {
            cancelAnimationFrame(gameVar.gameLoop)
        }
    }}

function rightClick() {
    return false
}
