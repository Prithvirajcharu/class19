class Bob {
    constructor(x,y,r)
    {
        var option={
            'restitution': 1.4,
            'function': 1.0,
            'dencity ':1.0,
        }

        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodis.circle(this.x,this.y,(this.r-20)/2,option)
        World.add(world,this.body);
    }
} 
    display()
    {
        var bobpos=this.body.position;
        push()
        translate(bobpos.x,bobpos.y);
        rectMode(CENTER)
        Fill(rgb(6,253,199));
        ellipse(0,0,this.r,this.r);
        pop()
    }