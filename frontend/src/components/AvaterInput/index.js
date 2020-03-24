import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@rocketseat/unform';
import PropTypes from 'prop-types';

import { MdInsertPhoto } from 'react-icons/md';

import api from '~/services/api';

import { Container } from './styles';

export default function AvatarInput({ name }) {
  const { fieldName, registerField, defaultValue } = useField(name);
  const [file, setFile] = useState(defaultValue);
  const [preview, setPreview] = useState(null);
  const ref = useRef();

  async function getFile(id) {
    const { data } = await api.get(`/files/${id}`);
    setPreview(data.url);
  }

  useEffect(() => {
    if (defaultValue) {
      getFile(defaultValue);
    }
  }, [defaultValue]);

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: fieldName,
        ref: ref.current,
        path: 'dataset.file',
      });
    }
  }, [fieldName, ref, registerField]);

  async function handleChange(e) {
    const data = new FormData();
    data.append('file', e.target.files[0]);
    const response = await api.post('files', data);

    const { id, url } = response.data;

    setFile(id);
    setPreview(url);
  }

  return (
    <Container>
      <label htmlFor="avatar">
        {preview ? (
          <img src={preview} alt="avatar" />
        ) : (
          <span>
            <MdInsertPhoto />
            <span>Adicionar foto</span>
          </span>
        )}

        <input
          type="file"
          id="avatar"
          accept="image/*"
          data-file={file}
          onChange={handleChange}
          ref={ref}
        />
      </label>
    </Container>
  );
}

AvatarInput.propTypes = {
  name: PropTypes.string.isRequired,
};
