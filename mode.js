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

        var message = document.createElement('div');
        message.innerText = mess;
        message.style.position = 'fixed';
        message.style.top = '0';
        message.style.left = '15%';
        message.style.transform = 'translateX(-100%)';
        message.style.background = 'lightblue';
        message.style.color = 'white';
        message.style.padding = '10px';
        message.style.borderRadius = '5px';
        message.style.zIndex = '9998';
        message.style.transition = 'all 0.5s ease';
        
        document.body.appendChild(message);
        
        setTimeout(function() {
            message.style.top = '-100px';
            setTimeout(function() {
                message.remove();
            }, 500);
        }, 2600);
        
        var messages = document.querySelectorAll('div');
        messages.forEach(function(msg, index) {
            msg.style.transform = 'translateX(' + (messages.length - index) * 300 + 'px)';
        });
    }
        
    displayMessage('Created by: staffuser');

    try {
        var iframe = document.getElementById('myFrame');
        
        iframe.onload = function() {
            setTimeout(function() { 
                displayMessage('Managed to connect!');
            }, 500);
        };

        iframe.onerror = function() {
            setTimeout(function() { 
                displayMessage('failed to load page!');
            }, 500);
            iframe.src = "https://gamejolt.com/";
        };
    } catch(n) { 
        setTimeout(function() {  
            displayMessage('loading');
        }, 500);
    }

    addEventListener("message", (event) => {
        setTimeout(function() {  
            displayMessage(event.data);
        }, 500);
    });

    function updateTitle(title) {
        document.title = title;
        setTimeout(function() { 
            displayMessage(title);
        }, 500);
    }


    document.body.addEventListener('change', function(event) {
        updateTitle(event);
    });



    // Получаем массив цветов
    try { let colors = console.logHistory.join('').match(/#[a-f0-9]{6}/g); } catch(n) { null; }

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

});