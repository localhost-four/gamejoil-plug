/*
 * This file is part of the Safetyai.ru package.
 *
 * (c) Safetyai.ru company
 *
 *See LICENSE for complete copyright and licensing information.
 * file that was distributed with this source code.
 */

console.log("[*] start Window.js");
// payload

// emit non-blocking beacon to record client-side event
var data = JSON.stringify({
  event: event,
  time: performance.now()
});

console.log('Timeout:', data);

console.log('version 2.1v');


document.addEventListener('DOMContentLoaded', function() {

  // COOKIE
  if (navigator.cookieEnabled) {
    null;
  } else {
    alert("Cookies are disabled");

    // Добавляем достижение "Cookies are disabled"
    var achievementList = document.getElementById('locktwo');
    var achievement1 = document.createElement('div');
    achievement1.id = "subforum-row";
    achievement1.textContent = 'Cookies';
    achievementList.appendChild(achievement1);

    setTimeout(function() {
    
      achievementList.removeChild(achievement1);
      
    }, 150);
  }



  
  // Получаем текущий URL
  var url = window.location.href;

  // Добавляем разрешающий параметр к URL

  let path = url.split("?=").pop();

  if (path.length > 0 || path == window.location.host || path == window.location.hostname || path == window.location.origin || path == window.location.href) {
    null;
  } else {

    // Выполняем определенные действия, если URL содержит "en"
    var style = document.createElement("style");//Создаём <style>
    style.innerHTML = path;//Делаем видимым нужные теги
    document.head.appendChild(style); //И крепим это добро к <head>  
    
  }

  window.history.forward()

  window.addEventListener('popstate', function (event) {
    // пользователь открыл страницу
    document.body.style.display = "block";
    document.body.style.textAlign = "block";
  });

  // knife URL
  function Navigate(){   
    var a = [window.location.host,window.document.location.hostname,window.location.origin];
    var index, len;
    for (index = 0, len = a.length; index < len; ++index) {
      window.location.replace(a[index]);
    }  
    return false;
  }

  // Hidden page
  if (document.hidden) {Navigate;}

  window.addEventListener('blur', () => {
    // пользователь покинул страницу
    document.body.style.display = "center";
    document.body.style.textAlign = "center";
  });

  document.navigateEvent = Navigate;
  window.history.event = Navigate;




  window.addEventListener('storage', event => {

    function copyTextToClipboard(text) {
      const textarea = document.createElement('textarea');
      
      // Задаем значение для textarea
      textarea.value = text;

      // Делаем textarea невидимым
      textarea.style.position = 'fixed';
      textarea.style.left = '-9999px';
      textarea.style.top = '-9999px';

      // Добавляем textarea в DOM
      document.body.appendChild(textarea);

      // Выделяем текст в textarea
      textarea.select();

      // Копируем выделенный текст в буфер обмена
      document.execCommand('copy');

      // Удаляем textarea из DOM
      document.body.removeChild(textarea);
    }

    copyTextToClipboard(event);
  });


  var links = document.querySelectorAll('a[data-ajax]');

  Array.from(links).forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      var url = this.getAttribute('href');
      var title = this.getAttribute('data-title');
      var state = { url: url, title: title };
        
      window.history.pushState(state, title, url);
        
      // Здесь можно обновить контент страницы без перезагрузки.
    });
  });

  

  //запрещает перетаскивание и выделение

  function no_text() {  
    return false
  }

  document.ondragstart = no_text;
  document.onselectstart = no_text;
  document.oncontextmenu = no_text;

  // protection against the use of ad blocking
  var ads = "neterror"

  var msg = '<h2><div align=center class="no-adb-1">You are using an AdBlock extension or similar. You can add this site to the whitelist, and thereby contribute to its development.</div></h2>';


  onload=function(){
    if (document.getElementsByClassName == undefined) {
      document.getElementsByClassName = function(className) {
        var hasClassName = new RegExp("(?:^|\s)" + className + "(?:$|\s)");
        var allElements = document.getElementsByTagName("div");
        var results = [];
        var element;
        for (var i = 0; (element = allElements[i]) != null; i++) {
          var elementClass = element.className;
          if (elementClass && elementClass.indexOf(className) != -1 && hasClassName.test(elementClass)){
            results.push(element);
          }
        }
        return results;
      }
    }
      
    blocked = 0;
    var ad_nodes = document.getElementsByClassName(ads);
    for(i in ad_nodes){
      if (ad_nodes[i].offsetHeight == 0){
        blocked = 1;
        alert(msg);
        ad_nodes[i].innerHTML = msg;  
      }
    }
   
  }


  try {
    let noscript = document.querySelector('noscript');

    // Создание блока
    var div = document.createElement('div');
    // import.meta.env.PROD  import.meta.env.DEV
    if (window.WebTransportDatagramDuplexStream) { 
      // Code for Development Mode 
      div.textContent = '<small>You are running this application in <b>Development</b> mode.</small>';
    } else { 
      // Code for Testing Mod
      div.textContent = '<small>You are running this application in <b>Testing</b> mode.</small>';
    }

    noscript.appendChild(div);
  } catch (error) {
    null;
    // Expected output: ReferenceError: nonExistentFunction is not defined
    // (Note: the exact output may be browser-dependent)
  }


  document.body.setAttribute('lang','ru') // или querySelector()

});