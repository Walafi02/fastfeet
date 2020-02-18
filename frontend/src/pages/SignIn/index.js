import React from 'react';

import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';

import { Container } from './styles';
import logo from '~/assets/logo.png';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um email valido')
    .required('O e-mail é obrigatorio'),
  password: Yup.string().required('A Senha é obrigatoria'),
});

export default function SignIn() {
  function handleSubmit({ email, password }) {
    // eslint-disable-next-line no-console
    console.log(email, password);
    // dispatch(signInRequest(email, password));
  }

  return (
    <Container>
      <img src={logo} alt="Fastfeet" />

      <Form
        className="flex flex-column"
        schema={schema}
        onSubmit={handleSubmit}
        initialData={{ email: 'admin@fastfeet.com', password: '123456' }}
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
