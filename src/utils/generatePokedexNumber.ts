const generatePokedexNumber = (id: number): string => {
  if (id < 10) {
    return `#00${id}`;
  }

  if (id >= 10 && id < 100) {
    return `#0${id}`;
  }

  return `#${id}`;
};

export default generatePokedexNumber;
