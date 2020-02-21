import React from 'react';
import { MdSearch } from 'react-icons/md';
import Button from '~/components/Button';
import SearchBar from '~/components/SearchBar';
import { Container } from './styles';

export default function TableActions() {
  const handleClick = () => {
    window.location += '/new';
  };

  return (
    <Container className="flex flex-between">
      <SearchBar
        Icon={MdSearch}
        // value={name}
        // onChange={e => setName(e.target.value)}
      />
      <Button
        className="button-primary"
        text="Cadastrar"
        onClick={handleClick}
      />
    </Container>
  );
}
