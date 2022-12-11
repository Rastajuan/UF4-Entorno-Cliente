
//Creamos el objeto XMLHttpRequest mediante una funcion. Es siempre el primer paso para trabajar con AJAX. XMLHttpReques no permite  crear varias peticones al servidor al mismo tiempo. Si se quiere crear varias peticiones, hay que crear varios objetos XMLHttpRequest. Para crear el objeto XMLHttpRequest, hay que comprobar si el navegador soporta el objeto XMLHttpRequest. Si no lo soporta, se intenta crear con ActiveX. Los navegadores que no soportan ActiveX no podran usar AJAX

function creaObjetoXMLHttpRequest() {

	//Variable que contendra el objeto XMLHttpRequest
	var objetoXMLHttpRequest = false;


	if (window.XMLHttpRequest) { //Si el navegador soporta el objeto XMLHttpRequest, se crea
			objetoXMLHttpRequest = new XMLHttpRequest()
	}
	else
	{
		
		if (window.ActiveXObject)
		{
		objetoXMLHttpRequest = new ActiveXObject("Microsoft.XMLHTTP");
		}
	}
	return objetoXMLHttpRequest;
	
	
}

//Asginamos el objeto XMLHttpRequest a la variable docTxt. Esta variable se usara en las funciones que iremos creando
docTxt = creaObjetoXMLHttpRequest(); 

//Abrimos el archivo externo  con open() y preparamos la peticion.Los parametros son: "GET" (para que el archivo se abra en modo lectura), "archivoExterno/textoInsertar.txt" (la direccion del archivo que queremos abrir), "true" (para que la peticion sea asincrona). Si no se pone "true", la peticion sera sincrona y el navegador se quedara bloqueado hasta que se cargue el archivo con lo que no podremos seguir navegando y perdemos la interactividad de AJAX
docTxt.open("GET", "archivoExterno/texto.txt", true); 

//Funcion que recoge la respuesta del archivo. Si readyState es 4 y status es 200, el archivo se ha cargado correctamente
function leerArchivo() {
	if (docTxt.readyState == 4 && docTxt.status == 200) {  
		texto = docTxt.responseText;
	}
}

//Recogemos la respuesta del archivo. No ponemos parentesis porque no queremos que se ejecute la funcion, sino que se ejecute cuando se produzca el evento
docTxt.onreadystatechange = leerArchivo; 

//Enviamos la peticion al servidor
docTxt.send(); 



//Funcion para mostrar el texto en el div "salidaTexto"
function mostarTexto() {
	mostrar = document.getElementById("salidaTexto");
	mostrar.innerHTML = texto;
}
//Funcion para ocultar el texto en el div "salidaTexto". Sencillamente cambiamos el contenido del div por un espacio en blanco o un texto vacio
function ocultarTexto() {
	ocultar = document.getElementById("salidaTexto");
	ocultar.innerHTML = "";
}

//Funcion para mostrar el texto en el div "salidaTexto 2"
function mostarTexto2() {
	mostrar = document.getElementById("salidaTexto2");
	mostrar.innerHTML = texto;
}
//Funcion para ocultar el texto en el div "salidaTexto". Sencillamente cambiamos el contenido del div por un espacio en blanco o un texto vacio
function ocultarTexto2() {
	ocultar = document.getElementById("salidaTexto2");
	ocultar.innerHTML = "";
}
