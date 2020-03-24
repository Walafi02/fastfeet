import React, {useMemo} from 'react';
import PropTypes from 'prop-types';

import {getColor} from '~/util';
import {Container, TextLetters} from './styles';

export default function InitialLetters({name, ...rest}) {
  const letters = name.match(/\b(\w)/g);

  const color = useMemo(() => getColor(letters[0]), [letters]);

  return (
    <Container color={color} {...rest}>
      <TextLetters color={color} {...rest}>
        {letters.slice(0, 2)}
      </TextLetters>
    </Container>
  );
}

InitialLetters.propTypes = {
  name: PropTypes.string.isRequired,
};
