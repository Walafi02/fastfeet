/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { format, parseISO } from 'date-fns';

import history from '~/services/history';
import api from '~/services/api';
import entities from '~/constants/entities';
import crudActions from '~/constants/crudActions';
import TableActions from './TableActions';
import Table from './Table';
import Pagination from './Pagination';

import ReactModal from '~/components/ReactModal';

export default function CRUDTable({ entity, actions, searchBar }) {
  const [docs, setDocs] = useState([]);

  const [name, setName] = useState('');
  const [currentPage, setCurrentPage] = useState(null);
  const [totalPages, setTotalPages] = useState(null);
  const [loading, setLoading] = useState(false);
  const [openView, setOpenView] = useState(false);
  const [itemToView, setItemToView] = useState({});

  const { urls, columns, labels } = entities[entity];

  async function load(page = 1) {
    setLoading(true);
    setCurrentPage(page);

    try {
      const { data } = await api.get(urls.get, {
        params: {
          name,
          page,
        },
      });

      setDocs(data.docs);
      setTotalPages(data.pages);
    } catch (error) {
      toast.error(error.response.data.error || 'Error Interno.');
    } finally {
      setLoading(false);
    }
  }

  function handleClickNew() {
    history.push(`/${entity}/new`);
  }

  function handleEdit(id) {
    history.push(`/${entity}/edit/${id}`);
  }

  async function handleDelete(id) {
    try {
      await api.delete(`/${entity}/${id}`);
      toast.success(`Sucesso ao deletar.`);
      load(
        docs.length === 1 && currentPage > 1 ? currentPage - 1 : currentPage
      );
    } catch (error) {
      toast.error(error.response.data.error || 'Error ao deletar.');
    }
  }

  function handleView(item) {
    setOpenView(value => !value);
    setItemToView(item);
    console.log(item);
  }

  useEffect(() => {
    load();
  }, [name]); // eslint-disable-line

  return (
    <div>
      {actions.includes(crudActions.CREATE) && (
        <TableActions
          searchBar={searchBar}
          label={labels.find}
          onclickNew={handleClickNew}
          name={name}
          setName={setName}
        />
      )}
      <Table
        columns={columns}
        data={docs}
        actions={actions}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onView={handleView}
      />
      <Pagination
        cPage={currentPage}
        loading={loading}
        handlePageChange={load}
        tPages={totalPages}
      />

      {actions.includes(crudActions.VIEW) && (
        <ReactModal open={openView} setOpen={setOpenView}>
          <div>
            <div className="flex flex-column">
              <strong>Informações da encomenda</strong>
              <span>
                Rua {itemToView.recipient && itemToView.recipient.street} - 123
              </span>
              <span>
                {itemToView.recipient && itemToView.recipient.city} -{' '}
                {itemToView.recipient && itemToView.recipient.state}
              </span>
              <span>{itemToView.recipient && itemToView.recipient.cep}</span>
            </div>
            {(itemToView.start_date || itemToView.end_date) && (
              <>
                <br />
                <div className="flex flex-column">
                  <strong>Datas</strong>
                  {itemToView.start_date && (
                    <div>
                      <strong>Retirada: </strong>
                      {format(parseISO(itemToView.start_date), 'dd/MM/yyyy')}
                    </div>
                  )}
                  {itemToView.start_date && (
                    <div>
                      <strong>Entrega: </strong>
                      {format(parseISO(itemToView.start_date), 'dd/MM/yyyy')}
                    </div>
                  )}
                </div>
              </>
            )}
            {itemToView.signature && (
              <>
                <br />
                <div>
                  <strong>Assinatura do destinatário</strong>
                </div>
              </>
            )}
          </div>
        </ReactModal>
      )}
    </div>
  );
}

CRUDTable.propTypes = {
  entity: PropTypes.string.isRequired,
  actions: PropTypes.arrayOf(PropTypes.string),
  searchBar: PropTypes.string.isRequired,
};
