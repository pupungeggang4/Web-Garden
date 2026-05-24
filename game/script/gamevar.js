import {Field} from 'field'

export class GameVar {
    constructor() {
        this.canvas = document.getElementById('screen')
        this.ctx = this.canvas.getContext('2d')

        this.keyMap = {
            left: 'a', right: 'd', up: 'w', down: 's'
        }
        this.keyPressed = {
            left: false, right: false, up: false, down: false
        }

        this.framePrevious = 0
        this.frameCurrent = 0
        this.dt = 0
        this.gameLoop = null
        this.scene = 'title'
        this.state = ''
        this.menu = false

        this.selectedTitle = 0
        this.selectedCharacter = -1
        this.selectedMenu = 0

        this.field = new Field()
    }
}
