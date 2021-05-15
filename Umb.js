class  Umb{

    constructor(){

        var options={
            isStatic:true,
            restitution:0.1,
            friction:0.1,
            density:1.2,
        }

        this.image=loadImage("walking_1.png")
        this.body=Bodies.circle(300,340,100,options);
        World.add(world,this.body);
        
       
    }

display(){

var pos=this.body.position;


push()
imageMode(CENTER);
image(this.image,300,500,400,650);
translate(pos.x,pos.y);
pop()



}
}