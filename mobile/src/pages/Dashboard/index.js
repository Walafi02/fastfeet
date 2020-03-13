import React from 'react';
import {Text} from 'react-native';

import {Header} from '~/components';
import {Container} from './styles';

export default function Dashboard({navigation}) {
  return (
    <>
      <Container>
        <Header navigation={navigation} />
      </Container>
    </>
  );
}
