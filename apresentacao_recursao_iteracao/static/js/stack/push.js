function limpar(screen,stack,relposX,relposY,relWidth,relHeight){
    this.screen=screen
    this.stack=stack
    this.width=this.screen.width*relWidth;
    this.height=this.screen.height*relHeight;
    this.x_pos=this.stack.stackX+this.stack.stackWidth+this.screen.width*relposX;
    this.y_pos=this.stack.stackY+this.stack.stackHeight-this.height+this.screen.height*relposY;

    this.screen.add_canvas_obj(this);

    this.show=function(){
          noStroke();
          fill(76, 175, 80);
          rect(this.x_pos,this.y_pos,this.width,this.height)
          fill(255)
          textFont("fontBold");
          textSize(20);
          text("Limpar",this.x_pos+this.width/2-20,this.y_pos+this.height/2+5);
    }

    this.onClick=function(){
        if(mouseX>this.x_pos && mouseX<this.x_pos+this.width && mouseY>this.y_pos && mouseY<this.y_pos+this.height){
            this.stack.data=[]
        }
    }

}