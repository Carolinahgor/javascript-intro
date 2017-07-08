 // U3.W7: JavaScript Olympics

// Integrantes parejas: nombre1, nombre2


// 0. Objetos

function Athlete (name, height, sport) {
	this.name = name,
	this.height = height,
	this.sport = sport
}

var myBoyfriend = new Athlete("Juan", "1.70", "Tennis");
var myself = new Athlete("Carolina", "1.70", "food");


// 1. Añadir propiedades a objetos

function addWinToAthlete (athletes) {
	athletes.forEach(function(Athlete){
		athlete.win = function() {
			("{Athlete.name} won the {event}")};
}


// Function Declaration



// 2. Voltea un String




// 3. Remueve numeros impares




// 4. Funcion constructora




// 5. Reflexion


/////// Pruebas //////////
var michaelPhelps = new Athlete("Michael Phelps", 29, "swimming")
console.log(michaelPhelps.constructor === Athlete)
console.log((michaelPhelps.name + " " + michaelPhelps.sport + " " + michaelPhelps.age) === 'Michael Phelps swimming 29')
