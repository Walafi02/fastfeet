import React from 'react';
import * as Yup from 'yup';
import { Input } from '@rocketseat/unform';
import PropTypes from 'prop-types';

import Form from '~/components/Form';
import Field from '~/components/Field';
import InputMask from '~/components/InputMask';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatorio'),
  street: Yup.string().required('A rua é obrigatorio'),
  number: Yup.string(),
  complement: Yup.string(),
  state: Yup.string().required('O estado é obrigatorio'),
  city: Yup.string().required('A cidade é obrigatorio'),
  cep: Yup.string()
    .min(9)
    .required('O CEP é obrigatorio'),
});

export default function RecipientForm({ match }) {
  const { id } = match.params;

  return (
    <Form entity="recipient" schema={schema} id={id}>
      <Field>
        <Input
          label="Nome"
          name="name"
          required
          placeholder="Ludwig van Beethoven"
        />
      </Field>
      <div className="flex">
        <Field>
          <Input
            label="Rua"
            name="street"
            required
            placeholder="Rua Beethoven"
          />
        </Field>
        <div className="flex">
          <Field>
            <Input
              type="number"
              label="Número"
              name="number"
              placeholder="1799"
            />
          </Field>
          <Field>
            <Input label="Complemento" name="complement" />
          </Field>
        </div>
      </div>
      <div className="flex">
        <Field>
          <Input label="Cidade" name="city" required placeholder="Diadema" />
        </Field>
        <Field>
          <Input label="Estado" name="state" required placeholder="São Paulo" />
        </Field>
        <Field>
          <InputMask
            label="CEP"
            name="cep"
            mask="99999-999"
            required
            placeholder="09960-580"
          />
        </Field>
      </div>
    </Form>
  );
}

RecipientForm.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};
