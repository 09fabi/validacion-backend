function crearCliente(event) {
    event.preventDefault();

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    //Variables con los datos de formulario para crear cliente
    var txt_id_cliente = document.getElementById("txt_id_cliente").value;
    var txt_dv = document.getElementById("txt_dv").value;
    var txt_nombres = document.getElementById("txt_nombres").value;
    var txt_apellidos = document.getElementById("txt_apellidos").value;
    var txt_email = document.getElementById("txt_email").value;
    var txt_celular = document.getElementById("txt_celular").value;

    // Validar que todos los campos estén completos
    // Validar que todos los campos estén completos
    if (txt_id_cliente.trim().length === 0 || txt_id_cliente.trim().length > 8) {
      alert("El campo RUT está vacío o es invalido. No se creará el cliente.");
      return;
  }

  if (txt_dv.trim().length > 1) {
      alert("El campo DV está vacío o no tiene la numerificacion válida. No se creará el cliente.");
      return;
  }

  if (txt_nombres.trim().length === 0) {
      alert("El campo Nombres está vacío. No se creará el cliente.");
      return;
  }

  if (txt_apellidos.trim().length === 0) {
      alert("El campo Apellidos está vacío. No se creará el cliente.");
      return;
  }

  if (txt_email.trim().length === 0) {
      alert("El campo Email está vacío. No se creará el cliente.");
      return;
  }
  var emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(txt_email)) {
        alert("El campo Email no contiene un correo electrónico válido. No se creará el cliente.");
        return;
    }

  if (txt_celular.trim().length !== 8) {
      alert("El campo Celular está vacío o no tiene la numerificacion válida. No se creará el cliente.");
      return;
  }

    var raw = JSON.stringify({
      "id_cliente": txt_id_cliente,
      "dv": txt_dv,
      "nombres": txt_nombres,
      "apellidos": txt_apellidos,
      "email": txt_email,
      "celular": txt_celular,
      "fecha_registro": "2023-05-02 10:34:00"

    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://159.223.103.211/api/cliente", requestOptions)
      .then(response => response.text())
      .then(result => {
        console.log(result);
        alert("Recibido");
        window.history.back();
      })
      .catch(error => console.log('error', error));
  }