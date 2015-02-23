//var red = document.getElementById('myElement').style.backgroundColor = 'rgb(255, 0, 0)';
//var green = document.getElementById('myElement').style.backgroundColor = 'rgb(0, 255, 0)';

function RedOrGreen(myElement){	
	this.makeGreen =function(){
		document.getElementById('myElement').style.backgroundColor = 'rgb(0, 255, 0)';
	};	
	this.makeRed =function(){
		document.getElementById('myElement').style.backgroundColor = 'rgb(255, 0,0)';
	};	
}
var rg = new RedOrGreen();