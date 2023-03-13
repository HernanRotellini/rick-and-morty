const { Router } = require("express");
const { getCharById, getCharDetail } = require("../controllers/controladores");
const router = Router();

router.get("/onsearch/:id", getCharById);
router.get("/detail/:detailId", getCharDetail);

module.exports = { router };
