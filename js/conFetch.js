
/* Se añade un evento a cada botón para que al pulsarlos se ejecute la función*/
document.getElementById("1").addEventListener("click", seleccionarTexto);
document.getElementById("2").addEventListener("click", seleccionarTexto);
document.getElementById("3").addEventListener("click", seleccionarTexto);

/* Función que selecciona el texto segun pulsemos un boton u otro */
function seleccionarTexto(e) {
	/* Se crea un switch para seleccionar el texto segun el boton pulsado. */
	switch (parseInt(e.target.value)) {
		case 1:
			// Se crea la petición al servidor
			fetch("archivoExterno/texto1.txt")
				/* Se obtiene la respuesta del servidor mediante el uso del objeto
                then ya que FETCH trabaja con PROMESAS. */
				.then( (res)=> {
					// Se obtiene el texto del archivo
					return res.text();
					// Se ejecuta la función que muestra el texto
				})
				.then((data)=> {
					// Se muestra el texto en el párrafo
					document.getElementById("salidaTexto").innerHTML = data;
				});
			break;
		case 2:
			fetch("archivoExterno/texto2.txt")
				.then((res) => {
					// Se obtiene el texto del archivo
					return res.text();
					/* Se ejecuta la función que muestra el texto mediante 
                el uso del objeto then  utilizando la nomenclatura de arrow function 
                para declarar la función */
				})
				.then((data) => {
					// Se muestra el texto en el párrafo
					document.getElementById("salidaTexto").innerHTML = data;
				});
			break;
		case 3:
			fetch("archivoExterno/texto3.txt")
				.then((res) => {
					return res.text();
				})
				.then((data) => {
					document.getElementById("salidaTexto").innerHTML = data;
				});
			break;
		
	}
}

function ocultarTexto() {
	ocultar = document.getElementById("salidaTexto");
	ocultar.innerHTML = "";
}