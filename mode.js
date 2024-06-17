document.addEventListener("DOMContentLoaded", function(event) {
    
    const frameset = document.getElementById("myFrame");
    
    let isDragging = false;
    
    document.addEventListener("mousedown", function(event) {
        if (event.target === frameset) {
            isDragging = true;
        }
    });
    
    document.addEventListener("mousemove", function(event) {
        if (isDragging) {
            const mouseX = event.clientX;
            const framesetWidth = window.innerWidth - mouseX;
            frameset.setAttribute("cols", framesetWidth + "px,*");
        }
    });
    
    document.addEventListener("mouseup", function() {
        isDragging = false;
    });


    // Функция для добавления сообщения на страницу
    function displayMessage(mess) {

        try {
            document.getElementsByTagName("title")[0].innerHTML = mess;
        } catch(n) {
            null;
        }

        // Создаем элемент div для экран-заставки
        var overlay = document.createElement("div");
        overlay.style.position = "fixed";
        overlay.style.top = "0";
        overlay.style.left = "0";
        overlay.style.width = "80%";
        overlay.style.height = "80%";



        // взять текст со страницы 
        var content = mess;

        var captionElements = document.querySelectorAll('div');
        captionElements.forEach(function(element) {
        content += element.textContent + '<br>';
        });

        var blob = new Blob([content], { type: 'text/plain' });
        var url = URL.createObjectURL(blob);



        // Добавляем текст на экран-заставку
        var text = document.createElement("p");
        text.innerHTML = `
        <div id="game-menu">
        
            <nav><h1>`+mess+`</h1>
            <a>`+url+`</a></nav>
        </div>`;

        text.style.color = "white";
        text.style.fontSize = "24px";


        overlay.appendChild(text);

        document.body.appendChild(overlay);

        var messages = document.querySelectorAll("div#game-menu");
        var current = messages.length - 1;
        for (var i = current; i >= 0; i--) {
            var topPos = i * 280;
            messages[i].style.top = topPos + "px";
        }

        setTimeout(function() {
        
            document.body.removeChild(overlay);
    
        }, 1800);
    }


    addEventListener("message", (event) => {
        displayMessage(event);
    });

    frameset.onload = function() {

        // we can get the reference to the inner window
        let iframeWindow = frameset.contentWindow; // OK
        try {
            // ...but not to the document inside it
            let doc = frameset.contentDocument; // ERROR
        } catch(e) {
            displayMessage(e); // Security Error (another origin)
        }

        frameset.onload = null; // clear the handler, not to run it after the location change
    };

    let consoleLog = console.log;
    console.logHistory = [];

    console.log = function(message) {
        //consoleLog.apply(console, arguments); // сохраняем сообщение в консоли
        console.logHistory.push(message); // сохраняем сообщение в истории
        displayMessage(message);
    }



    function checkConsole() {
    
    let newMessages = console.logHistory.slice(-5); // проверяем последние 5 сообщений
    console.logHistory = []; // очищаем историю сообщений

    if (newMessages.length > 0) {
        newMessages.forEach((message, index) => {
            displayMessage(`Page: ` + index + ` mess: ` + message);
        });
    } else {
        if (console.logHistory.length > 0) {
            if (console.logHistory[console.logHistory.length - 1].length > console.logHistory.join('').length) {
                displayMessage(console.logHistory[console.logHistory.length - 1]);
            } else {
                displayMessage(console.logHistory.join('n'));
            }
        } //else {
            //displayMessage('Notifications');
        //}

        setTimeout(function() {checkConsole()}, 1500);
    }
    }

    setInterval( checkConsole() , 250); // Выводит новые сообщения 
    

    // Слушаем событие message консоли и вызываем функцию displayMessage()
    window.addEventListener('message', function(event) {
        displayMessage(event.data);

        setTimeout(function() {checkConsole()}, 250);
    });

    (function() {
        var oldLog = console.log;
        
        console.log = function(message) {
            oldLog.apply(console, arguments);
            displayMessage(message);
            setTimeout(function() {checkConsole()}, 250);
        };
    })();
    


    document.addEventListener('keydown', function(event) {
        checkConsole();
    });



    function updateTitle(title) {
        document.title = title;
        displayMessage(title);
        setTimeout(function() {checkConsole()}, 250);
        
    }


    document.body.addEventListener('change', function(event) {
        updateTitle(event);
    });



    // Получаем массив цветов
    let colors = console.logHistory.join('').match(/#[a-f0-9]{6}/g);

    // Функция для определения наиболее яркого цвета
    function getBrightestColor(colors) {
        let brightestColor = '';
        let maxBrightness = 0;

        try {
            colors.forEach(color => {
                // Получаем RGB компоненты
                let r = parseInt(color.substr(1,2), 16);
                let g = parseInt(color.substr(3,2), 16);
                let b = parseInt(color.substr(5,2), 16);

                // Вычисляем яркость цвета
                let brightness = 0.2126 * r + 0.7152 * g + 0.0722 * b;

                if (brightness > maxBrightness) {
                maxBrightness = brightness;
                brightestColor = color;
                }
            });
        } catch(e) {
            null;
        }

        return brightestColor;
    }

    try {
        // Код для изменения border в зависимости от самого яркого цвета
        let brightestColor = getBrightestColor(colors);
        document.body.style.border = `5px solid`+brightestColor;
    } catch(e) {
        null;
    }

    // Получаем доступ к <iframe> по его id
    const iframe = document.getElementById('myIframe');

    try {
        // Получаем содержимое тега head из iframe
        const headContent = iframe.contentWindow.head.innerHTML;
        
        // Добавляем содержимое head в head текущего документа
        document.head.innerHTML += headContent;
    } catch(e) {
        null;
    } 

    try {
        // Получаем доступ к элементу внутри <iframe>, содержащему иконку
        const icon = iframe.contentWindow.querySelector('link');

        // Создаем новый <link> элемент для вставки иконки в <head>
        const newIcon = document.createElement('link');
        newIcon.rel = 'icon';
        newIcon.href = icon.href;

        // Находим <head> элемент и добавляем в него новый <link> элемент с выбранной иконкой
        document.head.appendChild(newIcon);
    } catch(e) {
        null;
    }


    const cards = document.querySelectorAll("div");

    document.addEventListener("mousemove", (event) => {
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        card.style.setProperty("--xPos", `${x}px`);
        card.style.setProperty("--yPos", `${y}px`);
      });
    });


    fetch('background.html') 
    .then(response => response.text()) 
    .then(html => { 
      const view = document.createElement('div');
      view.innerHTML = html; 
      view.style.cssText = "position: absolute; width: 150%; height: 100%; transform: translate(-2%, -8%); opacity: 0.5; bottom: 10px; padding: 80px;";
      document.body.appendChild(view); 
    })
    .catch(error => console.error('BACK: ' + error));

});