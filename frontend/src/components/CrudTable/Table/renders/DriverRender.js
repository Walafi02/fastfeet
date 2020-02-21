import React, { memo } from 'react';
import _get from 'lodash/get';
import Avatar from '~/components/Avatar';

const DriverRender = ({ data, column }) => {
  const { name, avatar } = _get(data, column.field);

  return (
    <span className="flex flex-justify-start flex-center" title={name}>
      <Avatar name={name} avatar={avatar} />
      {name.length > 20 ? `${String(name).slice(0, 20)}...` : name}
    </span>
  );
};

export default memo(DriverRender);
