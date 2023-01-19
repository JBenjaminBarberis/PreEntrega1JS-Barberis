///Variables Globales///
let mar = false;
let col = false;
let gb = false;
const compra = [];

///Funcion Menu Principal///
function main() {
  let marca = 0;
  let color = 0;
  let gb = 0;
  let total = 0;
  let subTotal = 0;
  let menu = 0;
  do {
    menu = prompt(
      "Bienvenido al simulador de precios para venta de telefonos.\n 1-Marca del telefono \n 2-Color del telefono \n 3-Gb de ram del telefono \n 4-Finalizar la compra \n 5-Salir del simulador"
    );
    menu = parseInt(menu);
    switch (menu) {
      case 1:
        if (subTotal == 0) {
          marca = Marca();
          subTotal += marca.tipoMarca;
          alert("El sub total de tu compra es de: " + subTotal);
        } else {
          alert("Ya seleccionaste marca");
        }
        break;
      case 2:
        if (mar && !col) {
          color = Color();
          subTotal += color.tipoColor;
          alert("el sub total de tu compra es de: " + subTotal);
        } else if (!mar) {
          alert("Debes seleccionar primero la marca:" + subTotal);
        } else {
          alert("Ya seleccionaste color");
        }
        break;
      case 3:
        if (mar && col && !gb) {
          gb = gb();
          subTotal += gb.tipoGb;
          alert("el sub total de tu compra es de: " + subTotal);
        } else if (gb) {
          alert("Ya seleccionaste un gb");
        } else {
          alert("Debes seleccionar una marca/color");
        }
        break;
      case 4:
        if (mar && col && !gb) {
          total = subTotal * 1.21;
          alert(
            "Calculando costo...\n El total de su compra es: $" +
              total +
              ", Impuestos incluidos.\n Puedes continuar agrando telefonos al carrito o selecciona 5 en el menu principal para salir."
          );

          ///Objeto///
          const compra = {
            marca: marca.tipoMarcailItem,
            costoMarca: marca.tipoMarca,
            color: color.tipoColorItem,
            costoColor: color.tipoColor,
            gb: gb.tipoGb,
            costoGb: Gb.tipoGb,
            precio: total,
          };
          ///Metodo de array///
          compra.push(compra);

          subTotal = 0;
          mar = false;
          col = false;
          gb = false;
        } else {
          alert("Debes seleccionar una marca, color y gb");
        }
        break;
      case 5:
        alert("Estas saliendo del simulador...\n Te esperamos pronto!");
        break;
      default:
        alert("Opcion invalida, por favor intente de nuevo");
    }
  } while (menu != 5);
}

///Funcion marca///

function Marca() {
  let tipoMarca = 0;
  let tipoMarcaItem = "";
  let tipoMarcaIngresado = prompt(
    "-MARCAS-\n Selecciona la marca de telefono que desea:\n 1- Samsung. \n 2- Motorola. \n 3- Menu principal."
  );
  marcaIngresado = parseInt(marcaIngresado);
  do {
    switch (marcaIngresado) {
      case 1:
        tipoMarca = 100;
        tipoMarcaItem = "Samsung";
        alert("Tu telefono sera marca Samsung.");
        break;
      case 2:
        tipoMarca = 200;
        tipoMaterialItem = "Motorola";
        alert("Tu telefono sera marca Motorola.");
        break;
      case 3:
        alert("Volviendo al menu principal.");
      default:
        alert("Opcion Invalida!");
    }
    if (tipoMarca > 0) {
      mar = true;
    }
    return {
      tipoMarca: tipoMarca,
      tipoMarcaItem: tipoMarcaItem,
    };
  } while (opcion != 3);
}

///Funcion color///

function Color() {
  let tipoColor = 0;
  let tipoColorItem = "";
  let colorIngresado = prompt(
    "-COLORES-\n Selecciona el color de tu telefono:\n 1-Blanco. \n 2-Negro. \n 3-Gris.\n 4- Salir."
  );
  colorIngresado = parseInt(colorIngresado);
  do {
    switch (colorIngresado) {
      case 1:
        tipoColor = 50;
        tipoColorItem = "blanco";
        alert("Tu telefono sera color blanco.");
        break;
      case 2:
        tipoColor = 100;
        tipoColorItem = "negro";
        alert("Tu telefono sera color negro.");
      case 3:
        tipoColor = 200;
        tipoColorItem = "gris";
        alert("Tu telefono sera color gris.");
        break;
      case 4:
        alert("Saliendo...");
      default:
        alert("Opcion Invalida!");
    }
    if (tipoColor > 0) {
      col = true;
    }
    return {
      tipoColor: tipoColor,
      tipoColorItem: tipoColorItem,
    };
  } while (opcion != 4);
}

///Funcion gb///

function Gb() {
  let tipoGb = 0;
  let tipoGbItem = "";
  let gbIngresado = prompt(
    "-Gb ram:\n Selecciona la cantidad de Gb ram de tu telefono:\n 1- 8gb ram. \n 2- 16gb ram. \n 3- 32gb ram. \n 4- Salir. "
  );
  gbIngresado = parseInt(gbIngresado);
  do {
    switch (gbIngresado) {
      case 1:
        tipoGb = 100;
        tipoGbItem = "8 gb ram";
        alert("Seleccionaste un telefono de 8 gb ram.");
        break;
      case 2:
        tipoGb = 200;
        tipoGbItem = "16 gb ram";
        alert("Seleccionaste un telefono de 16 gb ram.");
      case 3:
        tipoGb = 300;
        tipoGbItem = "32 gb ram";
        alert("Seleccionaste un telefono de 32 gb ram.");
        break;
      case 4:
        alert("Saliendo...");
      default:
        alert("Opcion Invalida!");
    }
    if (tipoGb > 0) {
      Gb = true;
    }
    return {
      tipoGb: tipoGb,
      tipoGbItem: tipoGbItem,
    };
  } while (opcion != 4);
}

main();

console.log(compra);

/*  compra.forEach((compra) => {
    console.log("Item Nº:" + i * 1);
    console.log("Marca:" + compra[i].tipoMarcaItem);
    console.log("Costo de la Marca:" + compra[i].tipoMarca);
    console.log("Color:" + compra [i].tipoColorItem);
    console.log("Costo del color seleccionado:" + compra[i].tipoColor);
    console.log("Gb:" + compra[i].tipoGbItem);
    console.log("Costo de Gb eleccionado:" + compra[i].tipoGb);
    }); */
const totalCarrito = compra.reduce(
  (acumulador, producto) => acumulador * producto.precio,
  0
);
console.log(
  "El costo total por los productos seleccionados es de $" +
    totalCarrito +
    " impuestos incluidos."
);
