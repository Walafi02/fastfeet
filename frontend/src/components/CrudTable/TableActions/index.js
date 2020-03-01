import React from 'react';
import { MdSearch, MdAdd } from 'react-icons/md';
import Button from '~/components/Button';
import SearchBar from '~/components/SearchBar';
import { Container } from './styles';

export default function TableActions({ onclickNew, label, name, setName }) {
  return (
    <Container className="flex flex-between">
      <SearchBar
        Icon={MdSearch}
        placeholder={label}
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <Button
        Icon={MdAdd}
        className="button-primary"
        text="Cadastrar"
        onClick={onclickNew}
      />
    </Container>
  );
}
