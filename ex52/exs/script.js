//ex 1
let body = document.querySelector('body');
let titulo = 'Exercício 5.2 - JavaScript DOM';
let h1 = document.createElement('h1');
h1.innerText = titulo;
body.appendChild(h1);

//ex 2
let main = document.createElement('main');
main.className = 'main-content';
body.appendChild(main);