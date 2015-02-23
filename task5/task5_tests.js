var divId = prompt('enter div target');
var color = prompt('enter color');
var divId = document.getElementById(divId);


function setBackgroundColor(divId, color){
	if (color){
		if (color) {
			divId.style.backgroundColor = color;
			alert(' Sucess! You set the color to : ' + divId.style.backgroundColor);
		}
		
	}else if(color === divId.style.backgroundColor){
			alert('Failure');
	}
}
































