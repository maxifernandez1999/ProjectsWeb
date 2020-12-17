

(function(){
	var mostrarLavarropas = function(){
		var elemento = document.getElementById("claseContenedor");
		if (elemento.className == "claseContenedor") {
			elemento.className = "claseContenedor ver";
		}else if(elemento.className == "claseContenedor ver"){
			elemento.className = "claseContenedor";
		}
	};
	
	var boton = document.getElementById("enlace");
	boton.addEventListener("click",mostrarLavarropas,false);
}())