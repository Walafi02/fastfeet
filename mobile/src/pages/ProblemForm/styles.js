import styled from 'styled-components/native';
import {Button as RectButton, Input as InputMultiline} from '~/components';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #fff;
  margin: 0 16px;
  border-radius: 4px;
`;

export const Input = styled(InputMultiline)`
  padding: 10px;
  border: 1px solid #0000001a;
  border-radius: 4px;
`;

export const Button = styled(RectButton)`
  background: #7d40e7;
`;
