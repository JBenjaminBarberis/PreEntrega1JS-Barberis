function menuPrincipal() {
  let total = 0;
  let menu;
  do {
    menu = prompt("1-Compre un nuevo celular \n 2-Cerrar cuenta \n 3-Salir");
    menu = parseInt(menu);
    switch (menu) {
      case 1:
        total = total + comprarCelular();
        break;
      case 2:
        alert("el total acumulado" + total);
        total = 0;
        break;
      case 3:
        alert("saliendo");
        break;
      default:
        alert("opcion invalida");
    }
  } while (menu != 3);
}

function comprarCelular() {
  let acumulador = 0;
  alert("SELECCIONE LAS OPCIONES PARA GENERAR SU PRESUPUESTO");
  alert("1-Motorola \n 2-Samsung");
  let tipo = prompt("Ingrese el tipo de celular que va a solicitar");
  tipo = parseInt(tipo);

  switch (tipo) {
    case 1:
      acumulador = 50000;
      break;
    case 2:
      acumulador = 70000;
      break;
    default:
      alert("opcion invalida");
  }

  menuPrincipal();
}
