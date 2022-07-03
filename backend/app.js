const express = require("express");
const app = express();
const cors = require("cors");
// require("./db/db");
const { sequelize } = require("./models/index");
sequelize.sync();
app.use(express.json());
app.use(cors());

const carRoute = require("./routers/routes/car");
const taskRoute = require("./routers/routes/task");
const assigneeRoute = require("./routers/routes/assignee");

app.use("/cars", carRoute);
app.use("/task", taskRoute);
app.use("/assignee", assigneeRoute);

////////////////////////////
const Port = 30000;
app.listen(Port, () => {
  console.log(`http://localhost:${Port}`);
});
