import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Button({ type, className, Icon, text, ...rest }) {
  return (
    <Container
      className={classnames('flex flex-justify-center flex-center', className)}
      type={type}
      {...rest}
    >
      {Icon && <Icon size={24} color="#fff" />} <span>{text || 'button'}</span>
    </Container>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
  Icon: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func,
    PropTypes.bool,
  ]),
};

Button.defaultProps = {
  type: 'button',
  Icon: false,
};
