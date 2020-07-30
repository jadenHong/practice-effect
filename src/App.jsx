import React, { useState, useEffect } from "react";

const Search = ({ search, change, click }) => {
  return (
    <div>
      <input type="text" value={search} onChange={change} />
      <button onClick={click}>Search</button>
    </div>
  )
}

const PokemonInfo = ({ name, exp, height }) => {
  return (
    <div>
      <h1>Name: {name}</h1>
      <h1>Experience: {exp}</h1>
      <h1>Height: {height}</h1>
    </div>
  );
};

function App() {
  const PAGE = "https://pokeapi.co/api/v2/pokemon/";
  const [search, setSearch] = useState("");
  const URL = PAGE + search;
  const [name, setName] = useState("");
  const [exp, setExp] = useState(0);
  const [height, setHeight] = useState(0);

  //pikachu
  const getData = () => {
    // console.log('fetch');
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setName(data.name);
        setExp(data.base_experience);
        setHeight(data.height);
      });
  };

  const handleChange = (e) => {
    const newSearch = e.target.value;
    setSearch(newSearch);
    // console.log(newSearch);
  }

  const handleClick = () => {
    getData();
  }

  return (
    <div className="App">
      <Search search={search} change={handleChange} click={handleClick} />
      <PokemonInfo name={name} exp={exp} height={height} />
    </div>
  );
}

export default App;
