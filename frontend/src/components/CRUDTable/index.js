import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import api from '~/services/api';
// import urls from '~/constants/urls';
import entities from '~/constants/entities';

// import { Container } from './styles';

export default function CRUDTable({ entity }) {
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

  return <div>CRUDTable</div>;
}

CRUDTable.propTypes = {
  entity: PropTypes.string.isRequired,
};
