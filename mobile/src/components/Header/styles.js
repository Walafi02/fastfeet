import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View``;

export const Welcome = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ImageProfile = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 40px;
`;

export const WelcomeProfile = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const WelcomeData = styled.View`
  padding-left: 20px;
`;

export const WelcomeLabel = styled.Text`
  color: #666666;
  font-size: 12px;
`;

export const WelcomeText = styled.Text`
  color: #444444;
  font-size: 22px;
  font-weight: bold;
`;

export const ButtonIcon = styled(RectButton)``;

export const HeaderList = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-top: 20px;
`;

export const HeaderListLabel = styled.Text`
  color: #444444;
  font-size: 22px;
  font-weight: bold;
`;

export const HeaderListOptions = styled.View`
  flex-direction: row;
  align-items: flex-end;
`;

export const HeaderOption = styled(RectButton)`
  margin-left: 12px;
`;

export const HeaderOptionText = styled.Text`
  color: ${props => (props.active ? '#7D40E7' : '#999999')};
  font-size: 14px;
  text-decoration: ${props => (props.active ? 'underline' : 'none')};
`;
