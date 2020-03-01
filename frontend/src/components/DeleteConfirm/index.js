import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';
import Button from '~/components/Button';

export default function DeleteConfirm({ id, onClose, onDelete }) {
  return (
    <Container>
      <h1>Deseja Deletar esse Item?</h1>
      <div className="flex flex-justify-end">
        <Button text="Cancelar" onClick={onClose} />
        <Button
          text="Deletar"
          className="button-primary"
          onClick={() => {
            onDelete(id);
            onClose();
          }}
        />
      </div>
    </Container>
  );
}

DeleteConfirm.propTypes = {
  id: PropTypes.number.isRequired,
  onClose: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};
