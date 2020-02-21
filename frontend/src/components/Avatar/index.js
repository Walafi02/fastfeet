import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Avatar({ name, avatar }) {
  return (
    <>
      <Container
        src={
          avatar ? avatar.url : `https://api.adorable.io/avatar/50/${name}.png`
        }
        alt="Avatar"
      />
    </>
  );
}

Avatar.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.array,
};
