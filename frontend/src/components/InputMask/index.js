import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import InputMask from 'react-input-mask';
import { useField } from '@rocketseat/unform';

export default function Input({ label, name, mask, ...rest }) {
  const ref = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);
  const [value, setValue] = useState();

  useEffect(() => {
    if (defaultValue !== null) {
      setValue(defaultValue);
    }
  }, [defaultValue]);  // eslint-disable-line

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'value',
    });
  }, [ref.current, fieldName]); // eslint-disable-line

  return (
    <>
      {label && <label htmlFor={fieldName}>{label}</label>}
      {mask ? (
        <InputMask
          id={fieldName}
          name={fieldName}
          value={value}
          ref={ref}
          onChange={e => setValue(e.target.value)}
          mask={mask}
          {...rest}
        />
      ) : (
        <input
          id={fieldName}
          name={fieldName}
          value={value}
          ref={ref}
          onChange={e => setValue(e.target.value)}
          {...rest}
        />
      )}
      {error && <span>{error}</span>}
    </>
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  mask: PropTypes.string,
};

Input.defaultProps = {
  mask: null,
};
