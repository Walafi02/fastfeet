import styled from 'styled-components';

export const Container = styled.span`
  align-items: center;
  border-radius: 15px;
  padding: 5px 10px;
  text-transform: uppercase;
  font-weight: bold;
  background: ${props => props.background};
  color: ${props => props.color};

  svg {
    margin-right: 5px;
  }
`;
