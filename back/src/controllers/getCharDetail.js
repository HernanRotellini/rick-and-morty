const axios = require("axios");

const getCharDetail = async (req, res) => {
    try {
      const { id } = req.params;
      const response = await axios.get(`http://localhost:3001/rickandmorty/detail/${id}`);
      //const { name, species, gender, image } = response.data;
      const char = {
        id,
        name:response.data.name,
        species:response.data.species,
        gender:response.data.gender,
        image:response.data.image,
        
      };
      return res.json(char);
    } catch (error) {
      res.status(500).json({ "message": "No se encontro el personaje" });
    }
  };
  module.exports = { getCharDetail };
  