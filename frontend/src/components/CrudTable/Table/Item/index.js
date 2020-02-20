import React from 'react';
import PropTypes from 'prop-types';
import { MdMoreHoriz } from 'react-icons/md';
import renders from '../renders';

export default function Item({ columns, item }) {
  return (
    <tr>
      {columns.map(column => (
        <td key={column.field}>{renders.render(item, column)}</td>
      ))}
      <td>
        <MdMoreHoriz
          onClick={() => console.log('ok')}
          size={30}
          color="#C6C6C6"
        />
      </td>
    </tr>
  );
}

Item.propTypes = {
  columns: PropTypes.array.isRequired,
  item: PropTypes.object.isRequired,
};
