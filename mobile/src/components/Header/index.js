import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import {CommonActions} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {deliveriesRequest} from '~/store/modules/deliveries/actions';
import {InitialLetters} from '~/components';

import {
  Container,
  Welcome,
  WelcomeProfile,
  ImageProfile,
  WelcomeData,
  WelcomeLabel,
  WelcomeText,
  ButtonIcon,
  HeaderList,
  HeaderListLabel,
  HeaderListOptions,
  HeaderOption,
  HeaderOptionText,
} from './styles';

export default function Header({navigation}) {
  const {profile} = useSelector(state => state.user);
  const {status} = useSelector(state => state.deliveries);
  const dispatch = useDispatch();

  function handleNavigate() {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'Profile',
      })
    );
  }

  function handleSearch(value = 'all') {
    dispatch(deliveriesRequest(1, [], value));
  }

  return (
    <Container>
      <Welcome>
        <WelcomeProfile>
          {profile && profile.avatar && profile.avatar.url ? (
            <ImageProfile source={{uri: profile.avatar.url}} />
          ) : (
            <InitialLetters
              name={profile.name}
              width={80}
              height={80}
              borderRadius={40}
              fontSize={40}
            />
          )}

          <WelcomeData>
            <WelcomeLabel>Bem vindo de volta,</WelcomeLabel>
            <WelcomeText>{profile.name}</WelcomeText>
          </WelcomeData>
        </WelcomeProfile>

        <ButtonIcon onPress={handleNavigate}>
          <Icon name="exit-to-app" size={24} color="red" />
        </ButtonIcon>
      </Welcome>

      <HeaderList>
        <HeaderListLabel>Entregas</HeaderListLabel>

        <HeaderListOptions>
          <HeaderOption onPress={() => handleSearch('progress')}>
            <HeaderOptionText active={status === 'progress'}>
              Pendentes
            </HeaderOptionText>
          </HeaderOption>
          <HeaderOption onPress={() => handleSearch('done')}>
            <HeaderOptionText active={status === 'done'}>
              Entregues
            </HeaderOptionText>
          </HeaderOption>
        </HeaderListOptions>
      </HeaderList>
    </Container>
  );
}

Header.propTypes = {
  navigation: PropTypes.shape({
    dispatch: PropTypes.func.isRequired,
  }).isRequired,
};
