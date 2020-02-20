import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Driver({ name, avatar }) {
  return (
    <Container title={name}>
      <img
        src={
          avatar ? avatar.url : `https://api.adorable.io/avatar/50/${name}.png`
        }
        alt="Avatar"
      />
      {name.length > 20 ? `${String(name).slice(0, 25)}...` : name}
    </Container>
  );
}

Driver.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.array,
};
