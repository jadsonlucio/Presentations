var stack;

var p5_stack=function(p5_canvas){
    var screen;
    var button;

    p5_canvas.setup = function(){
        var canvas=p5_canvas.createCanvas(400,600);


        screen=new Screen(p5_canvas,400,600,[255,0,0,0]);
        stack=new Stack(screen,[85, 85, 85],[0, 140, 186],[255,255,255]);
        button=new Button(screen,325,80,75,75,"Pause");
        //button_clear=new limpar(screen,stack,0.1,0,0.3,0.1);
    }
    p5_canvas.draw = function(){
        p5_canvas.clear();
        screen.show();
    }

    p5_canvas.mousePressed=function(){
        var result=button.onClick();
        if(result){
            if(button.text=="Pause"){
                stack.pause();
                button.text="Play";
            }else{
                stack.run(2000);
                button.text="Pause";
            }
        }
    }

}

var stack_canvas=new p5(p5_stack,"container")