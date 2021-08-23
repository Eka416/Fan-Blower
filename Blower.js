class Blower {
    constructor(x,y,w,h) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        var opt = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,w,h,opt)
        World.add(world,this.body)
    }
    display() {
        push()
        var pos = this.body.position
        rectMode(CENTER)
        rect(pos.x, pos.y, this.w, this.h)
        pop()
    }
}