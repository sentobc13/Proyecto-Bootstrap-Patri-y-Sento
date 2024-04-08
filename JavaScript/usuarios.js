document.addEventListener("DOMContentLoaded", function() {
    // Obtener usuarios del localStorage
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  
    // Obtener el contenedor de usuarios
    const usuariosContainer = document.getElementById("usuarios-container");
  
    // Recorrer cada usuario y crear una card para cada uno
    usuarios.forEach(usuario => {
      const card = `
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Nombre: ${usuario.nombre}</h5>
              <p class="card-text">Correo: ${usuario.correo}</p>
            </div>
          </div>
        </div>
      `;
      usuariosContainer.innerHTML += card;
    });
  });
  
  