import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

import { Container } from './styles';

export default function Table({ columns, data }) {
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
          <Item key={item.id} columns={columns} item={item} />
        ))}
      </tbody>
    </Container>
  );
}

Table.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array,
};
