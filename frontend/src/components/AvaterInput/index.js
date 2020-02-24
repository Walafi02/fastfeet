import React, { useRef, useEffect } from 'react';
import { useField } from '@rocketseat/unform';
import PropTypes from 'prop-types';

import api from '~/services/api';
import { Container } from './styles';

export default function AvatarInput({ name, file, setFile }) {
  const { registerField } = useField(name);

  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'avatar_id',
        ref: ref.current,
        path: 'dataset.file',
      });
    }
  }, [ref.current]); // eslint-disable-line

  async function handleChange(e) {
    const data = new FormData();
    data.append('file', e.target.files[0]);

    const response = await api.post('files', data);

    const { id, url } = response.data;
    setFile({ id, url });
  }

  return (
    <Container>
      <label htmlFor="avatar">
        <img
          src={
            (file && file.url) ||
            'https://api.adorable.io/avatars/100/rihor@rihor.io.png'
          }
          alt="Avatar"
        />
        <input
          type="file"
          id="avatar"
          accept="image/*"
          data-file={file.id}
          onChange={handleChange}
          ref={ref}
        />
      </label>
    </Container>
  );
}

AvatarInput.propTypes = {
  name: PropTypes.string.isRequired,
  file: PropTypes.object,
  setFile: PropTypes.func,
};
