import React, {useRef} from 'react';
import {Image, StatusBar} from 'react-native';
import * as Yup from 'yup';
import {useDispatch, useSelector} from 'react-redux';

import {Form} from '@unform/mobile';
import {Input, Button} from '~/components';
import {Container, FormContainer} from './styles';

import {signInRequest} from '~/store/modules/auth/actions';

import logo from '~/assets/logo.png';

const schema = Yup.object().shape({
  id: Yup.number().required(),
});

export default function SignIn() {
  const formRef = useRef(null);
  const dispatch = useDispatch();

  const loading = useSelector(state => state.auth.loading);

  async function handleSubmit(data) {
    try {
      formRef.current.setErrors({});

      await schema.validate(data, {
        abortEarly: false,
      });

      const {id} = data;
      dispatch(signInRequest(id));
    } catch (err) {
      const validationErrors = {};
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach(error => {
          validationErrors[error.path] = error.message;
        });
        formRef.current.setErrors(validationErrors);
      }
    }
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7D40E7" />
      <Container>
        <Image source={logo} />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <FormContainer>
            <Input
              name="id"
              autoCapitalize="none"
              keyboardType="numeric"
              autoCorrect={false}
              placeholder="Informe seu ID de cadastro"
              returnKeyType="send"
              onSubmitEditing={() => formRef.current.submitForm()}
            />
            <Button
              loading={loading}
              onPress={() => formRef.current.submitForm()}>
              Entrar no sistema
            </Button>
          </FormContainer>
        </Form>
      </Container>
    </>
  );
}
