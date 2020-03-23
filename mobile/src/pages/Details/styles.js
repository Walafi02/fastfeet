import styled from 'styled-components/native';
import {ActivityIndicator} from 'react-native';

import {Button as StartDeliveryButton} from '~/components';

export const Container = styled.ScrollView`
  background: #fff;
  margin: 0 16px;
  border-radius: 4px;
  border: 1px solid #0000001a;
`;

export const TitleView = styled.View`
  padding: 10px;
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  color: #7d40e7;
  margin-left: 8px;
  font-size: 16px;
  font-weight: bold;
`;

export const Card = styled.View`
  padding: 10px 10px 15px;
`;

export const Label = styled.Text`
  color: #999;
  font-size: 16px;
  font-weight: bold;
`;

export const Value = styled.Text`
  color: #666;
  font-size: 16px;
`;

export const DoubleColumn = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Buttons = styled.View`
  flex-direction: row;
`;

export const Button = styled.TouchableOpacity.attrs({})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background: ${props => (!props.disabled ? '#eee' : '#ccc')};
  border: 1px solid #ddd;
  border-radius: 4px;
`;

export const ButtonText = styled.Text`
  text-align: center;
  color: #999999;
  font-size: 14px;
`;

export const Loading = styled(ActivityIndicator)`
  margin-top: 20px;
`;

export const ButtonStartDelivery = styled(StartDeliveryButton)`
  background: #7d40e7;
`;
