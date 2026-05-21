import {UI} from 'ui'
import {Util} from 'util'

import {GameVar} from 'gamevar'

import {Render} from 'render'

import {Scene} from 'scene'

export class SceneSelect extends Scene {
    static update(gameVar) {

    }

    static render(gameVar) {
        let canvas = gameVar.canvas
        let ctx = gameVar.ctx

        Render.clearCanvas(canvas, ctx)
        Render.fillTextUI(ctx, 'Select character', UI.select.textTitle)
        Render.strokeRectUI(ctx, UI.select.buttonBack)
        Render.strokeRectUI(ctx, UI.select.buttonStart)
        Render.fillTextUI(ctx, 'Start', UI.select.textStart)
    }

    static pointerUp(gameVar, pos, button) {
        if (Util.pointInsideRectUI(pos, UI.select.buttonBack)) {
            gameVar.scene = 'title'
        }
    }

    static keyDown(gameVar, key) {

    }

    static keyUp(gameVar, key) {

    }
}
