function Screen(canvas,width,height,backgroundColor){
	this.width=width;
	this.height=height;
	this.backgroundColor=backgroundColor;
	this.canvas=canvas
	this.objects=[]
	
	this.show=function(){
		this.canvas.noStroke()
		this.canvas.fill(this.backgroundColor);
		this.canvas.rect(0,0,this.width,this.height);
		for(var i=0;i<this.objects.length;i++){
			this.objects[i].show();
		}
	}
	
	this.add_canvas_obj=function(obj){
	    this.objects.push(obj);
	}
	
}