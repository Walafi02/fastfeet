import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  height: 50px;
  background: #82bf18;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
`;

export const Text = styled.Text`
  font-family: Roboto-Bold;
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
  text-align: left;
`;
