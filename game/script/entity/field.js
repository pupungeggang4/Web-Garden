import {Vec2, Rect2} from 'primitive'
import {Player} from 'player'

export class Field {
    constructor() {
        this.player = new Player()
        this.camera = new Rect2(0, 0, 800, 600)
        this.enemyList = []
        this.projectileList = []
    }
}
