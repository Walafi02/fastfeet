import React from 'react';
import PropTypes from 'prop-types';
import { MdKeyboardArrowLeft, MdDone } from 'react-icons/md';
import { Form } from '@rocketseat/unform';
import history from '~/services/history';
import Button from '~/components/Button';

import { Container } from './styles';

export default function FormComponent({
  entity,
  schema,
  onSubmit,
  children,
  initialData,
}) {
  function handleGoBack() {
    history.push(`/${entity}`);
  }

  return (
    <Container>
      <h2 className="flex flex-between">
        Cadastro de entregadores
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
          onSubmit={onSubmit}
          schema={schema}
        >
          {children}
        </Form>
      </div>
    </Container>
  );
}

Form.propTypes = {
  entity: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array])
    .isRequired,
  schema: PropTypes.object,
  onSubmit: PropTypes.func,
  initialData: PropTypes.object,
};
