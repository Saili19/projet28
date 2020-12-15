class Chain {
  constructor(bodyA,bodyB){
 var options = {
      bodyA : bodyA,
      bodyB : bodyB,
      stiffness : 0.004,
      length : 20
  }
 
  this.rope = Constraint.create(options);
  World.add(world,this.rope);

}
fly(){
  this.rope.bodyA = null;
}
   
display(){
     
  if(this.rope.bodyA){
    var posA = this.rope.bodyA.position;
    var posB = this.rope.bodyB.position;

    fill(255,0,0)
    strokeWeight(4);
    line(posA.x,posA.y, posB.x  ,posB.y );
  }
    
  
   }
  }
