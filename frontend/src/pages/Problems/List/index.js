import React from 'react';
import Card from '~/components/Card';
import CrudTable from '~/components/CrudTable';

export default function Problems() {
  return (
    <Card>
      <h2>Problemas na entrega</h2>
      <CrudTable entity="problems" actions={[]} />
    </Card>
  );
}
