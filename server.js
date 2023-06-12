const express = require("express");
const app = express();
const productsRouter = require("./products");
const cartRouter = require("./cart");

app.use(express.json());

app.use("/api/products", productsRouter);
app.use("/api/carts", cartRouter); // Utiliza el router de cart.js en la ruta '/api/carts'

app.listen(8080, () => {
  console.log("Servidor escuchando en el puerto 8080");
});
