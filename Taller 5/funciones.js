function suma() {
	var a = document.getElementById('num1').value;
	var b = document.getElementById('num2').value;
	if (a.length==0 || b.length==0) {
		alert("¡¡¡Campo Vacio -- Introduce Un Numero!!!")
	}else{
		 a = parseInt(document.getElementById('num1').value);
		 b = parseInt(document.getElementById('num2').value);
		document.getElementById('result').innerHTML = a+b;
	}
	
}

function resta() {
	var a = document.getElementById('num1').value;
	var b = document.getElementById('num2').value;
	if (a.length==0 || b.length==0) {
		alert("¡¡¡Campo Vacio -- Introduce Un Numero!!!")
	}else{
		 a = parseInt(document.getElementById('num1').value);
		 b = parseInt(document.getElementById('num2').value);
		document.getElementById('result').innerHTML = a-b;
	}
}

function multi() {
	var a = document.getElementById('num1').value;
	var b = document.getElementById('num2').value;
	if (a.length==0 || b.length==0) {
		alert("¡¡¡Campo Vacio -- Introduce Un Numero!!!")
	}else{
		 a = parseInt(document.getElementById('num1').value);
		 b = parseInt(document.getElementById('num2').value);
		document.getElementById('result').innerHTML = a*b;
	}
}

function divi() {
	var a = document.getElementById('num1').value;
	var b = document.getElementById('num2').value;
	if (a.length==0 || b.length==0) {
		alert("¡¡¡Campo Vacio -- Introduce Un Numero!!!")
	}else{
		 a = parseInt(document.getElementById('num1').value);
		 b = parseInt(document.getElementById('num2').value);
		document.getElementById('result').innerHTML = a/b;
	}
}

function pote() {
	var a = document.getElementById('num1').value;
	var b = document.getElementById('num2').value;
	if (a.length==0 || b.length==0) {
		alert("¡¡¡Campo Vacio -- Introduce Un Numero!!!")
	}else{
		 a = parseInt(document.getElementById('num1').value);
		 b = parseInt(document.getElementById('num2').value);
		document.getElementById('result').innerHTML = a**b;
	}
}