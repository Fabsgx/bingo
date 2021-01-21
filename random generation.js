/* playlist.js */

window.onload = hide;

i=0;
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17 ,18 , 19, 20];
var random = shuffle(numbers);
n=numbers.length;



function hide() {
		var grid1 = document.getElementById("game1");
		var grid2 = document.getElementById("game2");
		var grid3 = document.getElementById("game3");
		var grid4 = document.getElementById("game4");
		grid1.style.visibility = "hidden";
		grid2.style.visibility = "hidden";
		grid3.style.visibility = "hidden";
		grid4.style.visibility = "hidden";
}

function unhide() {
		var grid1 = document.getElementById("game1");
		var grid2 = document.getElementById("game2");
		var grid3 = document.getElementById("game3");
		var grid4 = document.getElementById("game4");
		grid1.style.visibility = "visible";
		grid2.style.visibility = "visible";
		grid3.style.visibility = "visible";
		grid4.style.visibility = "visible";
}


function init() {
	var details = document.getElementById("details");
	details.innerHTML="";
	var button1 = document.getElementById("button1");
	button1.innerHTML = "Continue";
	button1.onclick = update;

	var question = document.getElementById("question");
  var suggestion = document.getElementById("suggestion");
	if (i<n) { question.innerHTML=addition(random[i]); suggestion.innerHTML="";}
	else {
		suggestion.innerHTML="End of the game, press r or the button below to restart";
		var button1 = document.getElementById("button1");
		button1.innerHTML = "Restart";
		button1.onclick = restart;
		hide();
	}

}

function shuffle(o) {
    for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};


function addition(num) {
	if (num>0) { rand=	Math.floor(Math.random() * (num-1));
								equation=rand.toString().concat("+") ;
								rand2=(num-rand).toString();
								equation=equation.concat(rand2) ;
							}
	else { equation="0+0";}

	var prefix = '1_';

	for(var s = 1; s<=rand; s++) {
			var prefix2=prefix.concat(s.toString());
			el=document.getElementById(prefix2);
		  el.innerHTML = "x";
		}

		var prefix = '2_';

		for(var s = 1; s<=(num-rand); s++) {
				var prefix2=prefix.concat(s.toString());
				el=document.getElementById(prefix2);
			  el.innerHTML = "o";
			}

	return equation;
}


function cleanup(n) {
	var prefix = n.toString().concat("_");
	for(var s = 1; s<=20; s++) {
			var prefix2=prefix.concat(s.toString());
			el=document.getElementById(prefix2);
		  el.innerHTML = "";
		}
}


function update() {
	i=i+1;
	cleanup(1);
	cleanup(2);
	unhide()

	init();
}

function restart() {
	i=0;
	random = shuffle(numbers);
	unhide()
	init();
}

document.addEventListener("keyup", function(e){
	if (e.which === 32) {
	update();
}

if (e.which === 82) {
	restart();
}

});
