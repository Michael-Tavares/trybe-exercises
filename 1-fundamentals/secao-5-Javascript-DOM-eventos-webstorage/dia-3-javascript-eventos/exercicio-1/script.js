// variáveis globais
const felicidade = [ 4, 11, 18, 25 ];
const myTasks = document.querySelector('.my-tasks');


//  função que cria os dias da semana
function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
}

// função que cria os dias, atribui classe e separa feriados e sexta feira
function createDays() {
  const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  const daysWeek = document.getElementById('days');

  for (index = 0; index < decemberDaysList.length; index += 1) {
    let dias = decemberDaysList[index];
    let listaDias = document.createElement('li');
    
    listaDias.innerHTML = dias;
    listaDias.className = 'day' + decemberDaysList[index];
    listaDias.id = 'daysz';

    if (listaDias.className === 'day24' || listaDias.className === 'day25' || listaDias.className === 'day31') {
      listaDias.classList.add('holiday');
    }

    if (listaDias.className === 'day4' || listaDias.className === 'day11' || listaDias.className === 'day18' || listaDias.className === 'day25 holiday') {
      listaDias.classList.add('friday');
    }

    daysWeek.appendChild(listaDias);
  }
}

// função dos feriados
function holidayDays() {
  const feriados = document.createElement('button');
  feriados.innerText = 'Feriados';
  feriados.id = 'btn-holiday';
  const divButtons = document.getElementsByClassName('buttons-container')[0];
  divButtons.appendChild(feriados);
}

// função para mudar a cor dos feriados
function changeColorHoliday() {
  const daysHoliday = document.querySelectorAll('.holiday');
  const eventlist = document.getElementById('btn-holiday');
  let color = 'red';
  let padraoColor = 'rgb(238,238,238)';

  eventlist.addEventListener('click', function() {
    for (let index = 0; index < daysHoliday.length; index += 1) {
      if(daysHoliday[index].style.backgroundColor === color) {
        daysHoliday[index].style.backgroundColor = padraoColor;
      } else {
        daysHoliday[index].style.backgroundColor = color;
      }
    }
  })
}

// função para criar botão de sexta feira
function createBottonFriday() {
  const sextaFeira = document.createElement('button');
  sextaFeira.innerText = 'Sexta-feira';
  sextaFeira.id = 'btn-friday';
  const divButtons = document.getElementsByClassName('buttons-container')[0];
  divButtons.appendChild(sextaFeira);
}

// função para mudar o texto de sexta feira
function changeColorFriday(sexta) {
  const getFridays = document.getElementById('btn-friday');
  const changeColor = document.getElementsByClassName('friday');
  let text = 'UHUUU';
  getFridays.addEventListener('click', function(){
    for (let index = 0; index < changeColor.length; index += 1) {
      if (changeColor[index].innerText !== text) {
        changeColor[index].innerText = text;
      } else {
        changeColor[index].innerText = sexta[index];
      }
    }
  })
}

// funçao para dar zoom
const zoomIn = () => {
  let getZoom = document.querySelectorAll('#daysz');
  for (let index = 0; index < getZoom.length; index += 1) {
    getZoom[index].addEventListener('mouseover', () => {
      getZoom[index].style.fontSize = '27px';
    })
  }
}

// função para retornar zoom
const zoomOut = () => {
  let getZoomOut = document.querySelectorAll('#daysz');
  for (let index = 0; index < getZoomOut.length; index +=1) {
    getZoomOut[index].addEventListener('mouseout', () => {
      getZoomOut[index].style.fontSize = '20px';
    })
  }
}

// função que cria tarefas no calendário
const calendarTasks = (string) => {
  for (let index = 0; index < string.length; index += 1) {
    let createTasks = document.createElement('span');
    createTasks.innerText = string[index];
    myTasks.appendChild(createTasks);
  }
  
}

// função que cria cor de legenda para as tarefas
const legendColor = (cor) => {
  const taskDiv = document.createElement('div');
  taskDiv.className = 'task';
  taskDiv.style.backgroundColor = cor;
  myTasks.appendChild(taskDiv);
}

// função que seleciona uma tarefa
const selectedTasks = () => {
  let takeTask = document.getElementsByClassName('task selected');
  let selected = document.querySelector('.task');
  selected.addEventListener('click', function(event) {
    if (takeTask.length === 0) {
      event.target.className = 'task selected';
    } else {
      event.target.className = 'task';
    }
  })
}


//chama as funções
createDaysOfTheWeek();
createDays();
holidayDays();
changeColorHoliday();
createBottonFriday();
changeColorFriday(felicidade);
zoomIn();
zoomOut();
calendarTasks(['Estudar na Trybe']);
legendColor('red');
selectedTasks();

