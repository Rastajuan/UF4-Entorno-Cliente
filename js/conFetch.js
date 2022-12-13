//Asignamos a una constante el elemento del DOM que queremos manipular
const BOTON2 = document.getElementById("boton2");
const BOTON3 = document.getElementById("boton3");
const OCULTARTEXTO= document.getElementById("ocultarTexto");
const CAJATEXTOS = document.getElementById("salidaTexto");

/* añadimos un evento a cada botón para que al pulsarlos se ejecute la función*/
BOTON2.addEventListener("click", seleccionarTextoExterno);
BOTON3.addEventListener("click", seleccionarTextoExterno);
OCULTARTEXTO.addEventListener("click", ocultarTexto);


/* Función que selecciona el texto segun pulsemos un boton u otro */
function seleccionarTextoExterno(e) {

	/* Se comprueba que boton se ha pulsado y se ejecuta la función fetch() con el archivo correspondiente */
	 if (e.target == BOTON2) { //Si el boton pulsado es el 2
		fetch("archivoExterno/texto2.txt") //Se ejecuta la función fetch() con el archivo texto2.txt
			.then((res) => { //Se ejecuta la función then() con la respuesta de la función fetch()
				return res.text(); //Se ejecuta la función text() con la respuesta de la función then()
			})
			.then((contenido) => { //Se ejecuta la función then() con la respuesta de la función text()
				CAJATEXTOS.innerHTML = contenido; //Se añade el contenido del archivo al elemento del DOM
			});
	} else if (e.target == BOTON3) {
		fetch("archivoExterno/texto3.txt")
			.then((res) => {
				return res.text();
			})
			.then((contenido) => {
				CAJATEXTOS.innerHTML = contenido;
			});
	}
}

/* Función que oculta el texto */
function ocultarTexto() {
	CAJATEXTOS.innerHTML = "";
}