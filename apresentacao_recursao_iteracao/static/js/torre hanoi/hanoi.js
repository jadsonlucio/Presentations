var Hanoi=function(screen,quantHastes,quantPieces){
   this.set_hanoi_info=function(){
        this.Width=this.screen.width*this.relWidth;
        this.HanoiX=this.screen.width*this.HanoirelX;
        this.HanoiY=this.screen.height*this.HanoirelY;
        this.HanoiWidth=this.screen.width*this.HanoirelWidth;
        this.HanoiHeight=this.screen.height*this.HanoirelHeight;

        this.PieceWidth=this.HanoiWidth*this.PiecerelWidth;
        this.PieceHeight=this.HanoiHeight*this.PiecerelHeight;
        this.PieceWidthIncrease=this.HanoiWidth*this.PieceIncreaserelWidth;
        this.PiecefloorY=this.HanoiY+this.HanoiHeight-this.Width;
   }

   this.setHastes=function(){
        this.hastes=[];
        for(var i=0;i<this.quantHastes;i++){
            this.hastes.push([]);
        }
        for(var i=this.quantPieces-1;i>=0;i--){
            this.hastes[0].push(i);
        }
        this.haste_space=this.HanoiWidth/(this.quantHastes*2);

   }

   this.setsize=function(size){
       this.quantPieces=size
       this.setHastes();
   }

   this.clearExecFunc=function(){
        for(var i=0;i<this.timeoutVars.length;i++){
            clearTimeout(this.timeoutVars[i]);
        }
    }

   this.reset=function(){
        this.clearExecFunc();
        this.operacoes=[];
        this.cont_operacoes=0;
        this.setHastes();
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
       if(operacao[0]=="move"){
          haste_orig=this.hastes[operacao[1][0]];
          haste_dest=this.hastes[operacao[1][1]];

          haste_dest.push(haste_orig.pop());

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

   this.move=function(indexHasteorig,indexHasteDest){
      this.operacoes.push(["move",[indexHasteorig,indexHasteDest]])
   }

   this.screen=screen;
   this.screen.add_canvas_obj(this);

   this.relWidth=0.04;
   this.HanoirelX=0.01;
   this.HanoirelY=0.45;
   this.HanoirelWidth=1;
   this.HanoirelHeight=0.4;

   this.PiecerelWidth=0.1;
   this.PiecerelHeight=0.1;
   this.PieceIncreaserelWidth=0.05

   this.quantHastes=quantHastes;
   this.quantPieces=quantPieces;

   this.set_hanoi_info();
   this.setHastes(quantHastes,quantPieces);

   this.operacoes=[];
   this.cont_operacoes=0;
   this.timeoutVars=[]

   this.draw_hastes=function(){

        this.screen.canvas.fill(0,100,200);
        this.screen.canvas.rect(this.HanoiX,this.HanoiY+this.HanoiHeight-this.Width,this.HanoiWidth,this.Width);
        this.screen.canvas.fill(100,100,100);

        for(var i=0;i<this.hastes.length;i++){
            this.screen.canvas.rect(2*i*this.haste_space+this.haste_space,this.HanoiY,this.Width,this.HanoiHeight-this.Width);
            this.draw_pieces(i);
        }
   }

   this.draw_pieces=function(hasteIndex){
        haste=this.hastes[hasteIndex];
        for(var i=0;i<haste.length;i++){
            pieceWidth=this.PieceWidth+haste[i]*this.PieceWidthIncrease;
            pieceHeight=this.PieceHeight;
            pieceX=2*hasteIndex*this.haste_space+this.haste_space+this.Width/2-pieceWidth/2;
            pieceY=this.PiecefloorY-(i+1)*pieceHeight;
            this.screen.canvas.rect(pieceX,pieceY,pieceWidth,pieceHeight);
        }
   }

   this.show=function(){
       this.draw_hastes();
   }

}