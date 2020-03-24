import React, {useEffect, useMemo} from 'react';
import {StatusBar, BackHandler} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {format, parseISO} from 'date-fns';
import pt from 'date-fns/locale/pt';

import {singOut} from '~/store/modules/auth/actions';

import {
  Container,
  Info,
  Label,
  Text,
  ImageProfile,
  ButtonLogout,
} from './styles';
import {InitialLetters} from '~/components';

export default function Profile() {
  const dispatch = useDispatch();
  const {profile} = useSelector(state => state.user);

  const dateFormated = useMemo(
    () => format(parseISO(profile.created_at), 'dd/MM/yyyy', {locale: pt}),
    [profile]
  );

  useEffect(() => {
    function closeApp() {
      BackHandler.exitApp();
    }
    BackHandler.addEventListener('hardwareBackPress', () => closeApp());

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', () => closeApp());
    };
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Container>
        {profile && profile.avatar && profile.avatar.url ? (
          <ImageProfile source={{uri: profile.avatar.url}} />
        ) : (
          <InitialLetters name={profile.name} />
        )}

        <Info>
          <Label>Nome completo</Label>
          <Text>{profile.name}</Text>
        </Info>

        <Info>
          <Label>E-mail</Label>
          <Text>{profile.email}</Text>
        </Info>

        <Info>
          <Label>Data de cadastro</Label>
          <Text>{dateFormated}</Text>
        </Info>

        <ButtonLogout onPress={() => dispatch(singOut())}>Logout</ButtonLogout>
      </Container>
    </>
  );
}
