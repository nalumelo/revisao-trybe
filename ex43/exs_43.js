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

let smaller = arrayy[0];
for (let index = 0; index < arrayy.length; index += 1) {
    if ((arrayy[index]).length < smaller.length) {
        smaller = arrayy[index];
    } else {
        smaller = smaller;
    }
};

console.log(smaller);

//ex 4
let maiorPrimo;

for (let index = 0; index <= 50; index += 1) {
    let acc = 0;
    for (let indexx = 0; indexx <= 50; indexx += 1) {
        
        if (index % indexx === 0) {
            acc += 1;
        } else {
            acc = acc;
        }
    }
    if (acc == 2) {
        maiorPrimo = index;
    }
};

console.log(maiorPrimo);
