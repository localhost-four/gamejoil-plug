console.log("[*] start Script.js");

console.log("[!] check navigator");
// Nav
document.addEventListener('DOMContentLoaded', function() {
  
  console.log("[!] check XHR");
  // XHR
  const xhr = new XMLHttpRequest();
  const url = "https://google.com";
  var body = "<?xml version=1.0> <person> <name> ROOT </name> </person>";

  function callOtherDomain() {
    if(invocation) {
      invocation.open('POST', url, true);
      

      invocation.onreadystatechange = handler;
      invocation.send(body);
    }
  }

  xhr.open("GET", url);

  console.log("[!] check URl data");
  //DATEBASE
  const getData = (offset, limit) => {
    const data = []
    const start = Math.max(SETTINGS.minIndex, offset)
    const end = Math.min(offset + limit - 1, SETTINGS.maxIndex)
    if (start <= end) {
      for (let i = start; i <= end; i++) {
        data.push({ index: i, text: `item ${i}` })
      }
    }
    return data
  }

  !function(o,c){var n=c.documentElement,t=" w-mod-";n.className+=t+"js",("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")}(window,document);


  // Получаем все div элементы внутри <body>
  const divElements = document.getElementsByTagName('div');

  // Преобразуем коллекцию div элементов в массив
  const divArray = Array.from(divElements);

  // Функция для удаления всех div элементов
  function removeDivs() {
    divArray.forEach((div) => {
      // Проверяем, что div находится непосредственно внутри <body>
      if (div.parentNode === document.body) {
        div.remove();
      }
    });
  }

  console.log("[!] check load-items");

  var mainElement = document.querySelector('main');

  // Создаем новую кнопку
  var div = document.createElement('div');
  div.innerHTML = `<button class="idTop" id="load-more"top: 0; style="transition: all 6.3s ease; display = 'inline-block'; position: center; border-top: 3px solid; border-bottom: 1px solid; border-top-left-radius: 1px; border-top-right-radius: 2px;"></button><br>`;
  // Добавляем новую кнопку в конец блока
  mainElement.appendChild(div);
  

  // Функция для показа div элементов по одному
  function showDivs() {
    const loadMoreBtn = document.getElementById('load-more');
    let index = 0;

    function loadMore() {
      console.log('load: ', index);
      // Удаляем текущую кнопку
      loadMoreBtn.remove();

      if (!loadMoreBtn.nextElementSibling === null) {
        // Создаем новую кнопку
        var newButton = document.createElement('button');
        newButton.id = 'load-more';
        newButton.innerText = '🔄';
        newButton.addEventListener('click', loadMore);

        // Добавляем новую кнопку в конец блока
        document.body.appendChild(newButton);
      } 

      if (index < divArray.length) {
        const div = divArray[index];
        document.body.appendChild(div.cloneNode(true));
        index++;
      } else {
        loadMoreBtn.removeEventListener('click', loadMore);
      }
    }


    loadMoreBtn.addEventListener('click', loadMore);
  }

  // Удаляем все div элементы при загрузке страницы
  document.addEventListener('DOMContentLoaded', removeDivs);

});