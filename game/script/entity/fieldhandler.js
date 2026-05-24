import {PlayerHandler} from 'playerhandler'

export class FieldHandler {
    static render(gameVar, field) {
        let ctx = gameVar.ctx
        ctx.setTransform(1, 0, 0, 1, -field.camera.pos.x + field.camera.size.x / 2, -field.camera.pos.y + field.camera.size.y / 2)
        PlayerHandler.render(gameVar, field.player)
    }
}
