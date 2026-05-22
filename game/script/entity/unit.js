import {Vec2, Rect2} from 'primitive'

export class Unit {
    constuctor() {
        this.ID = 0
        this.life = 0
        this.lifeMax = 0
        this.attack = 0

        this.speed = 0
        this.rect = new Rect2(0, 0, 40, 40)
    }
}
