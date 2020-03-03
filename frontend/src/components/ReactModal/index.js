import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    bottom: 'auto',
    width: '450px',
    maxHeight: '500px',
    transform: 'translate(-50%, -50%)',
    // overflow: 'scroll',
  },
  overlay: {
    background: 'rgba(0, 0, 0, 0.6)',
  },
};

export default function ReactModal({ open, setOpen, children }) {
  Modal.setAppElement('body');

  return (
    <div>
      <Modal
        isOpen={open}
        onRequestClose={() => setOpen(false)}
        style={customStyles}
      >
        {children}
      </Modal>
    </div>
  );
}

ReactModal.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array])
    .isRequired,
};
