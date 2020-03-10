import styled from 'styled-components/native';

export const Container = styled.TextInput.attrs({
  placeholderTextColor: '#999999',
})`
  background: #fff;
  padding: 0 15px;
  height: 50px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  font-size: 18px;
  color: rgba(0, 0, 0, 0.8);
`;
