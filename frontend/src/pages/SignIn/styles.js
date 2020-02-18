import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: #ffffff;
  box-shadow: 0px 0px 10px #00000033;
  border-radius: 4px;
  padding: 60px 30px;

  img {
    width: 350px;
    padding: 0 20px;
    margin-bottom: 20px;
  }

  label {
    font-weight: bold;
    font-size: 14px;
    text-transform: uppercase;
    color: #444;
    margin: 10px 0;
  }

  span {
    color: #ee4d64;
    margin-top: 5px;
    font-weight: bold;
    font-size: 12px;
  }

  input {
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    height: 40px;
    padding: 7px 10px;
    font-size: 12px;
  }

  button {
    margin-top: 15px;
    height: 40px;
    background: #7d40e7;
    color: #fff;
    font-weight: bold;
    border: 0;
    border-radius: 4px;
    font-size: 14px;
    cursor: pointer;

    &:hover {
      background: ${darken(0.03, '#7D40E7')};
    }
  }
`;
