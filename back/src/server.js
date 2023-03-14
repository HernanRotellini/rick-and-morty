const { router } = require("./routes/index");
let { favoritos } = require("./utils/favs");
let { characters } = require("./utils/data");
const express = require("express");
const morgan = require("morgan")
const cors = require("cors");
const server = express();
const PORT = 3001;
server.use(express.json());
server.use(morgan("dev"))
server.use("/", router);
server.use(cors());
server.listen(PORT, () => {
  console.log("Server raised in port " + PORT);
});

server.post("/rickandmorty/fav/", (req, res) => {
  favoritos.push(req.body);
  return res.json(200, { success: "funciono bien" });
});
server.get("/rickandmorty/fav/", (req, res) => {
  return res.json(200, { favoritos });
});
server.get("/rickandmorty/detail/:id", (req, res) => {
  const { id } = req.params;
  const detalle = characters.find((fav) => fav.id === Number(id));
  return res.json(200, detalle);
});
server.get("/rickandmorty/onsearch/:id", (req, res) => {
  const { id } = req.params;
  const detalle = characters.find((fav) => fav.id === Number(id));
  return res.json(200, detalle);
});
server.delete("/rickandmorty/fav/:id", (req, res) => {
  const { id } = req.params;

  favoritos = favoritos.filter((fav) => fav.id !== Number(id));
  return res.json(200, favoritos);
});
module.exports = { server };
