import styled from 'styled-components';
import { darken } from 'polished';

export const ImageAvatar = styled.img`
  height: 32px;
  width: 32px;
  border-radius: 50%;
  margin-right: 5px;
`;

export const InitialLetters = styled.div`
  height: 32px;
  width: 32px;
  border-radius: 50%;
  margin-right: 5px;
  background: ${props => props.color || '#cccc8b'};
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;

  color: ${props => darken(0.5, props.color || '#CCCC8B')};
`;
