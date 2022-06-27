const express = require("express");
const app = express();
const cors = require("cors");
// require("./db/db");
const { sequelize } = require("./models/index");
sequelize.sync();
app.use(express.json());
app.use(cors());

const carRoute = require("./routers/routes/car");


app.use("/cars", carRoute);
////////////////////////////
const Port = 6000;
app.listen(Port, () => {
  console.log("server is running");
});
