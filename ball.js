class Ball{
    constructor(x,y,r){
        var options={
            
            density:0.25,
restitution:0.8,

        }
this.body=Bodies.circle(x,y,r,options)
World.add(world,this.body)
this.x=x
this.y=y
this.r=r
this.image=loadImage("ball.png")
    }
    show(){
var angle=this.body.angle
var pos=this.body.position
push()
translate(pos.x,pos.y)
rotate(angle)
imageMode(CENTER)
image(this.image,0,0,this.r*2,this.r*2)
pop()
    }
    Moveforward(){
        Matter.Body.setVelocity(this.body,{x:20,y:0})

    }
    MoveBackward(){
        Matter.Body.setVelocity(this.body,{x:-20,y:0})
        
    }
    Moveup(){
        Matter.Body.setVelocity(this.body,{x:0,y:-10})
        
    }
    Movedown(){
        Matter.Body.setVelocity(this.body,{x:0,y:10})
        
    }
}