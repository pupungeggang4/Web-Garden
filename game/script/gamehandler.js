import {GameVar} from 'gamevar'
import {Scene} from 'scene'
import {SceneTitle} from 'scenetitle'
import {SceneSelect} from 'sceneselect'
import {SceneCollection} from 'scenecollection'
import {SceneBattle} from 'scenebattle'

export class GameHandler {
    constructor(gameVar) {
        window.addEventListener('pointerup', (event) => this.pointerUp(event, gameVar), false)
        window.addEventListener('keydown', (event) => this.keyDown(event, gameVar), false)
        window.addEventListener('keyup', (event) => this.keyUp(event, gameVar), false)
        this.scene = {
            'title': SceneTitle, 'select': SceneSelect, 'battle': SceneBattle, 'collection': SceneCollection,
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

    pointerUp(event, gameVar) {
        let targetRect = gameVar.canvas.getBoundingClientRect()
        let pos = {
            x: (event.clientX - targetRect.left) / targetRect.width * gameVar.canvas.width,
            y: (event.clientY - targetRect.top) / targetRect.height * gameVar.canvas.height,
        }
        let button = event.button
        this.scene[gameVar.scene].pointerUp(gameVar, pos, button)
    }

    keyDown(event, gameVar) {
        let key = event.key
        this.scene[gameVar.scene].keyDown(gameVar, key)
    }

    keyUp(event, gameVar) {
        let key = event.key
        this.scene[gameVar.scene].keyUp(gameVar, key)
    }
}
