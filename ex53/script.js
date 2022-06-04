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
  
  // Escreva seu código abaixo.

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