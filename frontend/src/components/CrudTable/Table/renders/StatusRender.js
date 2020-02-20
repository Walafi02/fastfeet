import React, { memo } from 'react';
import _get from 'lodash/get';
import Status from '~/components/Status';

const StatusRender = ({ data, column }) => {
  const text = _get(data, column.field);

  switch (text) {
    case 'canceled':
      return <Status label="Cancelada" color="#de3b3b" background="#fab0b0" />;
    case 'done':
      return <Status label="Entregue" color="#2CA42B" background="#DFF0DF" />;
    case 'progress':
      return <Status label="Retirado" color="#4D85EE" background="#BAD2FF" />;
    default:
      return <Status label="Pendente" color="#C1BC35" background="#F0F0DF" />;
  }
};

export default memo(StatusRender);
