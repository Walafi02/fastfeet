import styled from 'styled-components/native';

export const Container = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  background: #fff;
  padding: ${props => (props.multiline ? '10px' : '0 15px')};
  height: ${props => (props.multiline ? 'auto' : '50px')};
  border: 1px solid;
  border-color: ${props => (props.error ? 'red' : 'rgba(0, 0, 0, 0.2)')};
  border-radius: 4px;
  font-size: 18px;
  color: rgba(0, 0, 0, 0.8);
`;
