import {UI} from 'ui'

import {GameVar} from 'gamevar'
import {FieldHandler} from 'fieldhandler'

import {Render} from 'render'
import {Util} from 'util'

import {Scene} from 'scene'
import {MenuWindow} from 'menuwindow'
import {PlayerUI} from 'playerui'

export class SceneBattle extends Scene {
    constructor() {
        super()
        this.playerUI = new PlayerUI()
    }

    update(gameVar) {
    }

    render(gameVar) {
        let canvas = gameVar.canvas
        let ctx = gameVar.ctx

        Render.clearCanvas(canvas, ctx)

        FieldHandler.render(gameVar, gameVar.field)

        ctx.setTransform(1, 0, 0, 1, 0, 0)
        this.playerUI.render(gameVar)
        Render.strokeRectUI(ctx, UI.battle.buttonMenu)
        
        if (gameVar.menu === true) {
            MenuWindow.render(gameVar)
        }
    }

    pointerUp(gameVar, pos, button) {
        if (button === 0) {
            if (gameVar.menu === false) {
                if (Util.pointInsideRectUI(pos, UI.battle.buttonMenu)) {
                    gameVar.menu = true
                    gameVar.selectedMenu = 0
                }
            } else {
                if (Util.pointInsideRectUI(pos, UI.battle.buttonMenu)) {
                    gameVar.menu = false
                } else if (Util.pointInsideRectUI(pos, UI.menu.buttonResume)) {
                    gameVar.menu = false
                } else if (Util.pointInsideRectUI(pos, UI.menu.buttonSurrender)) {
                    gameVar.menu = false
                    gameVar.scene = 'title'
                }
            }
        }
    }

    keyDown(gameVar, key) {
        if (gameVar.menu === false) {
            if (key === 'Escape') {
                gameVar.menu = true
                gameVar.selectedMenu = 0
            }
        } else {
            if (key === 'Escape') {
                gameVar.menu = false
            } else if (key === 'ArrowUp') {
                gameVar.selectedMenu = (gameVar.selectedMenu + 2) % 3
            } else if (key === 'ArrowDown') {
                gameVar.selectedMenu = (gameVar.selectedMenu + 1) % 3
            } else if (key === 'Enter') {
                if (gameVar.selectedMenu === 0) {
                    gameVar.menu = false
                } else if (gameVar.selectedMenu === 1) {
                    gameVar.menu = false
                    gameVar.scene = 'title'
                } else if (gameVar.selectedMenu === 2) {
                    gameVar.menu = false
                    gameVar.scene = 'title'
                }
            }
        }
    }

    keyUp(gameVar, key) {

    }
}
