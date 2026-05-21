import {UI} from 'ui'
import {Util} from 'util'

import {GameVar} from 'gamevar'

import {Render} from 'render'

import {Scene} from 'scene'

export class SceneCollection extends Scene {
    static update(gameVar) {

    }

    static render(gameVar) {
        let canvas = gameVar.canvas
        let ctx = gameVar.ctx

        Render.clearCanvas(canvas, ctx)
        Render.fillTextUI(ctx, 'Collection', UI.collection.textTitle)
        Render.strokeRectUI(ctx, UI.collection.buttonBack)
    }

    static pointerUp(gameVar, pos, button) {
        if (Util.pointInsideRectUI(pos, UI.collection.buttonBack)) {
            gameVar.scene = 'title'
        }
    }

    static keyDown(gameVar, key) {

    }

    static keyUp(gameVar, key) {

    }
}
