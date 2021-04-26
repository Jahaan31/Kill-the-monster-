class Boxes{
    constructor(x,y){
        var options={
            isStatic:true
        }
      this.body = Bodies.circle(x,y,20,options)
      this.r = 20
      World.add(world,this.body)
    }
    display(){
        push()
        fill("yellow")
        stroke("orange")
        ellipseMode(RADIUS)
        ellipse(this.body.position.x, this.body.position.y,this.r,this.r)
        pop()
    }
}