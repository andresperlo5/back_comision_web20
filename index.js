// import express from "express"; //module //babel // webpack
const express = require("express"); //conmonJS
const app = express();

//middleware - use - se esta ejecutando antes de la ruta
app.use(express.json());

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

const dbUsers = [
  {
    id: 1,
    nombreUsuario: "ejemplo2026",
    contrasenia: "123456789",
    email: "ejemplo@ejemplo.com",
  },
];
//metodos o verbos HTTP

//POST     C - Create - Crear
//GET      R - Read - Obtener (solo lectura)
//PUT      U - Update - Actualizacion - Borrado logico
//PATCH    U - Update - Actualizacion pequeña
//DELETE   D - Delete - Borrar fisica

//req - la solicitud del cliente (front) que envia al servidor (back)
//res - la repuesta que da el servidor (back) al cliente (front)

//C - Create - Crear
app.post("/products", (req, res) => {
  const id = dbProducts[dbProducts.length - 1]?.id + 1 || 1;

  const nuevoProducto = {
    id,
    ...req.body,
  };

  dbProducts.push(nuevoProducto);

  res.status(201).json({ msg: "Producto creado con exito" });
});
app.post("/users", (req, res) => {
  res.status(200).json({ msg: "Hola desde el metodo POST del Usuario back" });
});

//R - Read - Obtener todos los elementos (productos)
app.get("/products", (req, res) => {
  res.status(200).json({ msg: "todos los productos", productos: dbProducts });
});
app.get("/users", (req, res) => {
  res.status(200).json({ msg: "Hola desde el metodo GET Usuario del back" });
});

//R - Read - Obtener un  elemento (producto)
app.get("/products/:id", (req, res) => {
  //headers - body - params - query
  //headers - token - informacion encriptada del usuario

  //body - informacion que el usuario necesita guardar - procesar

  //params - parametros - informacion adicional - afecta a la ruta
  //query  - ? - informacion adicional - que no afecta a la ruta
  const producto = dbProducts.find((prod) => prod.id === Number(req.params.id));

  if (!producto) {
    res.status(404).json({
      msg: "Producto no encontrado",
    });
  } else {
    res.status(200).json({
      msg: "Producto encontrado",
      producto,
    });
  }
});
app.get("/users/:id", (req, res) => {
  res.status(200).json({ msg: "Hola desde el metodo GET del  Usuario 1 back" });
});

//U - Update -Actualizar un producto
app.put("/products/:id", (req, res) => {
  //id - params - la nueva info - body
  const id = Number(req.params.id);
  const body = req.body;

  const indexProd = dbProducts.findIndex((prod) => prod.id === id);

  const productoActualizado = {
    id,
    ...body,
  };

  dbProducts[indexProd] = productoActualizado;

  res.status(200).json({ msg: "Producto actualizado con exito" });
});
app.put("/users/:id", (req, res) => {
  res.status(200).json({ msg: "Hola desde el metodo PUT del  Usuario back" });
});

//D - Delete c- Borrado FISICO
app.delete("/products/:id", (req, res) => {
  const indexProd = dbProducts.findIndex(
    (prod) => prod.id === Number(req.params.id),
  );

  dbProducts.splice(indexProd, 1);

  res.status(200).json({ msg: "Producto eliminado con exito" });
});
app.delete("/users/:id", (req, res) => {
  res.status(200).json({ msg: "Hola desde el metodo DELETE del Usuario back" });
});

app.listen(3001, () => {
  console.log("el servidor esta encendido:", 3001);
});
