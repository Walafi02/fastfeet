import React from 'react';
import Button from '~/components/Button';
// import { Container } from './styles';

export default function TableActions() {
  const handleclick = () => {};
  return (
    <div className="flex flex-between">
      <input type="text" />
      <Button
        className="button-primary"
        text="Cadastrar"
        onClick={handleclick}
      />
    </div>
  );
}
