import {UI} from 'ui'
import {Util} from 'util'

import {GameVar} from 'gamevar'

import {Render} from 'render'

import {Scene} from 'scene'

export class SceneCollection extends Scene {
    update(gameVar) {

    }

    render(gameVar) {
        let canvas = gameVar.canvas
        let ctx = gameVar.ctx

        Render.clearCanvas(canvas, ctx)
        Render.fillTextUI(ctx, 'Collection', UI.collection.textTitle)
        Render.strokeRectUI(ctx, UI.collection.buttonBack)
    }

    pointerUp(gameVar, pos, button) {
        if (Util.pointInsideRectUI(pos, UI.collection.buttonBack)) {
            gameVar.scene = 'title'
        }
    }

    keyDown(gameVar, key) {

    }

    keyUp(gameVar, key) {

    }
}
