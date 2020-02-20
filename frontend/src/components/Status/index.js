import React from 'react';
import PropTypes from 'prop-types';
import { MdBrightness1 } from 'react-icons/md';

import { Container } from './styles';

export default function Status({ label, background, color }) {
  return (
    <Container background={background} color={color}>
      <MdBrightness1 size={15} /> {label}
    </Container>
  );
}

Status.propTypes = {
  label: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
