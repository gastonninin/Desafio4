var studentsList = [
  {
    firstName: 'Juan',
    lastName: 'Pérez',
    dni: 45678987,
  },
  {
    firstName: 'Ana',
    lastName: 'Fernandez',
    dni: 45678989,
  },
  {
    firstName: 'Pedro',
    lastName: 'Mármol',
    dni: 45678956,
  },
  {
    firstName: 'Pablo',
    lastName: 'Picapiedras',
    dni: 45678983,
  }
];

var index = prompt("Ingresa un nombre");


for(var i=0; i < studentsList.length; i++){
  var student = new Persona(studentsList[i].firstName,
    studentsList[i].lastName, studentsList[i].dni);

   console.log(student.getStudentName());
}

function Persona(firstName, lastName, dni){
  this.firstName = firstName;
  this.lastName = lastName;
  this.dni = dni;

  this.getStudentName = function(){
    if (firstName === index)
		return this.firstName + " " + this.lastName + " " + this.dni;
  }
}

