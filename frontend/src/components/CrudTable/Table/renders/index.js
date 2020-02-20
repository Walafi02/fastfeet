import React from 'react';
import TextRender from './TextRender';

function render(data, column) {
  switch (column.type) {
    case 'text':
    default:
      return <TextRender data={data} column={column} />;
  }
}

export default {
  render,
};
