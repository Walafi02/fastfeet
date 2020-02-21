import React from 'react';
import TextRender from './TextRender';
import StatusRender from './StatusRender';
import DriverRender from './DriverRender';
import FulltextRender from './FulltextRender';
import AvatarRender from './AvatarRender';

function render(data, column) {
  switch (column.type) {
    case 'driver':
      return <DriverRender data={data} column={column} />;
    case 'status':
      return <StatusRender data={data} column={column} />;
    case 'fulltext':
      return <FulltextRender data={data} column={column} />;
    case 'avatar':
      return <AvatarRender data={data} column={column} />;
    case 'text':
    default:
      return <TextRender data={data} column={column} />;
  }
}

export default {
  render,
};
