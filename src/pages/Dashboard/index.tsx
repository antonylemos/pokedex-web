import React, { useState, useCallback } from 'react';

import {
  Container,
  Header,
  HeaderContent,
  HeaderOptions,
  Content,
  Title,
  Description,
  Form,
  FormInput,
  PokemonList,
} from './styles';

import pokeballImage from '../../assets/patterns/pokeball.svg';
import generationIcon from '../../assets/icons/generation.svg';
import sortIcon from '../../assets/icons/sort.svg';
import filterIcon from '../../assets/icons/filter.svg';
import searchIcon from '../../assets/icons/search.svg';

import charmanderImage from '../../assets/generations/generation1/04.svg';

interface Pokemon {
  name: string;
  url: string;
}

const Dashboard: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([
    {
      name: 'Bulbasaur',
      url: 'https://pokeapi.co/api/v2/pokemon/1/',
    },
    {
      name: 'Ivysaur',
      url: 'https://pokeapi.co/api/v2/pokemon/2/',
    },
    {
      name: 'Venusaur',
      url: 'https://pokeapi.co/api/v2/pokemon/3/',
    },
    {
      name: 'Charmander',
      url: 'https://pokeapi.co/api/v2/pokemon/4/',
    },
    {
      name: 'Charmeleon',
      url: 'https://pokeapi.co/api/v2/pokemon/5/',
    },
    {
      name: 'Charizard',
      url: 'https://pokeapi.co/api/v2/pokemon/6/',
    },
    {
      name: 'Squirtle',
      url: 'https://pokeapi.co/api/v2/pokemon/7/',
    },
    {
      name: 'Wartortle',
      url: 'https://pokeapi.co/api/v2/pokemon/8/',
    },
    {
      name: 'Blastoise',
      url: 'https://pokeapi.co/api/v2/pokemon/9/',
    },
  ]);
  const [isFocused, setIsFocused] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={pokeballImage} alt="Pokébola" />

          <HeaderOptions>
            <button type="button">
              <img src={generationIcon} alt="Generation" />
            </button>

            <button type="button">
              <img src={sortIcon} alt="Sort" />
            </button>

            <button type="button">
              <img src={filterIcon} alt="Filter" />
            </button>
          </HeaderOptions>
        </HeaderContent>
      </Header>

      <Content>
        <Title>Pokédex</Title>
        <Description>
          Search for Pokémon by name or using the National Pokédex number.
        </Description>

        <Form>
          <FormInput isFocused={isFocused}>
            <img src={searchIcon} alt="Search" />
            <input
              // value={newRepo}
              // onChange={e => setNewRepo(e.target.value)}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              placeholder="What Pokémon are you looking for?"
            />
          </FormInput>
        </Form>

        <PokemonList>
          {pokemons.map((pokemon, index) => (
            <a key={pokemon.name} href="www">
              <div>
                <span>
                  #00
                  {index + 1}
                </span>
                <strong>{pokemon.name}</strong>
              </div>

              <img src={charmanderImage} alt="Charmander" />
            </a>
          ))}
        </PokemonList>
      </Content>
    </Container>
  );
};

export default Dashboard;
