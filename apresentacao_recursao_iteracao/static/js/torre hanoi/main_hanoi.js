var hanoi;

var p5_hanoi=function(p5_canvas){
    var screen;
    var button;
    p5_canvas.setup = function(){
        var canvas=p5_canvas.createCanvas(400,600);

        screen=new Screen(p5_canvas,400,600,[255,0,0,0]);
        hanoi=new Hanoi(screen,3,3);
        button=new Button(screen,325,80,75,75,"Pause");
    }
    p5_canvas.draw = function(){
        p5_canvas.clear();
        screen.show();
    }

    p5_canvas.mousePressed=function(){
        var result=button.onClick();
        if(result){
            if(button.text=="Pause"){
                hanoi.pause();
                button.text="Play";
            }else{
                hanoi.run(2000);
                button.text="Pause";
            }
        }
    }

}

var hanoi_canvas=new p5(p5_hanoi,"container_hanoi")


