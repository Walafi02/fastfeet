import React from 'react';
import Card from '~/components/Card';
import CrudTable from '~/components/CrudTable';
import crudActions from '~/constants/crudActions';

export default function Deliveries() {
  return (
    <Card>
      <h2>Gerenciando encomendas</h2>
      <CrudTable
        entity="deliveries"
        actions={[crudActions.CREATE, crudActions.DELETE, crudActions.UPDATE]}
        searchBar=""
      />
    </Card>
  );
}
