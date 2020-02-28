import React from 'react';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { Input } from '@rocketseat/unform';

import Form from '~/components/Form';
import Field from '~/components/Field';
import ReactSelect from '~/components/ReactSelect';

const schema = Yup.object().shape({
  avatar_id: Yup.number(),
});

export default function DeliveryForm({ match }) {
  const { id } = match.params;

  return (
    <Form entity="deliveries" schema={schema} id={id}>
      <div className="flex">
        <Field>
          <ReactSelect
            label="Destinatário"
            name="recipient_id"
            entity="recipient"
          />
        </Field>
        <Field>
          <ReactSelect
            label="Entregador"
            name="deliveryman_id"
            entity="deliveryman"
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
