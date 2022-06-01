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

//ex 3
let section = document.createElement('section');
section.className = 'center-content';
main.appendChild(section);

//ex 4
let p = document.createElement('p');
p.innerText = 'Algum texto';
section.appendChild(p);