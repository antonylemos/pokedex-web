import React, { useState, useCallback, useEffect, useMemo } from 'react';

import api from '../../services/api';

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
  PokemonCard,
} from './styles';

import generatePokedexNumber from '../../utils/generatePokedexNumber';
import capitalizeFirstLetter from '../../utils/capitalizeFirstLetter';
import generateBackgroundColorByTypes from '../../utils/generateBackgroundColorByTypes';

import pokeballImage from '../../assets/patterns/pokeball.svg';
import generationIcon from '../../assets/icons/generation.svg';
import sortIcon from '../../assets/icons/sort.svg';
import filterIcon from '../../assets/icons/filter.svg';
import searchIcon from '../../assets/icons/search.svg';

interface Pokemon {
  id: number;
  number: string;
  name: string;
  image: string;
  types: string[];
}

const Dashboard: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  const [searchValue, setSearchValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    api.get<Pokemon[]>('pokemons').then(response => {
      setPokemons(
        response.data.map(pokemon => ({
          ...pokemon,
          number: generatePokedexNumber(pokemon.id),
          name: capitalizeFirstLetter(pokemon.name),
        })),
      );
    });
  }, []);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  const handleSearch = useCallback((value: string) => {
    setSearchValue(value);
  }, []);

  const firstGeneration = useMemo(() => {
    return pokemons.filter(pokemon => pokemon.id < 152);
  }, [pokemons]);

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
              value={searchValue}
              onChange={e => handleSearch(e.target.value)}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              placeholder="What Pokémon are you looking for?"
            />
          </FormInput>
        </Form>

        <PokemonList>
          {firstGeneration.map(({ id, number, name, image, types }) => (
            <PokemonCard
              key={id}
              href="www"
              colors={generateBackgroundColorByTypes(types[0])}
            >
              <div>
                <span>{number}</span>
                <strong>{name}</strong>
              </div>

              <img src={image} alt={name} />
            </PokemonCard>
          ))}
        </PokemonList>
      </Content>
    </Container>
  );
};

export default Dashboard;
