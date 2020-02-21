import React, { memo } from 'react';
import _get from 'lodash/get';

// import { Container } from './styles';

const TextRender = ({ data, column }) => {
  const text = _get(data, column.field);

  return text ? (
    <span title={text}>
      {text.length > 20 ? `${String(text).slice(0, 20)}...` : text}
    </span>
  ) : (
    <span>Indisponivel</span>
  );
};

export default memo(TextRender);
