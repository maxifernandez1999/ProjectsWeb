

(function(){
	var mostrarImagen = function(){
		var elemento = document.getElementById("imagenLavarropas");
		if (elemento.className == "imagenLavarropas") {
			elemento.className = "imagenLavarropas ver";
		}else if(elemento.className == "imagenLavarropas ver"){
			elemento.className = "imagenLavarropas";
		}
		

	};
	var mostrarDescripcion = function(){
		var elemento2 = document.getElementById("parrafo");
		if (elemento2.className == "parrafo") {
			elemento2.className = "parrafo ver";

		}else if(elemento2.className == "parrafo ver"){
			elemento2.className = "parrafo";
		}
	};
	var boton = document.getElementById("enlace");
	boton.addEventListener("click",mostrarImagen,false);
	boton.addEventListener("click",mostrarDescripcion,false);
}())