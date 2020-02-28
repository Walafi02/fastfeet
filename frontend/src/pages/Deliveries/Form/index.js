import React, { useState } from 'react';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { Input } from '@rocketseat/unform';

import AvaterInput from '~/components/AvaterInput';
import Form from '~/components/Form';
import Field from '~/components/Field';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatorio'),
  email: Yup.string()
    .email('E-mail inválido')
    .required('Campo obrigatório'),
});

export default function DeliveryForm({ match }) {
  const { id } = match.params;
  const [file, setFile] = useState({ id: null, url: null });

  function handleSubmit(data) {
    console.log(data);
    console.log(file);
  }

  return (
    <Form
      entity="deliveries"
      onSubmit={handleSubmit}
      schema={schema}
      initialData={{ name: 'walafi', email: 'walafif@yahoo.com' }}
      edit={id}
    >
      <Field>
        <AvaterInput name="avatar" file={file} setFile={setFile} />
      </Field>
      <Field>
        <Input label="Nome" name="name" />
      </Field>
      <Field>
        <Input label="e-mail" name="email" />
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
