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
