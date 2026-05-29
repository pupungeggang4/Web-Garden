import {Img} from 'asset'
import {UI} from 'ui'

import {Player} from 'player'
import {GameVar} from 'gamevar'

import {Render} from 'render'

export class PlayerUI {
    render(gameVar) {
        let canvas = gameVar.canvas
        let ctx = gameVar.ctx
        let player = gameVar.field.player

        ctx.font = '20px Opensans'
        Render.fillTextUI(ctx, `Lv.${player.level}`, UI.battle.textLevel)
        Render.drawImageUI(ctx, Img.iconLife, UI.battle.iconLife)
        Render.strokeRectUI(ctx, UI.battle.barLife)
        Render.fillTextUI(ctx, `${player.life.toFixed(0)}/${player.lifeMax.toFixed(0)}`, UI.battle.textLife)

        Render.drawImageUI(ctx, Img.iconEnergy, UI.battle.iconEnergy)
        Render.strokeRectUI(ctx, UI.battle.barEnergy)
        Render.fillTextUI(ctx, `${player.energy.toFixed(0)}/${player.energyMax.toFixed(0)}`, UI.battle.textEnergy)

        Render.strokeRectUI(ctx, UI.battle.hand)
        Render.strokeRectUI(ctx, UI.battle.flowerSlot)
        ctx.font = '32px Opensans'
    }
}
