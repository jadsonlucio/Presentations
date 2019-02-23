const CODE_FILES_URL = "static/codes/"

function run_code(text_area_id, html_area_id){
    let code_text = document.getElementById(text_area_id).textContent;
    let html_area_ele = document.getElementById(html_area_id);

    html_area_ele.srcdoc = code_text;

}

function readFile(fileUrl){
    xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET",fileUrl,false);
    xmlhttp.send(null);
    var fileContent = xmlhttp.responseText;

    return fileContent
}

function set_code(text_area_id){
    let file_name = document.getElementById("codeSelect").value;
    let text_area_ele = document.getElementById(text_area_id);
    let code_text = readFile(CODE_FILES_URL + file_name);

    text_area_ele.textContent = code_text;
}

