class Sling{
    constructor(bodyA,pointB){
    var options={
        bodyA:bodyA,
        pointB:pointB,
        stiffness:0.04,
        lenght:10
    }
    this.sling=Matter.Constraint.create(options);
    World.add(world, this.sling)
    }
    display(){
        var pointA=this.sling.bodyA.position;
        var pointB=this.sling.pointB;
        push()
        strokeWeight(3);
        stroke("black")
        line(pointA.x,pointA.y,pointB.x,pointB.y)
        pop()
    }
}