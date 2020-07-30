import React, { useState, useEffect } from "react";

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
  const URL = "https://pokeapi.co/api/v2/pokemon/pikachu";
  const [name, setName] = useState("");
  const [exp, setExp] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setName(data.name);
        setExp(data.base_experience);
        setHeight(data.height);
      });
  };

  return (
    <div className="App">
      <PokemonInfo name={name} exp={exp} height={height} />
    </div>
  );
}

export default App;
