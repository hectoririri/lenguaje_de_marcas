function mostrarDatos(){
	var nom = document.getElementById("nom").value;
		if (nom == "") {
			nom = "No se ha introducido ningún dato"
		}
	var ape = document.getElementById("ape").value;
		if (ape == "") {
			ape = "No se ha introducido ningún dato"
		}
	var email = document.getElementById("email").value;
		if (email == "") {
			ape = "No se ha introducido ningún dato"
		}
	var fech = document.getElementById("fechita").value;
		if (fech == "") {
			fech = "No se ha introducido ningún dato"
		}
	var com = document.getElementById("comentario").value;
		if (com == "") {
			com = "No se ha introducido ningún dato"
		}
			
	var elementos_cali = document.getElementsByName("calidad");
	var cali = "";
	for(var i=0; i<elementos_cali.length; i++) {
		if (elementos_cali[i].checked == true) {
			cali = elementos_cali[i].value;
			}
			}
		var sel = document.getElementById("seleccion").value;
	var lista = document.getElementById("seleccion");
	var valorNacimiento = lista.options[lista.selectedIndex].text;
		var result = "Nombre: "+nom+"\nApellidos: " +ape+"\nEmail: "+email+"\nFecha: "+fech+"\nComentario: "+com+"\nLugar de nacimiento: "+valorNacimiento+"\nCalidad del formulario: "+cali;
	alert(result);
}

function borrarDatos(){
	var nom = "";
	var ape = "";
	var email = "";
	var fech = "";
	var com = "";
	var cali = "";
	var valorNacimiento = "";
}