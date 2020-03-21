import React, {useRef} from 'react';
import {Alert} from 'react-native';
import {Form} from '@unform/mobile';
import {useSelector} from 'react-redux';
import * as Yup from 'yup';
import {CommonActions} from '@react-navigation/native';
import PropTypes from 'prop-types';

import api from '~/services/api';
import {Background, Input} from '~/components';
import {Container, Button} from './styles';

const schema = Yup.object().shape({
  description: Yup.string()
    .required()
    .min(5)
    .max(50),
});

export default function ProblemForm({navigation, route}) {
  const {id} = useSelector(state => state.user.profile);
  const {delivery_id} = route.params;
  const formRef = useRef(null);

  async function handleSubmit(data) {
    try {
      formRef.current.setErrors({});

      await schema.validate(data, {
        abortEarly: false,
      });

      const {description} = data;

      await api.post(`deliveryman/${id}/delivery/${delivery_id}/problems`, {
        description,
      });

      navigation.dispatch(
        CommonActions.navigate({
          name: 'Details',
          params: {
            delivery_id,
          },
        })
      );

      Alert.alert('Sucesso ao cadastrar um problema');
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
    <Background>
      <>
        <Container>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input
              name="description"
              multiline
              numberOfLines={15}
              textAlignVertical="top"
              autoCapitalize="none"
              keyboardType="default"
              autoCorrect={false}
              placeholder="Inclua seu pedido de auxílio"
            />
            <Button onPress={() => formRef.current.submitForm()}>Enviar</Button>
          </Form>
        </Container>
      </>
    </Background>
  );
}

ProblemForm.propTypes = {
  navigation: PropTypes.shape({
    dispatch: PropTypes.func.isRequired,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      delivery_id: PropTypes.number,
      product: PropTypes.string,
    }),
  }).isRequired,
};
