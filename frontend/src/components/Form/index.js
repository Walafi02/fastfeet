import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { MdKeyboardArrowLeft, MdDone } from 'react-icons/md';
import { toast } from 'react-toastify';
import { Form } from '@rocketseat/unform';

import history from '~/services/history';
import Button from '~/components/Button';
import entities from '~/constants/entities';
import api from '~/services/api';

import { Container } from './styles';

export default function FormComponent({ entity, id, schema, children }) {
  const { labels } = entities[entity];
  const [initialData, setInitialData] = useState({});

  async function handleSubmit(data) {
    try {
      const response = id // eslint-disable-line
        ? await api.put(`/${entity}/${id}`, data)
        : await api.post(`/${entity}`, data);

      toast.success('Plano salvo com sucesso');
      history.push(`/${entity}`);
    } catch (error) {
      toast.error('Error ao salvar, verifique suas permissões');
    }
  }

  function handleGoBack() {
    history.push(`/${entity}`);
  }

  async function getData() {
    try {
      const { data } = await api.get(`/${entity}/${id}`);
      setInitialData(data);
    } catch (error) {
      toast.error(
        'Error ao buscar item para editar, verifique suas permissões'
      );
      history.push(`/${entity}`);
    }
  }

  useEffect(() => {
    if (id) getData();
  }, []); // eslint-disable-line

  return (
    <Container>
      <h2 className="flex flex-between">
        {id ? labels.textEdit : labels.textCreate}
        <div className="flex">
          <Button
            Icon={MdKeyboardArrowLeft}
            text="Valtar"
            onClick={handleGoBack}
          />

          <Button
            type="submit"
            form={entity}
            Icon={MdDone}
            className="button-primary"
            text="Salvar"
          />
        </div>
      </h2>

      <div>
        <Form
          id={entity}
          initialData={initialData}
          onSubmit={handleSubmit}
          schema={schema}
        >
          {children}
        </Form>
      </div>
    </Container>
  );
}

Form.propTypes = {
  entity: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array])
    .isRequired,
  schema: PropTypes.object,
  onSubmit: PropTypes.func,
  initialData: PropTypes.object,
};
