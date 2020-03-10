import React, {useState} from 'react';
import {Image, StatusBar} from 'react-native';

import {Input, Button} from '~/components';
import {Container, Form} from './styles';

import logo from '~/assets/logo.png';

export default function SignIn() {
  const [id, setId] = useState();

  // function handleSubmit() {
  //   console.log('handleSubmit');
  // }

  const loading = false;

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7D40E7" />
      <Container>
        <Image source={logo} />

        <Form>
          <Input
            autoCapitalize="none"
            keyboardType="numeric"
            autoCorrect={false}
            placeholder="Informe seu ID de cadastro"
            // returnKeyType="send"
            // onSubmitEditing={handleSubmit}
            value={id}
            onChangeText={setId}
          />

          {/* <SubmitButton loading={loading} onPress={handleSubmit}> */}
          <Button loading={loading} onPress={() => {}}>
            Entrar no sistema
          </Button>
        </Form>
      </Container>
    </>
  );
}
