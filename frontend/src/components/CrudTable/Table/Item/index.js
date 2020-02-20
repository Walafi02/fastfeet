import React from 'react';
import PropTypes from 'prop-types';
import renders from '../renders';

export default function Item({ columns, item }) {
  return (
    <tr>
      {columns.map(column => (
        <td key={column.field}>{renders.render(item, column)}</td>
      ))}
      <td>...</td>
    </tr>
  );
}

Item.propTypes = {
  columns: PropTypes.array.isRequired,
  item: PropTypes.object.isRequired,
};
