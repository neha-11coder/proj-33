class Snow{

    constructor(){
    var options={
        restitution: 1,
        friction: 0,
        isStatic:false
    
    }
    this.body=Bodies.circle(random(0,400),random(0,500),10,options);
    this.radius=10;
    World.add(world,this.body);
    }
    display(){
    ellipseMode(RADIUS);
    push ();
    translate (this.body.position.x,this.body.position.y);
    fill (255);
    ellipse(0,0,this.radius,this.radius);
    pop ();
    }
}