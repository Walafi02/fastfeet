import React, {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useSelector} from 'react-redux';
import {CommonActions} from '@react-navigation/native';
import PropTypes from 'prop-types';

import {dateFormated, statusFormated} from '~/util';
import {Background} from '~/components';
import api from '~/services/api';

import {
  Container,
  TitleView,
  Title,
  Card,
  Label,
  Value,
  DoubleColumn,
  Buttons,
  Button,
  ButtonText,
  Loading,
  ButtonStartDelivery,
} from './styles';

export default function DetailsDelivery({navigation, route}) {
  const delivery_id = route.params.id;
  const {id} = useSelector(state => state.user.profile);

  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState({});

  async function loadingData() {
    setLoading(true);
    try {
      const {data} = await api.get(
        `/deliveryman/${id}/delivery/${delivery_id}`
      );

      setDetails({
        ...data,
        start_date_formated: dateFormated(data.start_date),
        end_date_formated: dateFormated(data.end_date),
        status_formated: statusFormated(data.status),
      });
    } catch (error) {
      navigation.dispatch(
        CommonActions.navigate({
          name: 'Dashboard',
        })
      );
      Alert.alert('Error ao buscar a entregar');
    } finally {
      setLoading(false);
    }
  }

  function handleOpenProblemForm() {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'ProblemForm',
        params: {
          delivery_id,
        },
      })
    );
  }

  function handleOpenProblemList() {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'ProblemList',
        params: {
          delivery_id,
          product: details.product,
        },
      })
    );
  }

  function handleDone() {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'ConfirmDelivery',
        params: {
          delivery_id,
        },
      })
    );
  }

  async function confirmStartDelivery() {
    try {
      await api.put(`deliveryman/${id}/deliveries/${delivery_id}/start`);

      loadingData();
    } catch (error) {
      Alert.alert(
        'Error',
        `${error.response.data.error || 'verifique seus dados'}`
      );
    }
  }

  function handleStartDelivery() {
    Alert.alert(
      'Retirada de Produto',
      'Deseja Retirar esse produto?',
      [
        {
          text: 'Não',
        },
        {text: 'Sim', onPress: () => confirmStartDelivery()},
      ],
      {cancelable: false}
    );
  }

  useEffect(() => {
    navigation.addListener('focus', () => {
      // do something
      // console.tron.log('aaaaaaaaaaaaaaaaaaaaaaaaa');
      loadingData();
    });

    // if (id && delivery_id) loadingData();
  }, []); // eslint-disable-line

  return (
    <Background>
      <Container>
        {loading ? (
          <Loading size="large" color="#7d40e7" />
        ) : (
          <>
            <TitleView>
              <Icon name="local-shipping" size={30} color="#7d40e7" />
              <Title>Informações da entrega</Title>
            </TitleView>

            <Card>
              <Label>DESTINATÁRIO</Label>
              <Value>{details.recipient.name}</Value>
            </Card>

            <Card>
              <Label>ENDEREÇO DE ENTREGA</Label>
              <Value>{details.recipient.address}</Value>
            </Card>

            <Card>
              <Label>PRODUTO</Label>
              <Value>{details.product}</Value>
            </Card>

            <TitleView>
              <Icon name="event" size={30} color="#7d40e7" />
              <Title>Situação da entrega</Title>
            </TitleView>

            <Card>
              <Label>STATUS</Label>
              <Value>{details.status_formated}</Value>
            </Card>

            <DoubleColumn>
              <Card>
                <Label>DATA DE RETIRADA</Label>
                <Value>{details.start_date_formated}</Value>
              </Card>

              <Card>
                <Label>DATA DE ENTREGA</Label>
                <Value>{details.end_date_formated}</Value>
              </Card>
            </DoubleColumn>

            {details.status === 'pedding' ? (
              <ButtonStartDelivery onPress={handleStartDelivery}>
                Retirar Produto
              </ButtonStartDelivery>
            ) : (
              <Buttons>
                <Button
                  onPress={handleOpenProblemForm}
                  disabled={details.status === 'done'}>
                  <Icon name="highlight-off" size={30} color="#E74040" />
                  <ButtonText>Informar Problema</ButtonText>
                </Button>
                <Button onPress={handleOpenProblemList}>
                  <Icon name="info-outline" size={30} color="#E7BA40" />
                  <ButtonText>Visualizar Problemas</ButtonText>
                </Button>
                <Button
                  onPress={handleDone}
                  disabled={details.status !== 'progress'}>
                  <Icon name="check-circle" size={30} color="#7d40e7" />
                  <ButtonText>Confirmar Entrega</ButtonText>
                </Button>
              </Buttons>
            )}
          </>
        )}
      </Container>
    </Background>
  );
}

DetailsDelivery.propTypes = {
  navigation: PropTypes.shape({
    dispatch: PropTypes.func.isRequired,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
};
