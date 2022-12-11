/* En segundo lugar he creado un script con el que usaré el método FETCH 
depeticiones al servidor para leer varios archivos "".txt" que están 
alojados en el servidor. Este método permite crear varias peticiones y 
mantenerlas todas a la escucha para imprimir diferentes archivos externos */

/* Selección de los botones mediante getElementBtId y su puesta a la escucha 
a la espera de un evento para lanzar la función que selecciona el texto */
document.getElementById("1").addEventListener("click", seleccionarTexto);
document.getElementById("2").addEventListener("click", seleccionarTexto);
document.getElementById("3").addEventListener("click", seleccionarTexto);
document.getElementById("4").addEventListener("click", seleccionarTexto);
document.getElementById("5").addEventListener("click", seleccionarTexto);
document.getElementById("6").addEventListener("click", seleccionarTexto);
document.getElementById("7").addEventListener("click", seleccionarTexto);
document.getElementById("8").addEventListener("click", seleccionarTexto);
document.getElementById("9").addEventListener("click", seleccionarTexto);
document.getElementById("10").addEventListener("click", seleccionarTexto);

/* Función que selecciona el texto correcto en función del botón pulsado 
y que es evaluado por el switch */
function seleccionarTexto(e) {
	// Se evalúa el valor del target/botón pulsado.
	switch (parseInt(e.target.value)) {
		case 1:
			// Se crea la petición al servidor
			fetch("textos/primermes.txt")
				/* Se obtiene la respuesta del servidor mediante el uso del objeto
                then ya que FETCH trabaja con PROMESAS. Se ha utilizado la 
                nomenclatura tradicional para declarar la función */
				.then(function (res) {
					// Se obtiene el texto del archivo
					return res.text();
					// Se ejecuta la función que muestra el texto
				})
				.then(function (data) {
					// Se muestra el texto en el párrafo
					document.getElementById("parrafo2").innerHTML = data;
				});
			break;
		// Se repite el proceso para cada botón
		case 2:
			// Se crea la petición al servidor
			fetch("textos/segundomes.txt")
				/* En esta ocasión se obtiene la respuesta del servidor mediante 
                el uso del objeto then  utilizando la nomenclatura de arrow function 
                para declarar la función */
				.then((res) => {
					// Se obtiene el texto del archivo
					return res.text();
					/* Se ejecuta la función que muestra el texto mediante 
                el uso del objeto then  utilizando la nomenclatura de arrow function 
                para declarar la función */
				})
				.then((data) => {
					// Se muestra el texto en el párrafo
					document.getElementById("parrafo2").innerHTML = data;
				});
			break;
		// Igual para el caso 3
		case 3:
			fetch("textos/tercermes.txt")
				.then((res) => {
					return res.text();
				})
				.then((data) => {
					document.getElementById("parrafo2").innerHTML = data;
				});
			break;
		// Igual para el caso 4
		case 4:
			fetch("textos/cuartomes.txt")
				.then((res) => {
					return res.text();
				})
				.then((data) => {
					document.getElementById("parrafo2").innerHTML = data;
				});
			break;
		// Igual para el caso 5
		case 5:
			fetch("textos/quintomes.txt")
				.then((res) => {
					return res.text();
				})
				.then((data) => {
					document.getElementById("parrafo2").innerHTML = data;
				});
			break;
		// Igual para el caso 6
		case 6:
			fetch("textos/sextomes.txt")
				.then((res) => {
					return res.text();
				})
				.then((data) => {
					document.getElementById("parrafo2").innerHTML = data;
				});
			break;
		// Igual para el caso 7
		case 7:
			fetch("textos/septimomes.txt")
				.then((res) => {
					return res.text();
				})
				.then((data) => {
					document.getElementById("parrafo2").innerHTML = data;
				});
			break;
		// Igual para el caso 8
		case 8:
			fetch("textos/octavomes.txt")
				.then((res) => {
					return res.text();
				})
				.then((data) => {
					document.getElementById("parrafo2").innerHTML = data;
				});
			break;
		// Igual para el caso 9
		case 9:
			fetch("textos/novenomes.txt")
				.then((res) => {
					return res.text();
				})
				.then((data) => {
					document.getElementById("parrafo2").innerHTML = data;
				});
			break;
		// Igual para el caso 10
		case 10:
			fetch("textos/parto.txt")
				.then((res) => {
					return res.text();
				})
				.then((data) => {
					document.getElementById("parrafo2").innerHTML = data;
				});
			break;
	}
}
