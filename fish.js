class Fish {
    constructor(x,y,radius){
        this.body = Bodies.circle(x,y,radius);
        this.radius = radius
        // this.image = loadImage("fish1.png");
        Matter.World.add(world22, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipse(0,0,this.radius);
        pop();
    }
}