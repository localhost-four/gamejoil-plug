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

  !function(o,c){var n=c.documentElement,t=" w-mod-";n.className+=t+"js",("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")}(window,document);

  console.log("[!] check load-items");
});