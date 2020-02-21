import React, { memo } from 'react';
import _get from 'lodash/get';

// import { Container } from './styles';

const FulltextRender = ({ data, column }) => {
  const text = _get(data, column.field);

  return text ? <span title={text}>{text}</span> : <span>Indisponivel</span>;
};

export default memo(FulltextRender);
