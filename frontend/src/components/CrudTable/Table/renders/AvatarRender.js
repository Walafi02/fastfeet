// AvatarRendar

import React, { memo } from 'react';
import _get from 'lodash/get';
import Avatar from '~/components/Avatar';

const AvatarRendar = ({ data }) => {
  const { name, avatar } = data;

  return <Avatar name={name} avatar={avatar} />;
};

export default memo(AvatarRendar);
