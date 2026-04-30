const mongoose = require("mongoose");

mongoose
  .connect(`${process.env.MONGODB_URL}`)
  .then(() => console.log("Servidor conectado con exito a la Base de Datos"))
  .catch((err) => console.log(`ERROR MONGODB_MONGOOSE: ${err}`));

module.exports = mongoose;
