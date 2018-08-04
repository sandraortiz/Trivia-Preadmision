var name = prompt ("Hola  ¿Como te llamas ? ") ;
//document.write ("Bienvenida " + name ) ;
var answer = prompt("¿Quieres jugar?").toLowerCase();
/*  == los compara aunque no sean del mismo tipo los considera
===  solo los considera si son del mismo tipo */
console.log(answer);

if(answer == "si"){
  var parrafo = document.getElementById('usuario');
  var div = document.getElementById('bienvenido');
  parrafo.innerHTML = 'Bienvenida ' + name;
  div.style.display = 'block';
}

else {
  var di = document.getElementById('nojuega');
  di.style.display = 'block';
}

function check(){
  var question1 = document.quiz.question1.value;
  var question2 = document.quiz.question2.value;
  var question3 = document.quiz.question3.value;
  var correct = 0;

  if (question1 == "beyonce") {

		correct++;

}

	if (question2 == "si") {

		correct++;

}

	if (question3 == "thriller") {

		correct++;

	}

document.getElementById("number_correct").innerHTML = "tienes " + correct + " correctas." ;
document.getElementById("respuestas").innerHTML= "pregunta 1 = beyonce " + "pregunta 2 = si " + "pregunta 3 = thriller " ;
 }
