import {UI} from 'ui'
import {Util} from 'util'
import {Render} from 'render'

import {GameVar} from 'gamevar'
import {Scene} from 'scene'

export class SceneTitle extends Scene {
    static update(gameVar) {

    }

    static render(gameVar) {
        let canvas = gameVar.canvas
        let ctx = gameVar.ctx

        Render.init(ctx)
        Render.clearCanvas(canvas, ctx)
        Render.fillTextUI(ctx, 'Floral Rampage', UI.title.textTitle)
        Render.strokeRectUI(ctx, UI.title.buttonStart)
        Render.fillTextUI(ctx, 'Start Game', UI.title.textStart)
        Render.strokeRectUI(ctx, UI.title.buttonCollection)
        Render.fillTextUI(ctx, 'Collection', UI.title.textCollection)
        Render.strokeRectUI(ctx, UI.title.buttonErase)
        Render.fillTextUI(ctx, 'Erase Data', UI.title.textErase)
        Render.strokeRectUI(ctx, UI.title.arrow[gameVar.selectedTitle])
    }

    static pointerUp(gameVar, pos, button) {
        if (Util.pointInsideRectUI(pos, UI.title.buttonStart)) {
            gameVar.scene = 'select'
            gameVar.selectedCharacter = -1
        } else if (Util.pointInsideRectUI(pos, UI.title.buttonCollection)) {
            gameVar.scene = 'collection'
        }
    }

    static keyDown(gameVar, key) {
        if (key === 'ArrowUp') {
            gameVar.selectedTitle = (gameVar.selectedTitle + 2) % 3
        } else if (key === 'ArrowDown') {
            gameVar.selectedTitle = (gameVar.selectedTitle + 1) % 3
        } else if (key === 'Enter') {
            if (gameVar.selectedTitle === 0) {
                gameVar.scene = 'select'
                gameVar.selectedCharacter = -1
            }
        }
    }

    static keyUp(gameVar, key) {
    }
}
