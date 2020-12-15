class Mango {
    constructor(x,y ){
        var ball_options ={
            isStatic:true,
            restitution: 0,
            friction: 1,
             
             
        }
       this.body=Bodies.circle(x,y,50,ball_options);
       this.image = loadImage("mango.png");
       World.add(world,this.body);
    

    }
    display(){
        var pos= this.body.position ;
       
        push()
        translate(pos.x,pos.y);
        imageMode(RADIUS);
        image(this.image,0,0,50,50);
        pop()
    }


}