import React, { memo } from 'react';
import _get from 'lodash/get';
import Driver from '~/components/Driver';

const DriverRender = ({ data, column }) => {
  const { name, avatar } = _get(data, column.field);

  return <Driver name={name} avatar={avatar} />;
};

export default memo(DriverRender);
