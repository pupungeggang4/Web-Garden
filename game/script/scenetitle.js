import {UI} from 'ui'
import {Util} from 'util'

import {GameVar} from 'gamevar'
import {Scene} from 'scene'

export class SceneTitle extends Scene {
    static update(gameVar) {

    }

    static render(gameVar) {
        let canvas = gameVar.canvas
        let ctx = gameVar.ctx

        ctx.clearRect(0, 0, 800, 600)
        ctx.fillRect(0, 0, 80, 80)
    }

    static pointerUp(gameVar, pos, button) {
        gameVar.scene = 'select'
    }

    static keyDown(gameVar, key) {

    }

    static keyUp(gameVar, key) {

    }
}
