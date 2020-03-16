import React, {useEffect, useMemo} from 'react';
import {StatusBar} from 'react-native';
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

export default function Profile({navigation}) {
  const dispatch = useDispatch();
  const {profile} = useSelector(state => state.user);

  const dateFormated = useMemo(
    () => format(parseISO(profile.created_at), 'dd/MM/yyyy', {locale: pt}),
    [profile]
  );

  useEffect(() => {
    const unsubscribe = navigation.addListener('tabPress', e => {
      e.preventDefault();
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Container>
        <ImageProfile
          source={{
            uri:
              profile.url ||
              `https://api.adorable.io/avatars/100/${profile.name}.io.png`,
          }}
        />

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
