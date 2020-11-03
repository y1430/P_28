class Boy{
    constructor(x,y,width,height){
        var options = {
           // bodyA: bodyA,
           // pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
      
      //  this.pointB = pointB
        this.body=(x,y,width,height);// Constraint.create(options);
        this.image=loadImage("boy.png");
        this.width=width;
        this.height=height;
        World.add(world, this.body);
    }

   /* fly(){
        this.boy.bodyA = null;
    }
*/
    display(){
       // imageMode(CENTRE);
      var pos=this.body.position;
       push ();
        image(this.image,pos.x,pos.y,this.width,this.height);
           pop();
        }
    }
    
