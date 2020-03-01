import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

import { Container } from './styles';

export default function Table({ columns, data, actions, onEdit, onDelete }) {
  return (
    <Container>
      <thead>
        <tr>
          {columns.map(({ field, label }) => (
            <th key={field}>{label}</th>
          ))}
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <Item
            key={item.id}
            columns={columns}
            item={item}
            actions={actions}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </tbody>
    </Container>
  );
}

Table.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array,
};
