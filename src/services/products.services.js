const dbProducts = [
  {
    id: 1,
    nombre: "Azucar",
    precio: 1000,
    descripcion: "muy dulce",
    img: "url",
  },
  {
    id: 2,
    nombre: "Mate",
    precio: 2000,
    descripcion: "mate de madera",
    img: "url",
  },
];

const nuevoProducto = (body) => {
  const id = dbProducts[dbProducts.length - 1]?.id + 1 || 1;

  const nuevoProducto = {
    id,
    ...body,
  };

  dbProducts.push(nuevoProducto);

  return {
    statusCode: 201,
    msg: "El producto fue creado con exito",
  };
};

const obtenerProductos = () => {
  return {
    statusCode: 200,
    msg: "Productos encontrados",
    productos: dbProducts,
  };
};

const obtenerProducto = (idProducto) => {
  const producto = dbProducts.find((prod) => prod.id === Number(idProducto));

  if (!producto) {
    return {
      statusCode: 404,
      msg: "Producto no encontrado",
    };
  } else {
    return {
      statusCode: 200,
      msg: "Producto encontrado",
      producto,
    };
  }
};

const editarProducto = (idProducto, body) => {
  const indexProd = dbProducts.findIndex((prod) => prod.id === idProducto);

  const productoActualizado = {
    idProducto,
    ...body,
  };

  dbProducts[indexProd] = productoActualizado;

  return {
    statusCode: 200,
    msg: "Producto actualizado con exito",
  };
};

const eliminarProducto = (idProducto) => {
  const indexProd = dbProducts.findIndex(
    (prod) => prod.id === Number(idProducto),
  );

  dbProducts.splice(indexProd, 1);

  return {
    statusCode: 200,
    msg: "Producto eliminado conn exito",
  };
};

module.exports = {
  nuevoProducto,
  obtenerProductos,
  obtenerProducto,
  editarProducto,
  eliminarProducto,
};
