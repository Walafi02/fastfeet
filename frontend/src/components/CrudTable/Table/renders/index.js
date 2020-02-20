import React from 'react';
import TextRender from './TextRender';
import StatusRender from './StatusRender';
import DriverRender from './DriverRender';

function render(data, column) {
  switch (column.type) {
    case 'driver':
      return <DriverRender data={data} column={column} />;
    case 'status':
      return <StatusRender data={data} column={column} />;
    case 'text':
    default:
      return <TextRender data={data} column={column} />;
  }
}

export default {
  render,
};
