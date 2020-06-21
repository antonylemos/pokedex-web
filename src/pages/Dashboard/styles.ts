import styled, { css } from 'styled-components';

interface FormInputProps {
  isFocused: boolean;
}

export const Container = styled.div``;

export const Header = styled.header`
  padding: 30px 0;
  background: #fff;
`;

export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 25px;
    height: 25px;
  }
`;

export const HeaderOptions = styled.div`
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
      margin-left: 25px;
    }

    &:hover {
      img {
        transform: scale(1.3);
      }
    }
  }
`;

export const Content = styled.main`
  max-width: 1120px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-size: 32px;
  color: #17171b;
  line-height: 56px;

  margin-top: 40px;
`;

export const Description = styled.span`
  font-size: 16px;
  color: #747476;
  line-height: 28px;

  margin-top: 10px;
`;

export const Form = styled.form``;

export const FormInput = styled.div<FormInputProps>`
  margin-top: 25px;
  max-width: 736px;
  background: #f2f2f2;

  ${props =>
    props.isFocused &&
    css`
      background: #e2e2e2;
    `}

  border-radius: 10px;
  padding: 20px;
  /* border: 0; */
  /* height: 70px; */

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
    /* height: 20px; */
    /* padding: 0 24px; */
    border: 0;
    /* border-radius: 10px; */
    color: #17171b;
    /* border: 2px solid #fff; */
    /* border-right: 0; */

    &::placeholder {
      color: #747476;
    }
  }
`;

export const PokemonList = styled.section`
  margin-top: 80px;
  display: grid;
  grid-gap: 30px;
  grid-template: 1fr 1fr 1fr/1fr 1fr 1fr;

  justify-items: center;
  align-items: center;

  a {
    height: 115px;
    width: 100%;
    padding: 20px;
    border-radius: 10px;
    background: #ffa756;
    text-decoration: none;

    box-shadow: 0px 10px 20px #ffa75666;

    display: flex;
    position: relative;
    transition: transform 0.2s;

    div {
      display: flex;
      flex-direction: column;

      span {
        font-size: 12px;
        font-weight: 700;
        line-height: 14px;
        color: #17171b;
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
  }
`;
