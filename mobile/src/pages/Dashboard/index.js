import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import PropTypes from 'prop-types';

import {Header, Delivery} from '~/components';
import {Container, List} from './styles';

import {deliveriesRequest} from '~/store/modules/deliveries/actions';

export default function Dashboard({navigation}) {
  const dispatch = useDispatch();
  const {docs, loading, currentPage, totalPages, status} = useSelector(
    state => state.deliveries
  );

  function handleLoadMore() {
    if (currentPage < totalPages) {
      dispatch(deliveriesRequest(currentPage + 1, docs, status));
    }
  }

  useEffect(() => {
    navigation.addListener('focus', () => {
      dispatch(deliveriesRequest());
    });
  }, []); // eslint-disable-line

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Container>
        <List
          ListHeaderComponent={<Header navigation={navigation} />}
          data={docs}
          keyExtractor={item => String(item.id)}
          onRefresh={() => dispatch(deliveriesRequest())}
          refreshing={loading}
          onEndReachedThreshold={0.2}
          onEndReached={handleLoadMore}
          renderItem={({item}) => (
            <Delivery
              navigation={navigation}
              id={item.id}
              product={item.product}
              created_at={item.created_at}
              city={item.recipient.city}
              status={item.status}
            />
          )}
        />
      </Container>
    </>
  );
}

Dashboard.propTypes = {
  navigation: PropTypes.shape({
    dispatch: PropTypes.func.isRequired,
    addListener: PropTypes.func.isRequired,
  }).isRequired,
};
