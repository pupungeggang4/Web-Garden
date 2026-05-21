import {UI} from 'ui'
import {Util} from 'util'

import {GameVar} from 'gamevar'

import {Render} from 'render'

import {Scene} from 'scene'

export class SceneBattle extends Scene {
    static update(gameVar) {

    }

    static render(gameVar) {
        let canvas = gameVar.canvas
        let ctx = gameVar.ctx

        Render.clearCanvas(canvas, ctx)
        Render.strokeRectUI(ctx, UI.battle.buttonMenu)
    }

    static pointerUp(gameVar, pos, button) {

    }

    static keyDown(gameVar, key) {

    }

    static keyUp(gameVar, key) {

    }
}
