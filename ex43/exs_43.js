//ex 1
let fatorial = 10;
for (let index = 9; index > 0; index -= 1) {
    //multiplicar atual por atual - 1
    //salvar atual em uma variavel
    fatorial = fatorial * index;
};

console.log(fatorial);

//ex 2
let word = 'tryber';
let array = word.split("");
let texto = '';

for (let indexx = (array.length - 1); indexx >= 0; indexx -= 1) {
    let letra = array[indexx];
    texto = texto + letra;
};

console.log(texto);

//ex 3
let arrayy = ['java', 'javascript', 'python', 'html', 'css'];
let bigger = '';
for (let index = 0; index < arrayy.length; index += 1) {
if ((arrayy[index]).length > bigger.length) {
        bigger = arrayy[index];
    } else {
        bigger = bigger;
    }
};

console.log(bigger);
