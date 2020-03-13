import React from 'react';
import PropTypes from 'prop-types';

import {Header, Delivery} from '~/components';
import {Container} from './styles';

export default function Dashboard({navigation}) {
  return (
    <>
      <Container>
        <Header navigation={navigation} />

        <Delivery />
      </Container>
    </>
  );
}

Dashboard.propTypes = {
  navigation: PropTypes.func.isRequired,
};
