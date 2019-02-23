

var load_static_code=function(){
    document.getElementById("example_iter_for").textContent=readFile("static/code/exemplos/iteração for.txt");
    document.getElementById("example_iter_while").textContent=readFile("static/code/exemplos/iteração while.txt");
    document.getElementById("example_recursion_simple").textContent=readFile("static/code/exemplos/recursão simples.txt");
    document.getElementById("example_recursion_ark").textContent=readFile("static/code/exemplos/ackerman.txt");
    document.getElementById("legibilidade_tamanho").textContent=readFile("static/code/recursao x iteração/legibilidade e tamanho.txt");
    document.getElementById("factorial_code").textContent=readFile("static/code/Fatorial c++.txt");
    document.getElementById("fibonacci_code").textContent=readFile("static/code/Fibonacci c++.txt");
    document.getElementById("hanoi_code").textContent=readFile("static/code/Hanoi c++.txt");
}

load_static_code();