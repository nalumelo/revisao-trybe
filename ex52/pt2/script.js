//ex 1
let paiDoPai = document.getElementById('paiDoPai');
let texto1 = 'Texto 1';
let teste1 = document.createElement('p');
teste1.innerText = texto1;

paiDoPai.appendChild(teste1);

//ex 2
let elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
let texto2 = 'Texto 2';
let teste2 = document.createElement('p');
teste2.innerText = texto2;

elementoOndeVoceEsta.appendChild(teste2);

//ex 3
let primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
let texto3 = 'Texto 3';
let teste3 = document.createElement('p');
teste3.innerText = texto3;

primeiroFilhoDoFilho.appendChild(teste3);