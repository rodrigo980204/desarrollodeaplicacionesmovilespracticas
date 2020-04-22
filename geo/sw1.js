function soporteGeolocalizacion(){
	navigator.geolocation.getCurrentPosition(mostrarPosicion,error,{timeout:1000} );
}

function mostrarPosicion(posicion) {
	var latitud = posicion.coords.latitude;
	var longitud = posicion.coords.longitude;
	document.getElementById("longitud").innerHTML = "Longitud: "+longitud;
	document.getElementById("latitud").innerHTML = "Latitud: "+latitud;
}
function error(errores){
	alert(error.code);
}

if('serviceWorker'in navigator){
	navigator.serviceWorker.register("./sw2.js")
	.then(reg => console.log('Registro de SW exitoso', reg))
    .catch(err => console.warn('Error al tratar de registrar el sw', err))
}