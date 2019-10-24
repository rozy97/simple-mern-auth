const express = require("express");
const router = express.Router();
const passport = require("passport");
const axios = require("axios");
const Pokedex = require("pokedex-promise-v2");
const P = new Pokedex();

var poke = axios
  .get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=964")
  .then(result => result)
  .catch(err => console.log(err));

router.get("/search?", (req, res) => {
  console.log(req.query.filter);
  poke.then(poke => {
    if (req.query.filter) {
      var search = poke.data.results.filter(p =>
        p.name.toLowerCase().includes(req.query.filter)
      );
      console.log(search.length);
      search = {
        length: search.length,
        previous: "https://pokeapi.co/api/v2/pokemon",
        results: search
      };
      return res.json(search);
    }
    const returnArr = [];
    for (let i = 0; i < 20; i++) {
      returnArr[i] = poke.data.results[i];
    }

    return res.json({
      previous: "https://pokeapi.co/api/v2/pokemon",
      results: returnArr
    });
  });
});

module.exports = router;
