
// CÓDIGO 

document.addEventListener("DOMContentLoaded", function () {
  const btnEnviar = document.getElementById("btnEnviar");

  btnEnviar.addEventListener("click", function(e) {
    e.preventDefault(); // Prevenir el envío del formulario

    const nameInput = document.getElementById("nombre").value;
    const emailInput = document.getElementById("email").value;
    const passwordInput = document.getElementById("contraseña").value;
    const repeatPInput = document.getElementById("repetirContraseña").value;
    const msgDiv = document.getElementById("msgDiv");
    
    // Eliminar la alerta anterior, si existe
    const previousAlert = document.querySelector(".alert");
    if (previousAlert) {
      previousAlert.remove();
    }

    let isValid = true;
    let errorMessage = "";

    // Validar campos vacíos
    if (nameInput === "" || emailInput === "" || passwordInput === "" || repeatPInput === "") {
      isValid = false;
      errorMessage = "Debes rellenar todos los campos.";
    } else {
      // Validar formato de correo electrónico
      if (!isValidEmail(emailInput)) {
        isValid = false;
        errorMessage = "Por favor, introduce un correo electrónico válido.";
      }

      // Validar que las contraseñas coincidan
      if (passwordInput !== repeatPInput) {
        isValid = false;
        errorMessage = "Las contraseñas no coinciden.";
      }

      // Validar contraseña
      if (!isValidPassword(passwordInput)) {
        isValid = false;
        errorMessage = "La contraseña debe tener al menos 4 caracteres y contener al menos una letra mayúscula.";
      }
    }

    if (!isValid) {
      const alertDiv = document.createElement("div");
      alertDiv.classList.add("alert", "alert-danger", "d-flex", "align-items-center");
      alertDiv.setAttribute("role", "alert");
      alertDiv.innerHTML = `
        <div class="alert alert-danger" role="alert">
          ${errorMessage}
        </div>
      `;
      msgDiv.appendChild(alertDiv);
    } else {
      // Guardar el usuario en el localStorage
      agregarUsuario(nameInput, emailInput);

      // Redirige a la vista de Usuarios
      window.location.href = "usuarios.html";
    }
 
    setTimeout(function () {
      // Eliminar la alerta después de 3 segundos
      const alert = document.querySelector(".alert");
      if (alert) {
        alert.remove();
      }
    }, 3000);
  });

  // Función para validar el formato del correo electrónico
  function isValidEmail(email) {
    return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);
  }

  // Función para validar la contraseña
  function isValidPassword(password) {
    // Al menos 4 caracteres y una letra mayúscula
    return /^(?=.*[A-Z]).{4,}$/.test(password);
  }
});

function guardarUsuarios(usuarios) {
    // Convertir el array de usuarios a formato JSON
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
}

function agregarUsuario(nombre, correo) {
    // Obtener la lista de usuarios del localStorage (si existe)
    var usuariosGuardados = JSON.parse(localStorage.getItem("usuarios")) || [];

    // Crear un nuevo objeto usuario
    const nuevoUsuario = {
        nombre: nombre,
        correo: correo
    };

    // Agregar el nuevo usuario al array de usuarios
    usuariosGuardados.push(nuevoUsuario);

    // Guardar el array de usuarios actualizado en el localStorage
    guardarUsuarios(usuariosGuardados);
}



// Pruebas realizadas antes del código definitivo

// document.addEventListener("DOMContentLoaded", function () {
//   const btnEnviar = document.getElementById("btnEnviar");

//   function sendForm(e) {
//     e.preventDefault(); // Prevenir el envío del formulario

//     const nameInput = document.getElementById("nombre").value;
//     const emailInput = document.getElementById("email").value;
//     const passwordInput = document.getElementById("contraseña").value;
//     const repeatPInput = document.getElementById("repetirContraseña").value;

//     const msgDiv = document.getElementById("msgDiv");
  

//     // Eliminar la alerta anterior, si existe
//     const previousAlert = document.querySelector(".alert");
//     if (previousAlert) {
//       previousAlert.remove();
//     }

//     let isValid = true;
//     let errorMessage = "";

//     // Validar campos vacíos
//     if (nameInput === "" || emailInput === "" || passwordInput === "" || repeatPInput === "") {
//       isValid = false;
//       errorMessage = "Debes rellenar todos los campos.";
//     } else {
//       // Validar formato de correo electrónico
//       if (!isValidEmail(emailInput)) {
//         isValid = false;
//         errorMessage = "Por favor, introduce un correo electrónico válido.";
//       }

//       // Validar que las contraseñas coincidan
//       if (passwordInput !== repeatPInput) {
//         isValid = false;
//         errorMessage = "Las contraseñas no coinciden.";
//       }

//       // Validar contraseña
//       if (!isValidPassword(passwordInput)) {
//         isValid = false;
//         errorMessage = "La contraseña debe tener al menos 4 caracteres y contener al menos una letra mayúscula.";
//       }
//     }

//     if (!isValid) {
//       const alertDiv = document.createElement("div");
//       alertDiv.classList.add("alert", "alert-danger", "d-flex", "align-items-center");
//       alertDiv.setAttribute("role", "alert");
//       alertDiv.innerHTML = `
//         <div class="alert alert-danger" role="alert">
//           ${errorMessage}
//         </div>
//       `;
//       msgDiv.appendChild(alertDiv);
//     } else {
    
      
//       // Guardar el usuario en localStorage
//       //localStorage.setItem("user", JSON.stringify(user));
//       console.log(user)
//       guardarUsuarios(user)


//       // Redirige a la vista de Usuarios
//      // window.location.href = "usuarios.html";
//     }
 
//     setTimeout(function () {
//       // Eliminar la alerta después de 3 segundos
//       const alert = document.querySelector(".alert");
//       if (alert) {
//         alert.remove();
//       }
//     }, 3000);




//   }

//   btnEnviar.addEventListener("click", sendForm);

//   // Función para validar el formato del correo electrónico
//   function isValidEmail(email) {
//     return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);
//   }
//   isValidEmail();
//   console.log("isvalid email",isValidEmail);

//   // Función para validar la contraseña
//   function isValidPassword(password) {
//     // Al menos 4 caracteres y una letra mayúscula
//     return /^(?=.*[A-Z]).{4,}$/.test(password);
//   }

// //Te redirige a la vista Usuarios
// //msgDiv.innerHTML = `Usuario registrado correctamente: <br> Nombre: ${nameInput} <br> Email: ${emailInput}`;


// });

 




//   function guardarUsuarios(user) {
//     // Convertir el array de usuarios a formato JSON
//     localStorage.setItem("user", JSON.stringify(user));

//     // Guardar el array de usuarios en el localStorage
//     //localStorage.setItem('usuarios', usuariosJSON);



// }




// let usuarios = [];

// function agregarUsuario() {
//     // Obtener los usuarios existentes del localStorage (si hay alguno)
   
//     usuarios.push (JSON.parse(localStorage.getItem('user')));
//     console.log("Usuarios en funcion agregar me lo traigo del storage",usuarios)
//     usuarios.push (user)
//     localStorage.setItem('usuarios')


//     // if (usuariosGuardados) {
//     //     usuarios = JSON.parse(usuariosGuardados);
//     // }

//     // // Crear un nuevo objeto usuario
//     const nuevoUsuario = {
//          nombre: nombre,
//         correo: correo
//     };

//     // // Agregar el nuevo usuario al array de usuarios
//     usuarios.push(nuevoUsuario);

//     // // Guardar el array de usuarios actualizado en el localStorage
//    guardarUsuarios(usuarios);
// }

// //agregarUsuario()