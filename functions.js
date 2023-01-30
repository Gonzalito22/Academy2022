let datosPersonales =
  "Nombre: Marcos Perez <br><br> Direccion: Helguera 2476 - CABA<br><br> Edad: 27 <br><br> Estado civil: Soltero <br><br> Fecha de Nacimiento: 29/05/1995";

let educacion =
  "03/2015 – 12/2017 Escuela Superior de Periodismo Deportivo José R. López Pájaro <br><br> Círculo de Periodistas Deportivos <br><br> Titulo: Técnico Superior en Periodismo con Especialización en Deportes";

let logros =
  "Distinguido como Periodista Deportivo Revelación de Radio en el año 2020 por APTRA ";

let experiencia =
  "08/2019 Participación en Programa Radial “Bien Levantado” – FM 95.9 – Rock & Pop <br><br> 06/2019 Participación en Programa Radial “Frecuencia 710” – AM 710 – Radio 10";

let contacto =
  "Teléfono: (011) 5330-7190 <br><br> E-mail: marcosperez@gmail.com";

document
  .getElementById("datosPersonales")
  .addEventListener("click", function () {
    document.getElementById("desplegar").innerHTML = datosPersonales;
  });

document.getElementById("educacion").addEventListener("click", function () {
  document.getElementById("desplegar").innerHTML = educacion;
});

document.getElementById("logros").addEventListener("click", function () {
  document.getElementById("desplegar").innerHTML = logros;
});

document
  .getElementById("experienciaLaboral")
  .addEventListener("click", function () {
    document.getElementById("desplegar").innerHTML = experiencia;
  });

document.getElementById("contacto").addEventListener("click", function () {
  document.getElementById("desplegar").innerHTML = contacto;
});
