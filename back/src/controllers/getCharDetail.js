const axios = require("axios");

const getCharDetail = async (req, res) => {
    try {
      const { detailId } = req.params;
      const response = await axios.get(`https://rickandmortyapi.com/api/character/${detailId}`);
      
      
      return res.json(response.data);
    } catch (error) {
      res.status(500).json({ "message": "No se encontro el personaje" });
    }
  };
  module.exports = { getCharDetail };
  