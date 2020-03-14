import styled from 'styled-components/native';
import Icone from 'react-native-vector-icons/MaterialIcons';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  padding-bottom: 15px;
`;

export const HeaderTitle = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled(Icone)`
  padding: 12px;
`;

export const Title = styled.Text`
  color: #7d40e7;
  font-weight: bold;
  font-size: 20px;
`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 15px;
  background: #f8f9fd;
  border-radius: 4px;
`;

export const FooterView = styled.View`
  justify-content: flex-end;
`;

export const Label = styled.Text`
  font-size: 10px;
  color: #999;
`;

export const Data = styled.Text`
  color: #444;
  font-size: 12px;
  font-weight: bold;
`;

export const ButtonShowDetails = styled(RectButton)``;

export const TextButtonShowDetails = styled.Text`
  color: #7d40e7;
  font-weight: bold;
  font-size: 12px;
`;
