import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import { ImageAvatar, InitialLetters } from './styles';

export default function Avatar({ name, avatar }) {
  const letters = name.match(/\b(\w)/g);

  const color = useMemo(() => {
    switch (letters[0].toUpperCase()) {
      case 'A':
      case 'B':
      case 'C':
      case 'D':
        return '#F4EFFC';
      case 'F':
      case 'G':
      case 'H':
      case 'I':
        return '#FCF4EE';
      case 'J':
      case 'L':
      case 'M':
      case 'N':
        return '#EBFBFA';
      case 'O':
      case 'P':
      case 'Q':
      case 'S':
        return '#FFEEF1';
      case 'W':
      case 'U':
      case 'V':
        return '#F4F9EF';
      case 'X':
      case 'Z':
      case 'Y':
        return '#F4F9EF';
      default:
        return '#83CEC9';
    }
  }, [letters]);

  return (
    <>
      {avatar ? (
        <ImageAvatar src={avatar.url} alt="Avatar" />
      ) : (
        <InitialLetters color={color}>{letters.slice(0, 2)}</InitialLetters>
      )}
    </>
  );
}

Avatar.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.array,
};
