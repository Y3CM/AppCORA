const existeCategoria = (arreglo, id) => { // valida si al arrelgo existe el id  para categoria  
  let existe = false;
  arreglo.forEach((item) => {
    if (item.id_categoria === id) existe = true;
    return existe;
  });
  return existe;
};
  

const existeProducto = (arreglo, id) => { // valida si al arrelgo existe el id  para prodcutos 
  let existe = false;
  arreglo.map((item) => {
    if (item.id === id) existe = true;
    return existe;
  });
  return existe;
};


  export function getMenu(productos) {  // de la lista de productos genera un menu dinamico con las categorias exsitente 
    let menuCategoria = [];
    productos.forEach((item) => {
      if (!existeCategoria(menuCategoria, item.id_categoria)) {
        let objeto = {
          id_categoria: item.id_categoria,
          nombre_categoria: item.nombre_categoria,
        };
        menuCategoria.push(objeto);
      }
    });
    return menuCategoria;
  }
   
 
  export function getfiltro(productos, opcion) { // filtra el vector productos segun la opcion enviada .....
    let result = productos.filter((item) => item.id_categoria == opcion);
    return result;
  }


  export function addCompra(compra) {  // agrega una nueva compra
    let compraNueva = [];
    let compraStore = JSON.parse(localStorage.getItem("compras"));
    if (compraStore == null) { // si compras vacias es la primera compra .....
      compraNueva.push(compra);
    } else {
      compraNueva = compraStore;
      if (existeProducto(compraStore, compra.id)) {  // si compras no vacias valida si al nueva compra exsite 
        compraNueva = compraStore.map((item) => {   // si existe genera objeto nuevo actualizando la cantidad 
          if (item.id === compra.id) {    
            item.cantidad = compra.cantidad;
            return item;
          } else {
            return item;
          }
        });
      } else { 
        compraNueva.push(compra); // si no existe la agrega 
      }
    }
    let compras = JSON.stringify(compraNueva);  // actualiza compras en el local storage
    localStorage.setItem("compras", compras);
    return compraNueva;  // retorna compras con su actualizaciones .....
  }


  export function deleteCompra(id) {  // borra el producto ... genera un filtro donde ignora el que estamos enviando .....
    let compraStore = JSON.parse(localStorage.getItem("compras"));
    if (compraStore != null) {
      let nuevoCompra = compraStore.filter((c) => c.id != id);
      let compras = JSON.stringify(nuevoCompra);
      localStorage.setItem("compras", compras);
      return nuevoCompra;
    }
    return "Error Borrar  Compra";
  }