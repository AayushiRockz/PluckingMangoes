class mango {
    constructor(x,y,r){
        var options = {
            isStatic:true,
            restitution:0,
            friction:1,
            
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body = Bodies.circle(x,y,r,options)
   
        this.image = loadImage("mango.png");

        World.add(world,this.body);
    }
    display(){
       
        var pos=this.body.position;
        push()
        translate(pos.x, pos.y);
        rectMode(CENTER)
        strokeWeight(4);
        circle(0,0,this.r);
       
        imageMode(CENTER);
        image(this.image, 0,0,this.r*3,this.r*2.5)
        pop()
    }
}