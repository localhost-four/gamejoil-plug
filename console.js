var textarea = document.getElementsByClassName("term")[0];
var speed = 50; //Writing speed in milliseconds
var consoleText = ["git push -u origin", "01001000 01101001", "404 Error: Page not found", "Python 🐍", "CH + O2 = Fire! 🔥", "Eppur si muove", "🐵-->👨 @darwin", "He I Se N Be Rg 🎩", "!false", "time.sleep(∞) 😴", "shutdown -h", "sudo apt install sl 🚂"];
var text = consoleText[Math.floor(Math.random()*consoleText.length)];
var i = 0;
let str;

try {
  runner();
} catch {
  console.log("Something went really wrong!");
}



function runner() {
  textarea.innerHTML = textarea.innerHTML + text.charAt(i);
  i++;
  setTimeout(
    function() {
      if (i < text.length)
        runner();
    }, 100);
}

function erraser() {
  str = textarea.innerHTML;
  str = str.substring(0, str.length - 1);
  textarea.innerHTML = str;

  i--;
  setTimeout(
    function() {
      if (i > 0)
        erraser();
    }, 100);
}