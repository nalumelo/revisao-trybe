function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();

//ex 1
//Escrever função que cria cada dia do calendario ''
//Adicionar os dias como <li> filhos da tag <ul> com ID days ''
//Os dias tem que ter a classe day ''
//Dias 29 e 30 sao domingo e segunda '' 
//Dias 24, 25 e 31 sao feriados e devem conter as classes day e holiday ''
//Dias 4, 11, 18 e 25 sao sexta e devem conter as classes day e friday ''
function addDaysOfTheMonth() {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

    const monthDaysList = document.getElementById('days');

    for (let index = 0; index < dezDaysList.length; index += 1) {
        const days = dezDaysList[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;
        dayListItem.className = 'day';

        if (days === 24 || days === 25 || days === 31) {
            dayListItem.classList.add('holiday')
        }

        if (days === 4 || days === 11 || days === 18 || days === 25) {
            dayListItem.classList.add('friday');
        }

        monthDaysList.appendChild(dayListItem);
    }
}

addDaysOfTheMonth();

//ex 2
//Funçao que recebe como parametro a string 'Feriados'
//Criar um botao com o nome 'Feriados'
//O botao deve ter o ID btn-holiday
//O botao deve ser filho da div com classe buttons-container
function holidayButton(string) {
    const btnsDiv = document.querySelector('.buttons-container');
    const holidayBtn = document.createElement('input');
    holidayBtn.type = 'button';
    holidayBtn.value = string;
    holidayBtn.id = 'btn-holiday';
    btnsDiv.appendChild(holidayBtn);
}

holidayButton('Feriados');

//ex 3
//Funçao que muda cor de fundo dos dias que possuem a classe feriado
//Funcao que volta pra cor de fundo normal
function changeColor() {
    const hldyBtn = document.getElementById('btn-holiday');
    const newColor = 'salmon';
    const defaultColor = 'rgb(238,238,238)';
    const holidays = document.getElementsByClassName('holiday');
    hldyBtn.addEventListener('click', function() {
        for (let i in holidays) {
            if (holidays[i].style.backgroundColor === newColor) {
                holidays[i].style.backgroundColor = defaultColor;
            } else {
                holidays[i].style.backgroundColor = newColor;
            }
        }
    });
}

changeColor();

//ex 4
//Funcao que recebe como parametro a string 'Sexta-feira
//Criar um botao com o nome 'Sexta-feira'
//O botao deve ter o ID btn-friday
//O botao deve ser filho da div buttons-container
function fridayButton(string) {
    const btnsDiv = document.querySelector('.buttons-container');
    const fridayBtn = document.createElement('input');
    fridayBtn.type = 'button';
    fridayBtn.value = string;
    fridayBtn.id = 'btn-friday';
    btnsDiv.appendChild(fridayBtn);
}

fridayButton('Sexta-feira');

//ex 5
//Funcao que muda o texto exibido nos dias que sao sexta
//Ao clicar novamente o texto volta ao normal
function sextou(array) {
    const fridayBtn = document.getElementById('btn-friday');
    const fridays = document.getElementsByClassName('friday');
    const fridayText = 'Sextou';
    fridayBtn.addEventListener('click', function() {
        for (let i in fridays) {
            if (fridays[i].innerText !== fridayText) {
                fridays[i].innerText = fridayText;
            } else {
                fridays[i].innerText = array[i];
            }
        }
    });
}

let fridayArray = [4, 11, 18, 25];
sextou(fridayArray);