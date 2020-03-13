import React from 'react';
import {useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import {CommonActions} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/MaterialIcons';

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

  function handleNavigate() {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'Profile',
      })
    );
  }

  return (
    <Container>
      <Welcome>
        <WelcomeProfile>
          <ImageProfile
            source={{
              uri:
                profile.url ||
                `https://api.adorable.io/avatars/100/${profile.name}.io.png`,
            }}
          />

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
          <HeaderOption onPress={() => {}}>
            <HeaderOptionText active>Pendentes</HeaderOptionText>
          </HeaderOption>
          <HeaderOption onPress={() => {}}>
            <HeaderOptionText active={false}>Entregues</HeaderOptionText>
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
