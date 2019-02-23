function Stack(screen,stackColor,pieceColor,textColor){
	this.set_stack_info=function(){
		this.stackWidth=this.screen.width*this.stackrelWidth;
		this.stackHeight=this.screen.height*this.stackrelHeight;
		this.stacksize=this.screen.width*this.relWidth;
		this.stackX=this.screen.width*this.stackrelX;
		this.stackY=this.screen.height*this.stackrelY;
	}
	
	this.screen=screen;
	this.stackColor=stackColor;
	this.pieceColor=pieceColor;
	this.textColor=textColor;
	this.relWidth=0.025;
	
	this.stackrelX=0;
	this.stackrelY=0.15;
	this.stackrelWidth=0.7;
	this.stackrelHeight=0.7;
	
	this.piecerelHeight=0.1;
	this.pieceXrelspace=0.02;
	this.pieceYrelspace=0.02;

	this.data=[];
	this.operacoes=[];
	this.screen.add_canvas_obj(this);
	this.set_stack_info();

    this.cont_operacoes=0;
    this.timeoutVars=[]

	this.draw_struct=function(){
		this.screen.canvas.noStroke();
		this.screen.canvas.fill(this.stackColor);
		this.screen.canvas.rect(this.stackX,this.stackY,this.stacksize,this.stackHeight);
		this.screen.canvas.rect(this.stackX+this.stackWidth,this.stackY,this.stacksize,this.stackHeight);
		this.screen.canvas.rect(this.stackX+this.stacksize,this.stackY+this.stackHeight-this.stacksize,this.stackWidth,this.stacksize);
	}
	
	this.draw_pieces=function(){
		var pieceWidht=this.stackWidth-this.screen.width*this.pieceXrelspace-this.stacksize
		var pieceHeight=this.screen.height*this.piecerelHeight-this.screen.height*this.pieceYrelspace;
		var pieceXspace=this.screen.width*this.pieceXrelspace;
		var pieceYspace=this.screen.height*this.pieceYrelspace;
		
		var piecestartX=this.stackX+this.stacksize+pieceXspace/2
		var piecestartY=this.stackHeight+this.stackY-this.stacksize-pieceYspace/2;
		
		this.screen.canvas.noStroke();
		for(var i=0;i<this.data.length;i++){
			var posX=piecestartX;
			var posY=piecestartY-(i+1)*pieceHeight-(i+1)*pieceYspace/2;
			var width=pieceWidht;
			var height=pieceHeight;

			var textposX=posX+(width-(this.data[i].length*8))/2;
			var textposY=posY+height/2+4;

            this.screen.canvas.textSize(20);
			this.screen.canvas.fill(this.pieceColor);
			this.screen.canvas.rect(posX,posY,width,height);
			this.screen.canvas.fill(this.textColor);
			this.screen.canvas.text(this.data[i],textposX,textposY);
	
		}
	}
	
	this.show=function(){
		this.draw_struct();
		this.draw_pieces();
	}

	this.push=function(data){
	    this.operacoes.push(["push",data]);
	    console.log(this.operacoes.length);
	}
	this.pop=function(data){
	    this.operacoes.push(["pop"]);
	}

	this.change=function(data){
	    this.operacoes.push(["change",data])
	}

    this.clearExecFunc=function(){
        for(var i=0;i<this.timeoutVars.length;i++){
            clearTimeout(this.timeoutVars[i]);
        }
    }

    this.reset=function(){
        this.clearExecFunc();
        this.cont_operacoes=0;
	    this.operacoes=[];
	    this.data=[];
    }

    this.pause=function(){
        this.clearExecFunc();
    }

    this.run=function(timesleep){
        for(var i=this.cont_operacoes;i<this.operacoes.length;i++){
            this.timeoutVars.push(setTimeout(this.run_operacao.bind(this),timesleep*(i-this.cont_operacoes+1),["run"]));
        }
    }

	this.run_operacao=function(operacao){
	    if(operacao[0]=="push"){
	        this.data.push(operacao[1]);
	    }else if(operacao[0]=="pop"){
	        this.data.pop();
	    }else if(operacao[0]=="change"){
	        this.data[this.data.length-1]=operacao[1];
	    }else if(operacao[0]=="run"){
	        operacao=this.operacoes[this.cont_operacoes];
	        this.run_operacao(operacao);
	        this.cont_operacoes=this.cont_operacoes+1;
	        if(this.cont_operacoes==this.operacoes.length){
	            this.cont_operacoes=0;
	            this.operacoes=[]
	        }

	    }

	}
}