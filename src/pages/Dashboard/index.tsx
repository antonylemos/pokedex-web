import React, { useState, useCallback, useEffect, useMemo } from 'react';

import api from '../../services/api';

import {
  Bug,
  Dark,
  Dragon,
  Electric,
  Fairy,
  Fighting,
  Fire,
  Flying,
  Ghost,
  Grass,
  Ground,
  Ice,
  Normal,
  Poison,
  Psychic,
  Rock,
  Steel,
  Water,
} from '../../components/types';

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
  Type,
  TypeBadge,
} from './styles';

import generatePokedexNumber from '../../utils/generatePokedexNumber';
import capitalizeFirstLetter from '../../utils/capitalizeFirstLetter';
import generateBackgroundColorByTypes from '../../utils/generateBackgroundColorByTypes';
import generateColorByType from '../../utils/generateColorByType';

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

interface Generation {
  initial: number;
  final: number;
}

const typeMapper = {
  bug: Bug,
  dark: Dark,
  dragon: Dragon,
  electric: Electric,
  fairy: Fairy,
  fighting: Fighting,
  fire: Fire,
  flying: Flying,
  ghost: Ghost,
  grass: Grass,
  ground: Ground,
  ice: Ice,
  normal: Normal,
  poison: Poison,
  psychic: Psychic,
  rock: Rock,
  steel: Steel,
  water: Water,
};

const Dashboard: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  const [generation, setGeneration] = useState<Generation>({
    initial: 1,
    final: 152,
  });
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

  const pokemonGeneration = useMemo(() => {
    const { initial, final } = generation;

    return pokemons.filter(
      pokemon => pokemon.id >= initial && pokemon.id < final,
    );
  }, [pokemons, generation]);

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
          {pokemonGeneration.map(({ id, number, name, image, types }) => (
            <PokemonCard
              key={id}
              colors={generateBackgroundColorByTypes(types[0])}
            >
              <div>
                <span>{number}</span>
                <strong>{name}</strong>

                <Type>
                  {types.map(type => (
                    <TypeBadge key={type} color={generateColorByType(type)}>
                      {typeMapper[type]({
                        fill: '#fff',
                        width: 14,
                        height: 14,
                      })}

                      <span>{capitalizeFirstLetter(type)}</span>
                    </TypeBadge>
                  ))}
                </Type>
              </div>

              <svg
                viewBox="0 0 171 75"
                fill="#fff"
                width={70}
                opacity={0.5}
                height={70}
                style={{
                  position: 'absolute',
                  left: '30%',
                  top: -15,
                }}
              >
                <defs>
                  <linearGradient
                    x1="50%"
                    y1="20%"
                    x2="50%"
                    y2="100%"
                    id="balls"
                  >
                    <stop stopColor="#fff" offset="0%" />
                    <stop stopColor="rgba(255,255,255,0)" offset="100%" />
                  </linearGradient>
                </defs>
                <path
                  d="M9.243 4.688c0 2.588-2.069 4.687-4.621 4.687C2.069 9.375 0 7.276 0 4.687 0 2.1 2.07 0 4.622 0s4.621 2.099 4.621 4.688zM41.595 4.688c0 2.588-2.07 4.687-4.622 4.687-2.553 0-4.622-2.099-4.622-4.688C32.351 2.1 34.421 0 36.973 0s4.622 2.099 4.622 4.688zM73.946 4.688c0 2.588-2.07 4.687-4.622 4.687s-4.621-2.099-4.621-4.688C64.703 2.1 66.772 0 69.324 0c2.553 0 4.622 2.099 4.622 4.688zM106.297 4.688c0 2.588-2.069 4.687-4.621 4.687-2.553 0-4.622-2.099-4.622-4.688C97.054 2.1 99.124 0 101.676 0s4.621 2.099 4.621 4.688zM138.649 4.688c0 2.588-2.07 4.687-4.622 4.687s-4.622-2.099-4.622-4.688c0-2.588 2.07-4.687 4.622-4.687s4.622 2.099 4.622 4.688zM171 4.688c0 2.588-2.069 4.687-4.622 4.687-2.552 0-4.621-2.099-4.621-4.688 0-2.588 2.069-4.687 4.621-4.687C168.931 0 171 2.099 171 4.688zM9.243 37.5c0 2.589-2.069 4.688-4.621 4.688C2.069 42.188 0 40.087 0 37.5c0-2.589 2.07-4.688 4.622-4.688s4.621 2.1 4.621 4.688zM41.595 37.5c0 2.589-2.07 4.688-4.622 4.688-2.553 0-4.622-2.1-4.622-4.688 0-2.589 2.07-4.688 4.622-4.688s4.622 2.1 4.622 4.688zM73.946 37.5c0 2.589-2.07 4.688-4.622 4.688s-4.621-2.1-4.621-4.688c0-2.589 2.069-4.688 4.621-4.688 2.553 0 4.622 2.1 4.622 4.688zM106.297 37.5c0 2.589-2.069 4.688-4.621 4.688-2.553 0-4.622-2.1-4.622-4.688 0-2.589 2.07-4.688 4.622-4.688s4.621 2.1 4.621 4.688zM138.649 37.5c0 2.589-2.07 4.688-4.622 4.688s-4.622-2.1-4.622-4.688c0-2.589 2.07-4.688 4.622-4.688s4.622 2.1 4.622 4.688zM171 37.5c0 2.589-2.069 4.688-4.622 4.688-2.552 0-4.621-2.1-4.621-4.688 0-2.589 2.069-4.688 4.621-4.688 2.553 0 4.622 2.1 4.622 4.688zM9.243 70.313C9.243 72.9 7.174 75 4.622 75 2.069 75 0 72.901 0 70.312c0-2.588 2.07-4.687 4.622-4.687s4.621 2.099 4.621 4.688zM41.595 70.313c0 2.588-2.07 4.687-4.622 4.687-2.553 0-4.622-2.099-4.622-4.688 0-2.588 2.07-4.687 4.622-4.687s4.622 2.099 4.622 4.688zM73.946 70.313c0 2.588-2.07 4.687-4.622 4.687s-4.621-2.099-4.621-4.688c0-2.588 2.069-4.687 4.621-4.687 2.553 0 4.622 2.099 4.622 4.688zM106.297 70.313c0 2.588-2.069 4.687-4.621 4.687-2.553 0-4.622-2.099-4.622-4.688 0-2.588 2.07-4.687 4.622-4.687s4.621 2.099 4.621 4.688zM138.649 70.313c0 2.588-2.07 4.687-4.622 4.687s-4.622-2.099-4.622-4.688c0-2.588 2.07-4.687 4.622-4.687s4.622 2.099 4.622 4.688zM171 70.313C171 72.9 168.931 75 166.378 75c-2.552 0-4.621-2.099-4.621-4.688 0-2.588 2.069-4.687 4.621-4.687 2.553 0 4.622 2.099 4.622 4.688z"
                  fill="url(#balls)"
                />
              </svg>

              <div
                style={{
                  position: 'absolute',
                  right: 0,
                  top: 0,
                  bottom: 0,
                  overflow: 'hidden',
                }}
              >
                <svg
                  viewBox="0 0 75 75"
                  fill="#fff"
                  width={150}
                  opacity={0.5}
                  height={150}
                  style={{
                    right: -30,
                    top: -20,
                  }}
                >
                  <defs>
                    <linearGradient
                      x1="50%"
                      y1="20%"
                      x2="50%"
                      y2="100%"
                      id="gradient"
                    >
                      <stop stopColor="#fff" offset="0%" />
                      <stop stopColor="rgba(255,255,255,0)" offset="80%" />
                    </linearGradient>
                  </defs>
                  <path
                    fill="url(#gradient)"
                    d="M37.5 0C56.798 0 72.717 14.361 75 32.903H56.697c-2.084-8.605-9.888-15-19.197-15-9.31 0-17.113 6.395-19.197 15H0C2.283 14.361 18.202 0 37.5 0zM56.697 42.097H75C72.717 60.639 56.798 75 37.5 75S2.283 60.639 0 42.097h18.303c2.084 8.605 9.888 15 19.197 15 9.31 0 17.114-6.395 19.197-15z"
                  />
                  <path
                    fill="url(#gradient)"
                    d="M37.5 49.839c6.865 0 12.431-5.524 12.431-12.339 0-6.814-5.566-12.339-12.431-12.339-6.866 0-12.431 5.524-12.431 12.339S30.635 49.839 37.5 49.839z"
                  />
                </svg>
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
