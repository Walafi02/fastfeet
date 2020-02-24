import React, { useState } from 'react';
import { MdMoreHoriz } from 'react-icons/md';

import DropdownMenu from '../DropdownMenu/index';
import { Container } from './styles';

export default function Dropdown() {
  const [open, setOpen] = useState(false);
  return (
    <Container>
      <MdMoreHoriz
        onClick={() => setOpen(value => !value)}
        size={30}
        color="#C6C6C6"
      />

      <DropdownMenu open={open} setOpen={setOpen} marginLeft="-50%">
        <span>Ola sjadjs</span>
      </DropdownMenu>
    </Container>
  );
}
