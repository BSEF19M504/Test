function responsiveCanvas(target){
  $(bann).each(function(e){

    var parentWidth = $(this).parent().outerWidth();
    var parentHeight =  $(this).parent().outerHeight();
    $(this).attr('width', parentWidth);
    $(this).attr('height', parentHeight);
  })
}

function home() {
	var h = document.getElementById("myHome");
	var a = document.getElementById("myArticle");
	var d = document.getElementById("myDownloads");
	var u = document.getElementById("myAboutUs");
	a.style.display = "none";
	d.style.display = "none";
	u.style.display = "none";
	h.style.display = "block";
	f=5;
}
function article() {
	var h = document.getElementById("myHome");
	var a = document.getElementById("myArticle");
	var d = document.getElementById("myDownloads");
	var u = document.getElementById("myAboutUs");
	h.style.display = "none";
	d.style.display = "none";
	u.style.display = "none";
	a.style.display = "block";
}
function downloads() {
	var h = document.getElementById("myHome");
	var a = document.getElementById("myArticle");
	var d = document.getElementById("myDownloads");
	var u = document.getElementById("myAboutUs");
	h.style.display = "none";
	a.style.display = "none";
	u.style.display = "none";
	d.style.display = "block";
}
function aboutUs() {
	var h = document.getElementById("myHome");
	var a = document.getElementById("myArticle");
	var d = document.getElementById("myDownloads");
	var u = document.getElementById("myAboutUs");
	h.style.display = "none";
	a.style.display = "none";
	d.style.display = "none";
	u.style.display = "block";
}
var f=05;
function updateBanner()
{
	var c = document.getElementById("bann");
	var ctx = c.getContext("2d");
	base_image = new Image();
	base_image.src = 'https://images.pexels.com/photos/733475/pexels-photo-733475.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';
	base_image.onload = function(){
		ctx.drawImage(base_image, 0, 0);
	}
	ctx.font = f + "px Lobster";
	ctx.fillStyle = "white";
	ctx.textAlign = "center";
	ctx.fillText("HighTech Tutorials", c.width / 2, (c.height / 2)+ f / 3);
	var w = $(bann).parent().outerWidth();
	var l = 0;
	if(w < 768)
	{
		l = 45;
	}
	else
	{
		l = 65;
	}
	if(f<l)
	f++;
}
$(window).resize(function(){
  responsiveCanvas(); //every resizing
  updateBanner();
  var stage = new createjs.Stage("bann");
  stage.update(); //update the canvas, stage is object of easeljs
  f=5;
});
$(document).ready(function(){
  responsiveCanvas(); //every resizing
  updateBanner();
  var stage = new createjs.Stage("bann");
  stage.update(); //update the canvas, stage is object of easeljs

});
setInterval(updateBanner, 100 / 12);
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  var user = getCookie("username");
  if (user != "") {
    alert("Welcome again " + user);
  } else {
    user = prompt("Please enter your name:", "");
    if (user != "" && user != null) {
      setCookie("username", user, 365);
    }
  }
}