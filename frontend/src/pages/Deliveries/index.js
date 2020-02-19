import React from 'react';
import Card from '~/components/Card';
import CRUDTable from '~/components/CRUDTable';

export default function Deliveries() {
  return (
    <Card>
      <h2>Gerenciando encomendas</h2>
      <CRUDTable entity="deliveries" />
    </Card>
  );
}
