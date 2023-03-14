const axios = require("axios");

const URL = "https://rickandmortyapi.com/api/character";

const getCharById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await axios.get(`${URL}/${id}`);
    const { name, species, gender, image } = response.data;
    const char = {
      id,
      name,
      species,
      gender,
      image,
    };
    res.json(char);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getCharById};