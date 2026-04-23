const {
  nuevoProducto,
  obtenerProductos,
  obtenerProducto,
  editarProducto,
  eliminarProducto,
} = require("../services/products.services");

const crearProducto = async (req, res) => {
  const { statusCode, msg } = await nuevoProducto(req.body);
  res.status(statusCode).json({ msg });
};

const obtenerTodosLosProductos = async (req, res) => {
  const { statusCode, msg, productos } = await obtenerProductos();
  res.status(statusCode).json({ msg, productos });
};

const obtenerUnProducto = async (req, res) => {
  const { statusCode, msg, producto } = await obtenerProducto(req.params.id);
  res.status(statusCode).json(statusCode === 200 ? { msg, producto } : { msg });
};

const editarUnProducto = async (req, res) => {
  const { statusCode, msg } = await editarProducto(
    Number(req.params.id),
    req.body,
  );

  res.status(statusCode).json({ msg });
};

const eliminarUnProducto = async (req, res) => {
  const { statusCode, msg } = await eliminarProducto(req.params.id);
  res.status(statusCode).json({ msg });
};

module.exports = {
  crearProducto,
  obtenerTodosLosProductos,
  obtenerUnProducto,
  editarUnProducto,
  eliminarUnProducto,
};
