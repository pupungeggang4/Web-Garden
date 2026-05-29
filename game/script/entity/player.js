import {Unit} from 'unit'

export class Player extends Unit {
    constructor() {
        super()
        this.level = 1
        this.energy = 3.0
        this.energyMax = 6.0
        this.energyGen = 0.5
        this.hand = []
        this.deck = []
        this.flowerSlot = []
    }
}
