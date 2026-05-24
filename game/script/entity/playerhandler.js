import {GameVar} from 'gamevar'
import {Render} from 'render'

import {Player} from 'player'

export class PlayerHandler {
    static render(gameVar, player) {
        let ctx = gameVar.ctx
        ctx.strokeRect(-player.rect.size.x / 2, -player.rect.size.y / 2, player.rect.size.x, player.rect.size.y)
    }
}
