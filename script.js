var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var css = document.querySelector("h3");
var body = document.querySelector("body")

function setGradient(){
	body.style.background = "linear-gradient(to right," + color1.value + "," + color2.value + ")";
	// css.innerText = "Color 1 is " + color1.value + " Color 2 is " + color2.value;
	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

const aaa = (a) => {
	a.Math.pow()
}