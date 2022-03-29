let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

//ex 1
console.log('Bem-vinda, ' + info.personagem);

//ex 2
info['recorrente'] = 'Sim';
console.log(info);

//ex 3
for (let key in info) {
    console.log(key);
};

//ex 4
for (let key in info) {
    console.log(info[key]);
};

//ex 5
let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmans on Bear Mountain, Dell`s Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
};

for (let key in info) {
    if (info[key] === info2[key]) {
        console.log('Ambos recorrentes')
    } else {
        console.log(info[key] + ' e ' + info2[key]);
    }
};



let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
};

//ex 6
console.log(`O filme favorito de ${leitor.nome} ${leitor.sobrenome} se chama '${leitor.livrosFavoritos[0].titulo}'`);

//ex 7
leitor.livrosFavoritos.push({
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
});
console.log(leitor);

//ex 8
console.log(`${leitor.nome} tem ${leitor.livrosFavoritos.length} livros favoritos`);