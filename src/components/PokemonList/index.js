import React from "react";
import { PokemonCard } from "./PokemonCard";
import pokedexLine from "../../asset/image/pokedex-line.svg";
import { Leds } from "../pokedexElement/Leds";
import { Display } from "../pokedexElement/Display";
import { Controls } from "../pokedexElement/Controls";
import { Description } from "../pokedexElement/Description";

export const PokemonList = () => {
  const pokemons = [];

  return (
    <main className="PokemonList">
      <Leds />
      <section className="container-line">
        <img src={pokedexLine} alt="line" className="pokedex_line" />
      </section>
      <section className="container-display">
        <Display />
      </section>
      <div className="container-controls">
        <Controls />
      </div>
      <Description />
      {pokemons.map((pokemon) => (
        <PokemonCard />
      ))}
    </main>
  );
};
