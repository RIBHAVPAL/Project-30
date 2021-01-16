class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
           pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB;
        this.ss = Constraint.create(options);
        World.add(world, this.ss);
    }

    fly(){
     this.ss.bodyA = null;   
    }

    display(){
        if(this.ss.bodyA){
        var pointA = this.ss.bodyA.position;
        var pointB = this.pointB;
        push();
        stroke("green");
        strokeWeight(4);
        line(pointB.x, pointB.y, pointA.x, pointA.y);
        pop();
    }
    }
    
}