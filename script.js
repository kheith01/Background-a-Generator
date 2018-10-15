// var li = document.getElementById("keith");
// var li = document.getElementsByTagName("li");
// var cls = document.createAttribute("class");
// var ul = document.querySelector("ul");


// function classUl() {
// 	if (ul.className==="classUl") {
// 		ul.className="";
// 	}else{
// 		ul.className="classUl";
// 	}
	
// }

// ul.addEventListener("click", classUl);

var col1 = document.getElementById("color1");
var col2 = document.getElementById("color2");
var txt1 = document.getElementById("text_1");
var txt2 = document.getElementById("text_2");
var body = document.querySelector("body");
var reSet = document.getElementById("reset");


function bodyGradient() {
	//body.className = "bcont";
	body.style.background = 
	"linear-gradient(to right, " + col1.value + ", "+ col2.value + ")";
}

function colorCode(){
	txt1.value = col1.value;
	txt2.value = col2.value;

}

function reSetAll(){
	
	txt1.value = "";
	txt2.value = "";
	col1.value = "#ffffff";
	col2.value = "#ffffff";
	body.style.background = 
	"linear-gradient(to right, " + "#ff8040" + ", "+ "#ffff00" + ")";

}

col1.addEventListener("input", bodyGradient);
col2.addEventListener("input", bodyGradient);
col1.addEventListener("input", colorCode);
col2.addEventListener("input", colorCode);
reSet.addEventListener("click", reSetAll);