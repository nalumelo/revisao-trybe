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