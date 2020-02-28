import React from 'react';
import * as Yup from 'yup';
import { Input } from '@rocketseat/unform';
import PropTypes from 'prop-types';

import AvaterInput from '~/components/AvaterInput';
import Form from '~/components/Form';
import Field from '~/components/Field';

const schema = Yup.object().shape({
  avatar_id: Yup.number(),
  name: Yup.string().required('O nome é obrigatorio'),
  email: Yup.string()
    .email('E-mail inválido')
    .required('Campo obrigatório'),
});

export default function DeliverymanForm({ match }) {
  const { id } = match.params;

  return (
    <Form entity="deliveryman" schema={schema} id={id}>
      <Field>
        <Field>
          <AvaterInput name="avatar_id" />
        </Field>
        <Field>
          <Input label="Nome" name="name" placeholder="José Antônio" />
        </Field>
        <Field>
          <Input label="e-mail" name="email" placeholder="exemplo@gmail.com" />
        </Field>
      </Field>
    </Form>
  );
}

DeliverymanForm.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};
