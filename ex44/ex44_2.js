//ex 1
function verificaPalindromo(string) {
    let palavra = string.split('');
    let palavraR = palavra.reverse();
    let palavraRe = palavraR.join('');
    if (string === palavraRe) {
        return true;
    }
    return false;
};

console.log(verificaPalindromo('pelo'));

//ex 2
function indiceMaiorValor(array) {
    let indice = 0;
    let valor = 0
    for (let index in array) {
        if (array[index] > valor) {
            valor = array[index];
            indice = index;
        } else {
            valor = valor;
            indice = indice;
        }
    };
    return indice;
};

console.log(indiceMaiorValor([2, 3, 6, 7, 10, 1]));

//ex 3
function indiceMenorValor(array) {
    let indice = 0;
    let valor = array[0];
    for (let index in array) {
        if (array[index] < valor) {
            valor = array[index];
            indice = index;
        } else {
            valor = valor;
            indice = indice;
        }
    };
    return indice;
};

console.log(indiceMenorValor([2, 4, 6, 7, 10, 0, -3]));

//ex 4
function maiorNome(array) {
    let num = 0;
    let nome;
    for (let index in array) {
        let nomeSeparado = array[index].split('');
        if (nomeSeparado.length > num) {
            num = nomeSeparado.length;
            nome = array[index];
        } else {
            num = num;
            nome = nome;
        }
    };
    return nome;
};

console.log(maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

//ex 5

//1 - enquanto index for menor que o tamanho do array, aumente index em 1
//2 - compare o numero atual com cada um dos outros numeros
//3 - a cada vez que ele se repetir, some 1 no acumulador (que deve estar zerado)
//4 - se o numero do acumulador atual for maior que o do acumulador anterior, o numero atual se torna o +repetido
//5 - se não, o mais repetido continua sendo o anterior
//6 - função retorna o mais repetido

function repeteMais(array) {
    let rep = 0;
    let more;
    for (let index in array) {
        let acc = 0;
        for (let index2 in array) {
            if (array[index] === array[index2]) {
                acc += 1;
            } else {
                acc = acc;
            }
        }
        if (acc > rep) {
            rep = acc;
            more = array[index];
        } else {
            rep = rep;
            more = more;
        }
    }
    return more;
};

console.log(repeteMais([2, 3, 2, 5, 8, 2, 3]));

//ex 6

//1 - verifica se o número recebido é natural (positivo e inteiro)
//2 - cria um looping cujo index é igual a N
//3 - diminui o index em 1 até ele ser maior que 0
//4 - ao longo do looping, soma o index atual com um acumulador

function somatorio(num) {
    let acc = 0;
    for (let index = num; index > 0; index -= 1) {
        acc += index;
    }
    return acc;
};

console.log(somatorio(5));

//ex 7
