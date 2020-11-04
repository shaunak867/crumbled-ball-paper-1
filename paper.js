class Paper{



constructor(x,y){
var option = {
isStatic:false,
restitution:0.3,
friction:0.5,
density:1.2
}
this.x = x;
this.y = y;
this.radius = 20
this.body = Bodies.circle(x,y,this.radius,option)
World.add(world,this.body)


}
display(){
var pos = this.body.position
push()
translate(pos.x,pos.y)
fill("red")
ellipseMode(RADIUS)
ellipse(0,0,this.radius,this.radius)
pop()



}

}










