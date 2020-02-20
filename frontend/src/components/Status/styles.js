import styled from 'styled-components';

export const Container = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  padding: 3px;
  text-transform: uppercase;
  font-weight: bold;
  background: ${props => props.background};
  color: ${props => props.color};

  svg {
    margin-right: 5px;
  }
`;
