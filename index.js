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

function react() {
	var reactNumero = document.getElementById("react")
	if (reactNumero >= 1) {
		return reactNumero
	}else {
		reactNumero.style.display = "none";
}
}

function onlyOne(checkbox) {
    var checkboxes = document.getElementsByName('check')
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
    })
}

function myFunction() {
	var checkBox = document.getElementById("cartao");
	var text = document.getElementById("nomeCartao");
	var text2 = document.getElementById("numeroCart")
	var text3 = document.getElementById("nome")
	var text4 = document.getElementById("nomePessoa")

  
	if (checkBox.checked == true){
	  text.style.display = "block";
	  text2.style.display = "block";
	  text3.style.display = "block";
	  text4.style.display = "block";
	} else {
	  text.style.display = "none";
	  text2.style.display = "none"
	  text3.style.display = "none"
	  text4.style.display = "none"
	}
  }

  