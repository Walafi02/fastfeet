import React from 'react';
import * as Yup from 'yup';
import { Input } from '@rocketseat/unform';
import PropTypes from 'prop-types';

import Form from '~/components/Form';
import Field from '~/components/Field';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatorio'),
});

export default function DeliverymanForm({ match }) {
  const { id } = match.params;

  function handleSubmit(data) {
    console.log(data);
  }

  return (
    <Form
      entity="deliveryman"
      onSubmit={handleSubmit}
      schema={schema}
      initialData={{ name: 'walafi', email: 'walafif@yahoo.com' }}
      edit={id}
    >
      <Field>
        <Input label="Nome" name="name" />
      </Field>
      >
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
