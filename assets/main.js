var name = document.getElementById("nome").value;
var surname = document.getElementById("cognome").value;
var age = document.getElementById("eta").value;

function keyGen() {
  document.getElementById("name").innerHTML = name;
  document.getElementById("surname").innerHTML = surname;
  document.getElementById("age").innerHTML = age;

  var yourPassword = name + surname + age + 20;
  document.getElementById("key").innerHTML = yourPassword;
}
