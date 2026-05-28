import {UI} from 'ui'
import {Util} from 'util'

import {GameVar} from 'gamevar'

import {Render} from 'render'

import {Scene} from 'scene'

export class SceneSelect extends Scene {
    update(gameVar) {

    }

    render(gameVar) {
        let canvas = gameVar.canvas
        let ctx = gameVar.ctx

        Render.clearCanvas(canvas, ctx)
        Render.fillTextUI(ctx, 'Select character', UI.select.textTitle)
        Render.strokeRectUI(ctx, UI.select.buttonBack)

        for (let i = 0; i < 6; i++) {
            let row = Math.floor(i / 3)
            let col = i % 3
            let rect = [UI.select.buttonCharacterStart[0] + UI.select.buttonCharacterInterval[0] * col, UI.select.buttonCharacterStart[1] + UI.select.buttonCharacterInterval[1] * row, UI.select.buttonCharacterSize[0], UI.select.buttonCharacterSize[1]]
            Render.strokeRectUI(ctx, rect)
        }

        Render.strokeRectUI(ctx, UI.select.areaDescription)

        Render.strokeRectUI(ctx, UI.select.buttonStart)
        Render.fillTextUI(ctx, 'Start', UI.select.textStart)
    }

    pointerUp(gameVar, pos, button) {
        if (Util.pointInsideRectUI(pos, UI.select.buttonBack)) {
            gameVar.scene = 'title'
        }

        for (let i = 0; i < 6; i++) {
            let row = Math.floor(i / 3)
            let col = i % 3
            let rect = [UI.select.buttonCharacterStart[0] + UI.select.buttonCharacterInterval[0] * col, UI.select.buttonCharacterStart[1] + UI.select.buttonCharacterInterval[1] * row, UI.select.buttonCharacterSize[0], UI.select.buttonCharacterSize[1]]
            if (Util.pointInsideRectUI(pos, rect)) {
                gameVar.selectedCharacter = i
            }
        }

        if (Util.pointInsideRectUI(pos, UI.select.buttonStart)) {
            if (gameVar.selectedCharacter != -1) {
                gameVar.scene = 'battle'
            }
        }
    }

    keyDown(gameVar, key) {
        if (gameVar.selectedCharacter === -1) {
            gameVar.selectedCharacter = 0
        } else {
            if (key === 'ArrowUp' || key === 'ArrowDown') {
                gameVar.selectedCharacter = (gameVar.selectedCharacter + 3) % 6
            } else if (key === 'ArrowLeft') {
                gameVar.selectedCharacter = (gameVar.selectedCharacter + 5) % 6
            } else if (key === 'ArrowRight') {
                gameVar.selectedCharacter = (gameVar.selectedCharacter + 1) % 6
            }
        }

        if (key === 'Enter') {
            if (gameVar.selectedCharacter != -1) {
                gameVar.scene = 'battle'
            }
        }
    }

    keyUp(gameVar, key) {

    }
}
