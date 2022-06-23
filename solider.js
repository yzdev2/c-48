class Solider{
    constructor(x,y,r){
        var options={
            isStatic:false,
            density:0.25,
restitution:0.8,

        }
this.body=Bodies.polygon(x,y,3,r,options)
World.add(world,this.body)
this.x=x
this.y=y
this.r=r
this.image=loadImage("soliger.png")
    }
    display(){
var angle=this.body.angle
var pos=this.body.position
push()
translate(pos.x,pos.y)
rotate(angle)
imageMode(CENTER)
image(this.image,190,155,this.r*50,this.r*50)
pop()
    }
}