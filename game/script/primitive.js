export class Vec2 {
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    add(v) {
        this.x += v.x; this.y += v.y
    }

    sub(v) {
        this.x -= v.x; this.y -= v.y
    }

    mul(a) {
        this.x *= a; this.y *= a;
    }

    static Add(v1, v2) {
        return new Vec2(v1.x + v2.x, v1.y + v2.y)
    }

    static Sub(v1, v2) {
        return new Vec2(v1.x - v2.x, v1.y - v2.y)
    }

    static Mul(v, a) {
        return new Vec2(v.x * a, v.y * a)
    }

    static Dot(v1, v2) {
        return v1.x * v2.x + v1.y * v2.y
    }
}

export class Rect2 {
    constructor(x, y, w, h) {
        this.pos = new Vec2(x, y)
        this.size = new Vec2(w, h)
    }
}
