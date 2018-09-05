var numbers = [1,2,3,4,5];
var index = parseInt(prompt("Ingresa un número"));

function Persona (index) {
	numbers.splice(index, 1); 
	return numbers
}
console.log(Persona(index));
