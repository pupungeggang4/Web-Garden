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
    }

    static pointerUp(gameVar, pos, button) {
        if (Util.pointInsideRectUI(pos, UI.title.buttonStart)) {
            gameVar.scene = 'select'
        }
    }

    static keyDown(gameVar, key) {

    }

    static keyUp(gameVar, key) {

    }
}
