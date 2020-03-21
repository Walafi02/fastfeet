import React from 'react';
import {StatusBar} from 'react-native';
import PropTypes from 'prop-types';

import {Container, Header, Content} from './styles';

export default function Background({children}) {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7d40e7" />
      <Container>
        <Header />
        <Content>{children}</Content>
      </Container>
    </>
  );
}

Background.propTypes = {
  children: PropTypes.element.isRequired,
};
