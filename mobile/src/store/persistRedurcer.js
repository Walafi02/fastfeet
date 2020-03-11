import AsyncStorange from '@react-native-community/async-storage';
import {persistReducer} from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'fastfeet',
      storage: AsyncStorange,
      whitelist: ['auth', 'user'],
    },
    reducers
  );

  return persistedReducer;
};
