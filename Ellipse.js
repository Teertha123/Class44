class Ellipse {
    constructor(x,y){
        var options={
            friction:0.8,
            restitution:0.8,
            density:1.0,
            isStatic:true
        } 
        this.body=Bodies.circle(x,y,250,options)
        World.add(world, this.body)
        this.image=loadImage("Background.png")
    }
    display(){
       var angle=this.body.angle;
       var pos=this.body.position;
       push()
       translate(pos.x,pos.y);
       rotate(angle);
       strokeWeight(3);
       stroke("black");
      imageMode(CENTER);
       image(this.image,0,0,500,500);
       pop()
    }
}