const express = require("express"); //conmonJS
const morgan = require("morgan");

class Server {
  constructor() {
    this.app = express();
    this.middleware();
    this.routes();
  }

  middleware() {
    this.app.use(express.json());
    this.app.use(morgan("dev"));
  }

  routes() {
    this.app.use("/products", require("../routes/products.routes"));
    this.app.use("/users", require("../routes/users.routes"));
  }

  listen() {
    this.app.listen(process.env.PORT, () => {
      console.log("el servidor esta encendido:", process.env.PORT);
    });
  }
}

module.exports = Server;
