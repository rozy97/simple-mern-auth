import React, { useState, useEffect } from "react";

import PokemonCard from "./PokemonCard";
import Loading from "../layout/Loading";
import axios from "axios";
import Pagination from "./Pagination";
import Search from "./Search";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();
  const [searchPageUrl, setSearchPageUrl] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    let cancel;
    axios
      .get(currentPageUrl, {
        cancelToken: new axios.CancelToken(c => (cancel = c))
      })
      .then(res => {
        setLoading(false);
        setNextPageUrl(res.data.next);
        setPrevPageUrl(res.data.previous);
        setPokemon(res.data.results);
      });

    return () => cancel();
  }, [currentPageUrl]);

  function gotoNextPage() {
    setCurrentPageUrl(nextPageUrl);
  }

  function gotoPrevPage() {
    setCurrentPageUrl(prevPageUrl);
  }

  function handleChange(e) {
    setSearchPageUrl(
      `http://localhost/api/pokemon/search?filter=${e.target.value}`
    );
  }

  function gotoSearchPage() {
    setCurrentPageUrl(searchPageUrl);
  }

  if (loading) return "Loading...";

  return (
    <>
      <Search gotoSearchPage={gotoSearchPage} handleChange={handleChange} />
      <div>
        {pokemon ? (
          <div className="row">
            {pokemon.map(pokemon => (
              <PokemonCard
                key={pokemon.name}
                name={pokemon.name}
                url={pokemon.url}
              />
            ))}
          </div>
        ) : (
          <Loading />
        )}
      </div>
      <Pagination
        gotoNextPage={nextPageUrl ? gotoNextPage : null}
        gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
      />
    </>
  );
}

// export default PokemonList;
