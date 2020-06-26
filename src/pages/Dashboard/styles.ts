import styled from 'styled-components';

interface FormInputProps {
  isFocused: boolean;
}

interface PokemonCardProps {
  colors: { background: string; shadow: string };
}

interface TypeBadgeProps {
  color: string;
}

export const Container = styled.div``;

export const Header = styled.header`
  padding: 30px 0;
  background: #fff;
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 90%;
  max-width: 1120px;

  margin: auto;

  img {
    width: 25px;
    height: 25px;
  }
`;

export const HeaderOptions = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    text-decoration: none;
    background: transparent;
    border: none;

    img {
      width: 20px;
      height: 20px;
      transition: transform 0.2s;
    }

    & + button {
      margin-left: 15px;
    }

    &:hover {
      img {
        transform: scale(1.3);
      }
    }
  }
`;

export const Content = styled.main`
  margin-bottom: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: center;
  justify-items: center;
`;

export const Form = styled.form`
  width: 90%;
  max-width: 1120px;
  margin: auto;

  h1 {
    font-size: 3.2rem;
    color: #17171b;
    line-height: 3.8rem;

    margin-top: 25px;
    margin-bottom: 10px;
  }

  span {
    font-size: 16px;
    color: #747476;
    line-height: 1.9rem;
  }
`;

export const FormInput = styled.div<FormInputProps>`
  margin-top: 25px;
  max-width: 736px;
  background: #f2f2f2;

  border-radius: 10px;
  padding: 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    height: 16px;
    width: 16px;
    margin-right: 12px;
  }

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #17171b;

    &::placeholder {
      color: #747476;
    }
  }
`;

export const PokemonList = styled.section`
  width: 90%;
  max-width: 1120px;
  margin: auto;
  margin-top: 45px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
  grid-gap: 30px;
`;

export const PokemonCard = styled.a<PokemonCardProps>`
  /* height: 115px;
  width: 100%; */
  padding: 20px;
  border-radius: 10px;
  background: ${props => props.colors.background};
  text-decoration: none;

  box-shadow: 0px 10px 20px ${props => props.colors.shadow};

  display: flex;
  position: relative;
  transition: transform 0.2s;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;

    > span {
      font-size: 12px;
      font-weight: 700;
      line-height: 14px;
      color: #17171b99;
    }

    strong {
      font-size: 26px;
      color: #fff;
    }
  }

  img {
    z-index: 1;
    position: absolute;
    top: -25px;
    right: 3px;
    width: 130px;
    height: 130px;
  }

  &:hover {
    transform: translateY(-10px);
  }
`;

export const Type = styled.div`
  display: flex;
  flex-direction: row;
`;

export const TypeBadge = styled.div<TypeBadgeProps>`
  display: flex;
  flex-direction: row;
  margin-top: 5px;
  padding: 5px;
  border-radius: 3px;

  background: ${props => props.color};

  & + div {
    margin-left: 5px;
  }

  span {
    font-size: 12px;
    font-weight: 500;
    line-height: 14px;
    margin-left: 5px;
    color: #fff;
  }
`;
