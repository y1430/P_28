class Stone {
    constructor(x,y,radius) {
      var options = {
          isStatic: false,
          restitution:0,
          friction:1,
          density:1.2
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.image=loadImage("stone.png");
      this.image.scale=0.1;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      this.body.position.x = mouseX;
    this.body.position.y = mouseY;
      imageMode(CENTER);
      fill("black");
      image(this.image,pos.x, pos.y, this.radius);
    }
  };
