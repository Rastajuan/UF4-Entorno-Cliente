var boton1 = document.getElementById("1");
const CAJATEXTOS = document.getElementById("salidaTexto");
/* Se añade un evento a cada botón para que al pulsarlos se ejecute la función*/
boton1.addEventListener("onclick", seleccionarTextoExterno);
document.getElementById("2").addEventListener("click", seleccionarTextoExterno);
document.getElementById("3").addEventListener("click", seleccionarTextoExterno);

/* Función que selecciona el texto segun pulsemos un boton u otro */
function seleccionarTextoExterno(e) {

	if (e.target.value == 1) {
		fetch("archivoExterno/texto1.txt")
			.then((res) => {
				return res.text();
			})
			.then((contenido) => {
				CAJATEXTOS.innerHTML = contenido;
			});
	}
	else
		if (e.target.value == 2) {
		fetch("archivoExterno/texto2.txt")
			.then((res) => {
				return res.text();
			})
			.then((contenido) => {
				CAJATEXTOS.innerHTML = contenido;
			});
		}
		else
			if (e.target.value == 3) {
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