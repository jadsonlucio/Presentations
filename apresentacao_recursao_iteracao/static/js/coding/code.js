var show_real_code=true;
var code_stack_box=document.getElementById("stack_code");
var real_code=code_stack_box.textContent;


var run=function(code_table_name){
    if(code_table_name=="stack"){
        code_text=real_code;
    }else{
        code_text=document.getElementById(code_table_name+"_code").textContent;
    }

    return eval(code_text.replace(/#/g,''));
}

var load_file_code=function(){
    code_select_box=document.getElementById("codeSelect");
    fileName=code_select_box.value;

    return readFile("static/code/stack demo code/"+fileName);

}

var load_stack_code=function(){
    real_code=load_file_code();
    code_stack_box.textContent=real_code;
    set_stack_code();
}

var set_stack_code=function(){
    if(show_real_code==true){
        code_stack_box.textContent=real_code;
    }else{
        code_stack_box.textContent=hide_stack_code();
    }

}

var change_stack_real_code=function(){

    if(show_real_code==true){
        real_code=code_stack_box.textContent;
        show_real_code=false;
    }else{
        show_real_code=true;
    }

    set_stack_code();
}

var concat=function(text,variables){
    result=""
    var i=0;
    var cont_variable=0;
    while(i<text.length){
        if(text[i]=="%" && text[i+1]=="s"){
            result=result+variables[cont_variable].toString();
            i=i+2;
            cont_variable=cont_variable+1;
        }else{
            result=result+text[i];
            i=i+1;
        }
    }

    return result;
}

function readFile(fileUrl){
    xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET",fileUrl,false);
    xmlhttp.send(null);
    var fileContent = xmlhttp.responseText;

    return fileContent
}

function hide_stack_code(){

    array_textCodebox=real_code.split("\n");
    new_textCodebox="";
    word=""
    for(var i=0;i<array_textCodebox.length;i++){
        word=word+get_first_leter(array_textCodebox[i]);
        if(get_first_leter(array_textCodebox[i])!="#"){
            new_textCodebox=new_textCodebox+array_textCodebox[i]+"\n";
        }
    }
    return new_textCodebox;

}


function get_first_leter(word){
    for(var i=0;i<word.length;i++){
        if(word[i]!=" "){
            return word[i]
        }
    }
}