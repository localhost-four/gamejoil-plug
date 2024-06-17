console.log("Hey!");

// Easter Egg Coding. 
// If you are being sneaky and trying to look at my code well done. The code for the easter egg is here. 
// If you want a better experience though, I would check the footer and try to find the easter egg
try{
	var logoLink = document.getElementById("easterEgg").src;
	console.log(logoLink);
	document.getElementById("footerHomeLink").onmouseover = function() {mouseOver()};
	document.getElementById("footerHomeLink").onmouseout = function() {mouseOut()};
}
catch{console.log("Something went wrong");}



function mouseOver() {
  document.getElementById("easterEgg").className = "easterEgg";
  document.getElementById("easterEgg").style.width = "135px";
  document.getElementById("easterEgg").style.height = "186px";
  console.warn("This might or might not be an easter egg...");
}

function mouseOut() {
  document.getElementById("easterEgg").className = "";
  document.getElementById("easterEgg").src = logoLink;
  document.getElementById("easterEgg").style.width = "150px";
  document.getElementById("easterEgg").style.height = "150px";
}

// Rocket Launching
try{
	document.getElementById("rocketmeluncur").onclick = function() {testing()};

	$(document).ready(function(){
				if(jQuery(window).scrollTop()<50){ //Pixels till rocket show
					jQuery('#rocketmeluncur').slideUp(1); //Shows
				}
				else{
					jQuery('#rocketmeluncur').slideDown(11500); //desaparece
				}
			});


	jQuery(window).scroll(function(){
				if(jQuery(window).scrollTop()<50){ //Pixels till rocket show
					jQuery('#rocketmeluncur').slideUp(500); //Shows
				}
				else{
					jQuery('#rocketmeluncur').slideDown(500); //desaparece
				}
			})

}catch{console.log("Something went really wrong!")}


function testing(){
	jQuery("html, body").animate({ scrollTop: '0px',display:'none'},{duration: 900, easing: 'swing'});

	$("#rocketmeluncur").addClass('launchrocket');
	$("#rocketlunchimg").addClass('launchrocket');

	setTimeout(function(){
		$("#rocketmeluncur").attr('class', 'showrocket');
		$("#rocketlunchimg").attr('class', 'showrocket');
	},1500)
}

// Limit Comments
try {
	let comments = document.getElementsByClassName("comment");

	if (comments.length > 3 || comments != null) {
		for (let i = 0; i < comments.length; i++) {
			var commentID = comments[i].id;
			document.getElementById(commentID).style.display = "none";
		}
	}
	
	element = document.getElementById("loadMoreComments");
	element.onclick = function() {loadComments()};
	
	function loadComments() {
		for (let i = 0; i < comments.length; i++) {
			var commentID = comments[i].id;
			document.getElementById(commentID).style.display = "block";
		}
		element.style.display = "none"
	}
} catch (error) {
	console.log(error);
}

// Share Functions


function facebookShare(){
	var title = document.getElementById("postTitle").textContent;
	window.open("https://www.facebook.com/sharer/sharer.php?u="+escape(window.location.href)+"&t="+title,'','menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
	return false; 
}
function twitterShare()
{
	var title = document.getElementById("postTitle").textContent;
	window.open("http://twitter.com/share?text="+title+" -&url="+escape(window.location.href)+"&hashtags=jonsblogs.com",'','menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
	return false;
}
function whatShare()
{
	var title = document.getElementById("postTitle").textContent;
	window.open("https://wa.me/?text="+title+" - "+escape(window.location.href),'','menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
	return false; 
}
function pocketShare()
{
	var title = document.getElementById("postTitle").textContent;
	window.open("https://getpocket.com/save?url="+escape(window.location.href)+"&title="+title,'','menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
	return false; 
}
function mailShare()
{
	var title = document.getElementById("postTitle").textContent;
	window.open("mailto:?subject="+title+"&body="+escape(window.location.href));
	return false; 
}

try{
	document.getElementById("facebookButton").onclick = function() {facebookShare()};
	document.getElementById("twitterButton").onclick = function() {twitterShare()};
	document.getElementById("whatssapButton").onclick = function() {whatShare()};
	document.getElementById("pocketButton").onclick = function() {pocketShare()};
	document.getElementById("emailButton").onclick = function() {mailShare()};
}
catch{}



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
		console.log("Something went wrong");
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
} catch {
	console.log("Something went wrong");
}
