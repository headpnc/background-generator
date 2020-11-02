var css = document.querySelector("h3");
var color1 = document.querySelector(".gradient1");
var color2 = document.querySelector(".gradient2");
var body = document.getElementById("gradient");

function gradientColor() {
	body.style.background =
	 "linear-gradient(to right,"
	  + color1.value 
	  + "," 
	  + color2.value 
	  + ")"

	   css.textContent = body.style.background;
}



color1.addEventListener("input", gradientColor);

color2.addEventListener("input", gradientColor);