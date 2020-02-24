import React, { useEffect, useRef } from 'react';

import { Container } from './styles';

const DropdownMenu = ({ children, open, setOpen, marginLeft }) => {
  const dropdownRef = useRef();

  useEffect(() => {
    function handleClickOverlay(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    function handleKeyDown(event) {
      if (event.keyCode === 27) {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener('mousedown', handleClickOverlay);
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOverlay);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, setOpen]);

  return (
    open && (
      <Container ref={dropdownRef} marginLeft={marginLeft}>
        {children}
      </Container>
    )
  );
};

export default DropdownMenu;
