var name = document.getElementById("nome").value;
var surname = document.getElementById("cognome").value;
var age = document.getElementById("eta").value;

function keyGen() {
  var yourPassword = name + surname + age + 20;
  document.getElementsByTagName("button").innerHTML = yourPassword;
}
