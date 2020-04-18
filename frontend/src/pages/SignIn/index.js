import React from 'react';
import { useDispatch } from 'react-redux';

import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';

import { Container } from './styles';
import logo from '~/assets/logo.png';
import { signInRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um email valido')
    .required('O e-mail é obrigatorio'),
  password: Yup.string().required('A Senha é obrigatoria'),
});

export default function SignIn() {
  const dispatch = useDispatch();

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <Container>
      <img src={logo} alt="Fastfeet" />

      <Form
        className="flex flex-column"
        schema={schema}
        onSubmit={handleSubmit}
      >
        <Input
          label="seu e-mail"
          name="email"
          type="email"
          placeholder="Seu e-mail"
        />

        <Input
          label="sua senha"
          name="password"
          type="password"
          placeholder="Sua senha"
        />

        <button type="submit">Entrar no Sistema</button>
      </Form>
    </Container>
  );
}
