class Stone {
    constructor(x,y){
        var options={
            friction:0.8,
            restitution:0.8,
            density:1.0,
            isStatic:true
        } 
        this.body=Bodies.circle(x,y,10,options)
        World.add(world, this.body)
    }
    display(){
       var angle=this.body.angle;
       var pos=this.body.position;
       push()
       translate(pos.x,pos.y);
       rotate(angle);
       fill("brown");
       ellipseMode(CENTER);
       ellipse(0,0,20,20);
       pop()
    }
}