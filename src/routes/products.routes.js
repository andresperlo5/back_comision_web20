const express = require("express");
const router = express.Router();

const {
  crearProducto,
  obtenerTodosLosProductos,
  obtenerUnProducto,
  editarUnProducto,
  eliminarUnProducto,
} = require("../controllers/products.controllers");

router.post("/", crearProducto);
router.get("/", obtenerTodosLosProductos);
router.get("/:id", obtenerUnProducto);
router.put("/:id", editarUnProducto);
router.delete("/:id", eliminarUnProducto);

module.exports = router;
