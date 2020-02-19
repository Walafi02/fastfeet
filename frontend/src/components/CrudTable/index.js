import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import api from '~/services/api';
import entities from '~/constants/entities';
import crudActions from '~/constants/crudActions';
import TableActions from './TableActions';
import Table from './Table';
import Pagination from './Pagination';

export default function CRUDTable({ entity, actions, searchBar }) {
  const [docs, setDocs] = useState([]);
  const [total, setTotal] = useState(null);
  const [pages, setPages] = useState(null);

  const { urls, columns } = entities[entity];

  async function refresh() {
    try {
      const { data } = await api.get(urls.get);

      setDocs(data.docs);
      setPages(data.pages);
      setTotal(data.total);
    } catch (error) {
      console.tron.error('error');
    }
  }

  useEffect(() => {
    refresh();
  }, [entity]);

  return (
    <div>
      {actions.includes(crudActions.CREATE) && (
        <TableActions searchBar={searchBar} />
      )}
      <Table />
      <Pagination />
    </div>
  );
}

CRUDTable.propTypes = {
  entity: PropTypes.string.isRequired,
  actions: PropTypes.arrayOf(PropTypes.string),
  searchBar: PropTypes.string.isRequired,
};
