import styled from 'styled-components/native';

import {Button} from '~/components';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin: auto 30px;
`;

export const Info = styled.View`
  width: 100%;
  margin-top: 15px;
`;

export const Label = styled.Text`
  color: #666;
  font-size: 12px;
`;

export const Text = styled.Text`
  color: #444444;
  font-size: 22px;
  font-weight: bold;
`;

export const ImageProfile = styled.Image`
  width: 160px;
  height: 160px;
  border-radius: 80px;
  margin-bottom: 20px;
`;

export const ButtonLogout = styled(Button)`
  background: #e74040;
  width: 100%;
`;
