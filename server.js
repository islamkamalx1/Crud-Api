const express = require("express");
const mongoose = require("mongoose");
// const productModel = require("./model/productModel");
// const productController = require("./controller/productController");
const productRouter = require("./routers/productsRoute");
const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const port = 3000;

const mongoUrl =
  "mongodb+srv://islamkamalx1:islamkamalx1@cluster0.3p0z7p3.mongodb.net/Node-API?retryWrites=true&w=majority";
//routes

// app.get("/blog", (req, res) => {
//   res.send("Hello blog");
// });
app.use("/products", productRouter);

mongoose
  .connect(mongoUrl)
  .then(() => {
    console.log("connected to mongo");

    app.listen(port, () => {
      console.log("node api app is running on port 3000");
    });
  })
  .catch((err) => console.log(err));
