import styled from 'styled-components';

export const Container = styled.button`
  background: #bbb;
  color: #fff;
  font-family: Roboto-Bold sans-serif;
  font-size: 14px;
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
  border: 1px solid transparent;
  border-radius: 4px;
  padding: 6px 12px;
  margin-left: 12px;
  transition: opacity 0.1s;
  cursor: pointer;

  svg {
    margin: 0 10px 0 0;
  }

  span {
    margin: 0;
  }

  &:hover {
    opacity: 0.7;
  }
`;
