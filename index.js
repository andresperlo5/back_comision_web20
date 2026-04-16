// import express from "express"; //module //babel // webpack
const express = require("express"); //conmonJS
const app = express();
//metodos o verbos HTTP

//POST     C - Create - Crear
//GET      R - Read - Obtener (solo lectura)
//PUT      U - Update - Actualizacion - Borrado logico
//PATCH    U - Update - Actualizacion pequeña
//DELETE   D - Delete - Borrar fisica

//req - la solicitud del cliente (front) que envia al servidor (back)
//res - la repuesta que da el servidor (back) al cliente (front)

//C - Create
app.post("/products", (req, res) => {
  res.status(200).json({ msg: "Hola desde el metodo POST del Producto back" });
});
app.post("/users", (req, res) => {
  res.status(200).json({ msg: "Hola desde el metodo POST del Usuario back" });
});

//R - Read - Obtener todos los elemtos (productos)
app.get("/products", (req, res) => {
  res.status(200).json({ msg: "Hola desde el metodo GET  del Producto back" });
});
app.get("/users", (req, res) => {
  res.status(200).json({ msg: "Hola desde el metodo GET Usuario del back" });
});

//R - Read - Obtener un  elemto (producto)
app.get("/products/:id", (req, res) => {
  res.status(200).json({ msg: "Hola desde el metodo GET del Producto 1 back" });
});
app.get("/users/:id", (req, res) => {
  res.status(200).json({ msg: "Hola desde el metodo GET del  Usuario 1 back" });
});

//U - Update -Actualizar un producto
app.put("/products/:id", (req, res) => {
  res.status(200).json({ msg: "Hola desde el metodo PUT del Producto back" });
});
app.put("/users/:id", (req, res) => {
  res.status(200).json({ msg: "Hola desde el metodo PUT del  Usuario back" });
});

//D - Delete c- Borrado FISICO
app.delete("/products/:id", (req, res) => {
  res
    .status(200)
    .json({ msg: "Hola desde el metodo DELETE del Producto back" });
});
app.delete("/users/:id", (req, res) => {
  res.status(200).json({ msg: "Hola desde el metodo DELETE del Usuario back" });
});

app.listen(3001, () => {
  console.log("el servidor esta encendido:", 3001);
});
