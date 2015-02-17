function changeColor(){
	
	if (document.getElementById('btn').value === 'Make red'){
		document.getElementById('box').style.backgroundColor = '#ff0000';
		document.getElementById('btn').value = 'Make green';
	}else if(document.getElementById('btn').value === 'Make green'){		
		document.getElementById('box').style.backgroundColor = '#00ff00';
		document.getElementById('btn').value = 'Make red';
	}
}