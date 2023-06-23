//Funcion que valida la pagina contactanos.html
function contactanosValidacion(formulario) {
    // Expresión regular para validar el nombre del cliente (Palabras separadas por un espacio)
    var formatoNombreCompleto = /^[A-Za-z]+(?:\s[A-Za-z]+)*$/;
    // Expresión regular para validar correos
    var formatoCorreo = /^[\w\-]+(\.[\w\-]+)*@[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*(\.[a-zA-Z]{2,})$/;
  
    // Obtener el valor del campo
    var nombreUsuario = formulario.nombreUsuario.value.trim();
    var correoElectronico = formulario.correoElectronico.value.trim();
  
    // Validar nombre
    if (formatoNombreCompleto.test(nombreUsuario)) {
      alert("Nombre correcto");
      if (formatoCorreo.test(correoElectronico)) {
        alert("Correo correcto");
        alert("CORREO ENVIADO");
        return true;
      }
      else {
        alert("Debe ser un correo valido");
        // Evitar el envío del formulario
        window.event.preventDefault();
        return false;
      }
    }
    else {
      alert("Debe ser un nombre valido");
      // Evitar el envío del formulario
      window.event.preventDefault();
      return false;
    }
  
  }
  
  //Funcion que limita la fecha minima de los calendarios en el dia actual
  function setMinDate(formulario) {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    var maxDate = yyyy + '-' + mm + '-' + dd;
    document.getElementById("fechaIngreso").setAttribute("min", maxDate);
    document.getElementById("fechaSalida").setAttribute("min", maxDate);
	console.log("setMinDate() called");
  }
  
  //Funcion que valida la pagina clientenuevo.html
  function clienteNuevoValidacion(formulario) {
    // Expresión regular para validar el nombre del cliente (Palabras separadas por un espacio)
    var formatoNombreCompleto = /^[A-Za-z]+(?:\s[A-Za-z]+)*$/;
  
    //Expresion regular que solo admite numeros 
    var soloNumero = /^[1-9]\d*$/;
  
    // Obtener el valor del campo
    var nombreMascota = formulario.nombreMascota.value.trim();
    var razaMascota = formulario.razaMascota.value.trim();
    var nombresPropietario = formulario.nombresPropietario.value.trim();
    var apellidosPropietario = formulario.apellidosPropietario.value.trim();
  
    var edadMascota = formulario.edadMascota.value.trim();
    var dniPropietario = formulario.dniPropietario.value.trim();
    var telefonoPropietario = formulario.telefonoPropietario.value.trim();
  
    // Validar texto
    if (formatoNombreCompleto.test(nombreMascota) &&
      formatoNombreCompleto.test(nombresPropietario) &&
      formatoNombreCompleto.test(apellidosPropietario) &&
      formatoNombreCompleto.test(razaMascota)
    ) {
      // Validar numeros
      if (soloNumero.test(dniPropietario) &&
        soloNumero.test(telefonoPropietario) &&
        soloNumero.test(edadMascota)
      ) {
        alert("Datos correctos");
        return true;
      }
      else {
        alert("El dato de dni,edad o telefonos solo debe contener numeros");
        // Evitar el envío del formulario
        window.event.preventDefault();
        return false;
      }
    }
    else {
      alert("El dato de nombres,apellido o raza no puede contener numeros");
      // Evitar el envío del formulario
      window.event.preventDefault();
      return false;
    }
  }
  
  
  //Funcion que valida la pagina clientehabitual.html
  function clienteHabitual(formulario) {
    // Expresión regular para validar el nombre del cliente (Palabras separadas por un espacio)
    var formatoNombreCompleto = /^[A-Za-z]+(?:\s[A-Za-z]+)*$/;
    //Expresion regular que solo admite numeros 
    var soloNumero = /^[1-9]\d*$/;
  
    // Obtener el valor del campo
    var nombreMascota = formulario.nombreMascota.value.trim();
    var codigoMembresia = formulario.codigoMembresia.value.trim();
    var telefonoContacto = formulario.telefonoContacto.value.trim();
    // Validar texto
    if (formatoNombreCompleto.test(nombreMascota)) {
      // Validar numeros
      if (soloNumero.test(codigoMembresia) &&
        soloNumero.test(telefonoContacto)) {
        alert("Datos correctos");
        return true;
      }
      else {
        alert("El dato de telefono o membresia solo debe contener numeros");
        // Evitar el envío del formulario
        window.event.preventDefault();
        return false;
      }
    }
    else {
      alert("El dato de nombres,apellido o raza no puede contener numeros");
      // Evitar el envío del formulario
      window.event.preventDefault();
      return false;
    }
  }
  
  
  