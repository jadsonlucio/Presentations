function Button(screen,x_pos,y_pos,width,height,text,font="fontBold",size=20,foregroundColor=255,backgroundColor=[76, 175, 80]){
    this.x_pos=x_pos;
    this.y_pos=y_pos;
    this.width=width;
    this.height=height;
    this.text=text;
    this.font=font;
    this.size=size;
    this.foregroundColor=foregroundColor;
    this.backgroundColor=backgroundColor;
    this.screen=screen;
    this.screen.add_canvas_obj(this);

    this.show=function(){
          this.screen.canvas.noStroke();
          this.screen.canvas.fill(this.backgroundColor);
          this.screen.canvas.rect(this.x_pos,this.y_pos,this.width,this.height)
          this.screen.canvas.fill(this.foregroundColor)
          this.screen.canvas.textFont(this.font);
          this.screen.canvas.textSize(this.size);
          this.screen.canvas.text(this.text,this.x_pos+this.width/2-20,this.y_pos+this.height/2+5);
    }

    this.onClick=function(){
        if(this.screen.canvas.mouseX>this.x_pos && this.screen.canvas.mouseX<this.x_pos+this.width && this.screen.canvas.mouseY>this.y_pos && this.screen.canvas.mouseY<this.y_pos+this.height){
            return true;
        }else{
            return false
        }
    }
}