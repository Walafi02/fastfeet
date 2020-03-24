import styled from 'styled-components/native';
import {darken} from 'polished';

export const Container = styled.View`
  width: ${props => props.width || 160}px;
  height: ${props => props.height || 160}px;
  border-radius: ${props => props.borderRadius || 80}px;
  margin-bottom: 20px;
  background: ${props => props.color || '#cccc8b'};
  justify-content: center;
  align-items: center;
`;

export const TextLetters = styled.Text`
  font-weight: bold;
  font-size: ${props => props.fontSize || 80}px;
  color: ${props => darken(0.5, props.color || '#CCCC8B')};
`;
