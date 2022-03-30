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