import React, { useState } from 'react';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { Input } from '@rocketseat/unform';
import api from '~/services/api';

import Form from '~/components/Form';
import Field from '~/components/Field';
import ReactSelect from '~/components/ReactSelect';

const schema = Yup.object().shape({
  avatar_id: Yup.number(),
});

export default function DeliveryForm({ match }) {
  const { id } = match.params;

  // const [plan, setPlan] = useState('');

  async function getRecipient(recipient_id, setName) {
    const { data } = await api.get(`/recipient/${recipient_id}`);
    setName(data.title);
  }

  async function loadRecipient(inputValue) {
    const { data } = await api.get('/recipient', {
      params: {
        name: inputValue,
      },
    });

    return data.docs;
  }

  async function getDeliveryman(deliveryman_id, setName) {
    const { data } = await api.get(`/deliveryman/${deliveryman_id}`);
    setName(data.title);
  }

  async function loadDeliveryman(inputValue) {
    const { data } = await api.get('/deliveryman', {
      params: {
        name: inputValue,
      },
    });

    return data.docs;
  }

  return (
    <Form entity="deliveries" schema={schema} id={id}>
      <div className="flex">
        <Field>
          <ReactSelect
            label="Destinatário"
            name="recipient_id"
            loadInputValue={getRecipient}
            loadOptions={loadRecipient}
          />
        </Field>
        <Field>
          <ReactSelect
            label="Entregador"
            name="deliveryman_id"
            loadInputValue={getDeliveryman}
            loadOptions={loadDeliveryman}
          />
        </Field>
      </div>
      <Field>
        <Input label="Nome do Produto" name="product" />
      </Field>
    </Form>
  );
}

DeliveryForm.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};
