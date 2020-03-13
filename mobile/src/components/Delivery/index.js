import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, HeaderTitle, Title} from './styles';

export default function Delivery() {
  return (
    <Container>
      <HeaderTitle>
        <Icon name="local-shipping" size={24} color="red" />
        <Title>Title</Title>
      </HeaderTitle>
    </Container>
  );
}
