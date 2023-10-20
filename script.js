//alert("Hola este es mi Javascript");

//let nombre = "Julián González";

//console.log(nombre);

//CONDICIONALES 

//let title = "Julián G";

//let textotitle = title.innerText;
//console.log(textotitle)

//if(textotitle == "Julián G"){
    //titulo.innerHTML = "otro";
//} else {
  //  console.log("no se cumple")
//}

//let menu_responsive = document.querySelector("checkbtn");

//menu_responsive.onclick = function ()
//{navBar = document.querySelector(".navbar");
//navBar.this.classList.toggle("active");}

//FORMULARIO 

const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  parrafo.innerHTML = "";

  if (nombre.value.length < 4) {
    warnings += `El nombre debe contener más de 4 carcateres`;
    valido = false;
  }

  if (!valido) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "Enviado";
  }
  return valido;
}

form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});