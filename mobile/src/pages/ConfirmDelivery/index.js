import React, {useState} from 'react';
import {Alert, ActivityIndicator} from 'react-native';
import {useSelector} from 'react-redux';
import {CommonActions} from '@react-navigation/native';
import PropTypes from 'prop-types';

import api from '~/services/api';
import {Background, Camera} from '~/components';

import {
  Container,
  Image,
  Button,
  SelectImageButton,
  SelectImageText,
  Loading,
} from './styles';

export default function ConfirmDelivery({navigation, route}) {
  const {id} = useSelector(state => state.user.profile);
  const {delivery_id} = route.params;
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState();
  const [openCamera, setOpenCamera] = useState(false);

  async function handleOpenCamera() {
    setOpenCamera(true);
  }

  function handleLongPress() {
    Alert.alert(
      'Remoção imagem',
      'Deseja remover essa imagem',
      [
        {
          text: 'Não',
        },
        {text: 'Sim', onPress: () => setImage()},
      ],
      {cancelable: false}
    );
  }

  async function handleDone() {
    setLoading(true);
    const params = {};

    try {
      if (image) {
        const data = new FormData();
        data.append('file', {
          type: 'image/jpg',
          uri: image,
          name: 'assignature.jpg',
        });

        const response = await api.post('files', data);
        params.signature_id = response.data.id;
      }

      await api.put(`deliveryman/${id}/deliveries/${delivery_id}/end`, params);

      navigation.dispatch(
        CommonActions.navigate({
          name: 'Details',
          params: {
            id: delivery_id,
          },
        })
      );
    } catch (error) {
      Alert.alert(`${error.response.data.error || 'Error interno'}`);
    } finally {
      setLoading(false);
    }
  }
  return (
    <>
      <Background>
        {!openCamera ? (
          <Container>
            <SelectImageButton
              onPress={handleOpenCamera}
              onLongPress={image && handleLongPress}>
              {image ? (
                <Image source={{uri: image}} />
              ) : (
                <SelectImageText>Envie uma imagem</SelectImageText>
              )}
            </SelectImageButton>
            <Button onPress={handleDone}>Enviar</Button>
          </Container>
        ) : (
          <Camera
            selectImage={setImage}
            closeCamera={() => setOpenCamera(false)}
          />
        )}
      </Background>
      {loading && (
        <Loading>
          <ActivityIndicator size="large" color="#ccc" />
        </Loading>
      )}
    </>
  );
}

ConfirmDelivery.propTypes = {
  navigation: PropTypes.shape({
    dispatch: PropTypes.func.isRequired,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      delivery_id: PropTypes.number,
    }),
  }).isRequired,
};
