class Boy{
    constructor(x,y,width,height){
          var ground_options= {

              isStatic: true
               
          }
          
          this.body = Bodies.rectangle(x, y,width, height,ground_options);
          this.width = width;
          this.height = height;
          this.image= loadImage("boy.png");
           
          World.add(world, this.body);
        }
        display(){
          var pos =this.body.position;
          
          push();
          translate(pos.x, pos.y);
          imageMode(CENTER);
          image(this.image,0,0,210,210); 
          
          pop();
        }
      } 