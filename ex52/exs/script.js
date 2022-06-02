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

//ex 5
let leftSection = document.createElement('section');
leftSection.className = 'left-content';
main.appendChild(leftSection);

//ex 6
let rightSection = document.createElement('section');
rightSection.className = 'right-content';
main.appendChild(rightSection);

//ex 7
let img = document.createElement('img');
img.src = 'https://picsum.photos/200';
img.className = 'small-image';
leftSection.appendChild(img);

//ex 8
let lista = document.createElement('ul');
let numeros = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];
for (let i = 0; i < numeros.length; i+= 1) {
    let num = numeros[i];
    let numItem = document.createElement('li');
    numItem.innerText = num;
    lista.appendChild(numItem);
}
rightSection.appendChild(lista);

//ex 9
for (let i = 0; i < 3; i += 1) {
    let h3 = document.createElement('h3');
    h3.innerText = "HA";
    main.appendChild(h3);
}

//ex 1
h1.className = 'title';

//ex 2
let h33 = document.getElementsByTagName('h3');
for (let i = 0; i < 3; i += 1) {
    h33[i].className = 'description';
}

//ex 3
let leftContent = document.getElementsByClassName('left-content')[0];
main.removeChild(leftContent);

//ex 4
let rightContent = document.getElementsByClassName('right-content')[0];
rightContent.style.marginRight = 'auto';

//ex 5
let centerContent = document.getElementsByClassName('center-content')[0];
centerContent.parentElement.style.backgroundColor = 'green';