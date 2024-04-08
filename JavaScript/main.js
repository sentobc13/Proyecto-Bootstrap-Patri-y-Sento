const boton = document.getElementById("boton");
let parrafo = document.createElement('p')


function onSubmit(e) {
  e.preventDefault();
  const nombre = document.getElementById("name").value;
  const email = document.getElementById("email").value;


  const objeto = { nombre, email, mensaje };
  localStorage.setItem("user", JSON.stringify(objeto));

  parrafo.innerText = ""//limpiamos lo que había escrito en el DOM
  pintarPantalla()
}
function pintarPantalla (){
  document.body.appendChild(parrafo)
  const user = JSON.parse(localStorage.getItem("user"));
  parrafo.innerText = 'Nombre: '+user.nombre +' Correo: '+ user.email +' Mensaje: '+user.mensaje
}
boton.addEventListener("click", onSubmit);