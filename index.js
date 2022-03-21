function aumentarValor()
{

	var value = parseInt(document.getElementById('valor').value, 10);
	value = isNaN(value) ? 0 : value;
	value++;
	document.getElementById('valor').value = value;
}

function diminuirValor()
{

	var value = parseInt(document.getElementById('valor').value, 10);
	value = isNaN(value) ? 0 : value;
	if(value >= 1 ){
		value--;
		document.getElementById('valor').value = value;
	}else{
		alert("O valor não pode ser menor do que zero!")
	}

}

  