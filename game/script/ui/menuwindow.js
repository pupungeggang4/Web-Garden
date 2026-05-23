import {UI} from "ui"
import {Render} from "render"

export class MenuWindow {
    static render(gameVar) {
        let canvas = gameVar.canvas
        let ctx = gameVar.ctx

        ctx.fillStyle = 'white'
        Render.fillRectUI(ctx, UI.menu.rect)
        Render.strokeRectUI(ctx, UI.menu.rect)
        ctx.fillStyle = 'black'

        Render.fillTextUI(ctx, 'Paused', UI.menu.textPaused)
        Render.strokeRectUI(ctx, UI.menu.buttonResume)
        Render.fillTextUI(ctx, 'Resume', UI.menu.textResume)
        Render.strokeRectUI(ctx, UI.menu.buttonSurrender)
        Render.fillTextUI(ctx, 'Surrender', UI.menu.textSurrender)

        Render.strokeRectUI(ctx, UI.menu.arrow[gameVar.selectedMenu])
    }
}
