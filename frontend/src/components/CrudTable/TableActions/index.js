import React from 'react';
import { MdSearch } from 'react-icons/md';
import Button from '~/components/Button';
// import { Container } from './styles';
import SearchBar from '~/components/SearchBar';

export default function TableActions() {
  const handleclick = () => {};
  return (
    <div className="flex flex-between">
      <SearchBar
        Icon={MdSearch}
        // value={name}
        // onChange={e => setName(e.target.value)}
      />
      <Button
        className="button-primary"
        text="Cadastrar"
        onClick={handleclick}
      />
    </div>
  );
}
