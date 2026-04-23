const { Router } = require("express");
const router = Router();

const dbUsers = [
  {
    id: 1,
    nombreUsuario: "ejemplo2026",
    contrasenia: "123456789",
    email: "ejemplo@ejemplo.com",
  },
];

router.post("/", (req, res) => {
  res.status(200).json({ msg: "Hola desde el metodo POST del Usuario back" });
});

router.get("/", (req, res) => {
  res.status(200).json({ msg: "Hola desde el metodo GET Usuario del back" });
});

router.get("/:id", (req, res) => {
  res.status(200).json({ msg: "Hola desde el metodo GET del  Usuario 1 back" });
});

router.put("/:id", (req, res) => {
  res.status(200).json({ msg: "Hola desde el metodo PUT del  Usuario back" });
});

router.delete("/:id", (req, res) => {
  res.status(200).json({ msg: "Hola desde el metodo DELETE del Usuario back" });
});

module.exports = router;
