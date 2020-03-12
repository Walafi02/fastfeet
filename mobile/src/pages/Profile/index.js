import React from 'react';
import {View, Text, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {singOut} from '~/store/modules/auth/actions';

export default function Profile() {
  const dispatch = useDispatch();

  return (
    <View>
      <Text>Profile</Text>
      <Button
        title="sair"
        onPress={() => {
          dispatch(singOut());
        }}
      />
    </View>
  );
}
