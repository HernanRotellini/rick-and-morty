const { router } = require("./routes/index");
const express = require("express");
const morgan = require("morgan")
const cors = require("cors");
const server = express();
const PORT = 3001;

server.use(express.json());
server.use(morgan("dev"))
server.use(cors());
server.use("/", router);


server.listen(PORT, () => {
  console.log("Server raised in port " + PORT);
});


module.exports = { server };
