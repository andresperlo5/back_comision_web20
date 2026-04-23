// import express from "express"; //module //babel // webpack
const express = require("express"); //conmonJS
const app = express();

//middleware - use - se esta ejecutando antes de la ruta
app.use(express.json());

//middleware routes
app.use("/products", require("./src/routes/products.routes"));
app.use("/users", require("./src/routes/users.routes"));

app.listen(3001, () => {
  console.log("el servidor esta encendido:", 3001);
});
