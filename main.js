console.log("Hey!");

// Night and Day Theme

onload = function(){
	try{
		document.getElementById("randomDiceLink").href = document.getElementById("randomDiceFooter").href;
		document.title = document.getElementsByTagName("H1")[0].textContent + " - Green Code" ;
	}catch{console.log("Something went wrong");}
	
	try {
		if(localStorage.getItem("notTouched")===null){
			localStorage.setItem('notTouched', true);
			console.log("This is your fist visit, right");
		}
		var notTouched = (localStorage.getItem("notTouched") === "true");
		console.log(notTouched);
		console.log(typeof(notTouched));
	
		if(notTouched){
			var d = new Date();
			var hours = d.getHours();
			console.warn("For your eyes!")
	
			if (hours < 20 && hours> 8) {//Set automatically day or night according to time
				$('body').removeClass('dark-mode');
				$('.lightDark').addClass('light');
				localStorage.setItem('darkMode', false);
			}
	
			else{
				$('body').addClass('dark-mode');
				$('.lightDark').addClass('dark');
				localStorage.setItem('darkMode', true);
			}
		}
		if(!(notTouched)){
			var darkMode = (localStorage.getItem("darkMode") === "true");
			if (darkMode) {
				console.warn("Dark Mode Onload Baby");
				$('.lightDark').removeClass('light');
				$('body').addClass('dark-mode');
				$('.lightDark').addClass('dark');
			}
			else{
				console.warn("Light Mode Onload Baby");
				$('.lightDark').removeClass('dark');
				$('.lightDark').addClass('light');
				$('body').removeClass('dark-mode');
			}
		}
	} catch {
		console.info("Something went wrong");
	}
	
}

try {
	jQuery(function($) {
		var cookieStorage = {
			setCookie: function setCookie(key, value, time, path) {
				var expires = new Date();
				expires.setTime(expires.getTime() + time);
				var pathValue = '';
				if (typeof path !== 'undefined') {
					pathValue = 'path=' + path + ';';
				}
				document.cookie = key + '=' + value + ';' + pathValue + 'expires=' + expires.toUTCString();
			},
			getCookie: function getCookie(key) {
				var keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
				return keyValue ? keyValue[2] : null;
			},
			removeCookie: function removeCookie(key) {
				document.cookie = key + '=; Max-Age=0; path=/';
			}
		};
	
		$('.lightDark').click(function() {
			localStorage.setItem('notTouched', false);
			console.log("Heeloo!");
			if ($('.lightDark').hasClass('dark')) {
				$('body').removeClass('dark-mode');
				$('.lightDark').removeClass('dark');
				$('.lightDark').addClass('light');
				localStorage.setItem('darkMode', false);
				cookieStorage.removeCookie('CookieNightMode');
			} else if ($('.lightDark').hasClass('light')) {
				$('body').addClass('dark-mode');
				$('.lightDark').removeClass('light');
				$('.lightDark').addClass('dark');
				localStorage.setItem('darkMode', true);
				cookieStorage.setCookie('CookieNightMode', 'true', 2628000000, '/');
			}
		})
	})
} catch(e) { 
	console.info(e);
}
