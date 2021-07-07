class Stone{
	constructor(x,y,width,height){
    var options={
	restitution:0.8,
	friction:0.9,
	density:12

}
		this.x=x;
		this.y=y;
		this.width=width
        this.height=height
		this.body=rect(this.x,this.y,this.height,this.width, options)
		World.add(world, this.body);

	}
	display(){
			var pos=this.body.position;	
			push()

			translate(pos.x, pos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("blue");
            rect(0, 0, this.width, this.height);

     		pop()
	}

}