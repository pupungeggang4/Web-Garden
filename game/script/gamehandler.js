import {GameVar} from 'gamevar'
import {Scene} from 'scene'
import {SceneTitle} from 'scenetitle'

export class GameHandler {
    constructor() {
        window.addEventListener('pointerup', (event) => this.pointerUp(event), false)
        window.addEventListener('keydown', (event) => this.keyDown(event), false)
        window.addEventListener('keyup', (event) => this.keyUp(event), false)
        this.scene = {
            'title': SceneTitle
        }
    }

    run(gameVar) {
        gameVar.gameLoop = requestAnimationFrame(() => this.loop(gameVar))
    }

    loop(gameVar) {
        gameVar.frameCurrent = performance.now()
        gameVar.dt = gameVar.frameCurrent - gameVar.framePrevious
        gameVar.framePrevious = gameVar.frameCurrent

        this.scene[gameVar.scene].render(gameVar)
        gameVar.gameLoop = requestAnimationFrame(() => this.loop(gameVar))
    }

    pointerUp(event) {
        
    }

    keyDown(event) {

    }

    keyUp(event) {

    }
}
