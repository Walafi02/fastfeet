import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { tableRequest } from '~/store/modules/table/actions';

// import { Container } from './styles';

export default function Deliveries() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(tableRequest());
    console.tron.log('ok');
  }, [dispatch]);

  return (
    <div>
      <h1>Deliveries</h1>
    </div>
  );
}
