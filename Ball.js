class Ball {
    constructor(x,y,r) {
        this.x = x
        this.y = y
        this.r = r
        var opt = {
            isStatic: false
        }
        this.body = Bodies.circle(x,y,r,opt)
        World.add(world,this.body)
    }
    display() {
        push()
        var pos = this.body.position
        ellipseMode(CENTER)
        ellipse(pos.x, pos.y, this.r, this.r)
        pop()
    }
}