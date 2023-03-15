const { Router } = require("express");
const { getCharById } = require("../controllers/getCharById");
const { getCharDetail } = require("../controllers/getCharDetail");
let { favoritos } = require("../utils/favs");
let { characters } = require("../utils/data");
const cors = require("cors")

const router = Router();
router.use(cors());
router.get("/onsearch/:id", getCharById);
router.get("/detail/:detailId", getCharDetail);

router.post("/rickandmorty/fav/", (req, res) => {
    favoritos.push(req.body);
   return res.json(200)
  });

  router.get("/rickandmorty/fav/", (req, res) => {
    return res.json(200, { favoritos });
  });

  router.get("/rickandmorty/detail/:id", (req, res) => {
    const { id } = req.params;
    const detalle = characters.find((fav) => fav.id === Number(id));
    return res.json(200, detalle);
  });

  router.get("/rickandmorty/onsearch/:id", (req, res) => {
    const { id } = req.params;
    const detalle = characters.find((fav) => fav.id === Number(id));
    return res.json(200, detalle);
  });

  router.delete("/rickandmorty/fav/:id", (req, res) => {
    const { id } = req.params;
  
    favoritos = favoritos.filter((fav) => fav.id !== Number(id));
    return res.json(200, favoritos);
  });
module.exports = { router };
