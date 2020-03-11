import React, {useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import {useField} from '@unform/core';
import {Container} from './styles';

function Input({name, ...rest}) {
  const inputRef = useRef(null);
  const {fieldName, registerField, defaultValue = '', error} = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: '_lastNativeText',
      getValue(ref) {
        return ref._lastNativeText || '';
      },
      setValue(ref, value) {
        ref.setNativeProps({text: value});
        ref._lastNativeText = value;
      },

      clearValue(ref) {
        ref.setNativeProps({text: ''});
        ref._lastNativeText = '';
      },
    });
  }, [fieldName, registerField]);

  return (
    <>
      <Container
        ref={inputRef}
        defaultValue={defaultValue}
        error={error}
        {...rest}
      />
    </>
  );
}
export default Input;

Input.propTypes = {
  name: PropTypes.string.isRequired,
};
