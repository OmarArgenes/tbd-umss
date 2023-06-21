// Obtener el enlace "REGISTRAR CLIENTE" por su ID
const registrarClienteLink = document.querySelector('.sidebar a:nth-child(2)');

// Obtener el modal por su ID
const modal = document.getElementById('modal-registrar-cliente');

// Obtener el botón de cierre del modal
const closeBtn = modal.querySelector('.close');

// Obtener el formulario por su ID
const formulario = document.getElementById('formulario-registro');

// Mostrar el modal al hacer clic en el enlace
registrarClienteLink.addEventListener('click', () => {
  modal.style.display = 'block';
});

// Ocultar el modal al hacer clic en el botón de cierre
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Ocultar el modal al hacer clic fuera del área del modal
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

// Enviar el formulario sin redireccionamiento al hacer clic en el botón "Guardar"
formulario.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevenir el comportamiento predeterminado de envío

  // Obtener los datos del formulario
  const nombre = document.getElementById('nombre').value;
  const carnet = document.getElementById('carnet').value;
  const direccion = document.getElementById('direccion').value;
  const correo = document.getElementById('correo').value;

  // Crear un objeto FormData para enviar los datos
  const formData = new FormData();
  formData.append('nombre', nombre);
  formData.append('carnet', carnet);
  formData.append('direccion', direccion);
  formData.append('correo', correo);

  // Realizar la solicitud AJAX para enviar los datos al servidor
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      // Aquí puedes realizar acciones después de recibir la respuesta del servidor
      console.log(this.responseText);
    }
  };
  xhttp.open('POST', 'http://localhost/APItbd/registrar.php', true);
  xhttp.send(formData);

  // Cerrar el modal después de enviar el formulario
  modal.style.display = 'none';
});


// Obtener el enlace "REGISTRAR CLIENTE" por su ID
const registrarRequemientosLink = document.querySelector('.sidebar a:nth-child(3)');

// Obtener el modal por su ID
const modal1 = document.getElementById('modal-registrar-requerimientos');

// Obtener el botón de cierre del modal
const closeBtn1 = modal1.querySelector('.close');

// Obtener el formulario por su ID
const formularioRegistro = document.getElementById('formulario-registro1');

// Mostrar el modal al hacer clic en el enlace
registrarRequemientosLink.addEventListener('click', () => {
  modal1.style.display = 'block';
});

// Ocultar el modal al hacer clic en el botón de cierre
closeBtn1.addEventListener('click', () => {
  modal1.style.display = 'none';
});

// Ocultar el modal al hacer clic fuera del área del modal
window.addEventListener('click', (event) => {
  if (event.target === modal1) {
    modal1.style.display = 'none';
  }
});

// Manejar el envío del formulario
formularioRegistro.addEventListener('submit', (event) => {
  event.preventDefault(); // Evitar que el formulario se envíe de forma convencional
  
  const formData = new FormData(formularioRegistro);
  
  fetch('http://localhost/APItbd/requerimientos.php', {
    method: 'POST',
    body: formData
  })
  .then(response => response.text())
  .then(data => {
    console.log(data); // Aquí puedes realizar acciones adicionales o mostrar mensajes de éxito/error según la respuesta del servidor
  })
  .catch(error => {
    console.error('Error:', error);
  });
});



// Obtener referencia al enlace "VER CLIENTES" y la tabla de clientes
//const verClientesLink = document.querySelector('.sidebar a:nth-child(4)');


function mostrarTabla() {
  // Realizar una petición al servidor para obtener los datos de la tabla cliente
  // y llenar la tabla dinámicamente

  // Ejemplo de cómo podrías utilizar AJAX y PHP para obtener los datos desde el servidor
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      var datos = JSON.parse(this.responseText);
      var tablaBody = document.getElementById("tabla-clientes-body");

      // Limpiar contenido anterior de la tabla
      tablaBody.innerHTML = "";

      // Recorrer los datos y crear las filas de la tabla
      datos.forEach(function(cliente) {
        var fila = document.createElement("tr");

        var columnaNombre = document.createElement("td");
        columnaNombre.textContent = cliente.NOMCLIENTE;
        columnaNombre.style.width = "150px"
        fila.appendChild(columnaNombre);

        var columnaCarnet = document.createElement("td");
        columnaCarnet.textContent = cliente.CICLIENTE;
        columnaCarnet.style.width = "150px"
        fila.appendChild(columnaCarnet);

        var columnaDireccion = document.createElement("td");
        columnaDireccion.textContent = cliente.DIRCLIENTE;
        columnaDireccion.style.width = "150px"
        fila.appendChild(columnaDireccion);

        var columnaCorreo = document.createElement("td");
        columnaCorreo.textContent = cliente.EMAILCLIENTE;
        columnaCorreo.style.width = "150px"
        fila.appendChild(columnaCorreo);

 

        // Agregar la fila a la tabla
        tablaBody.appendChild(fila);
      });

      // Mostrar la tabla
      var tablaClientes = document.getElementById("tabla-clientes");
      tablaClientes.style.display = "block";
    }
  };
  xhttp.open("GET", "http://localhost/APItbd/obtener_datos.php", true); // Ruta al archivo PHP que obtiene los datos de la tabla cliente
  xhttp.send();
}