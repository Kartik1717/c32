class particle{
    constructor(x,y,r){
        var options={
            restitution:0.4
        }

        
        this.r=r 
        this.body = Bodies.circle(x,y,this.r,options);
        this.color=color(random(0,255), random(0,255), random(0,255));
        World.add(world,this.body);

    }

    display(){
        var c=this.body.position;
        var cr=this.body.angle;
        push()
        translate(c.x,c.y)
        rotate(cr)
        fill(this.color)
        circle(0,0,this.r)
        pop()


    }
}
