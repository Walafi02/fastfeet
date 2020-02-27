import React from 'react';
import Card from '~/components/Card';
import CrudTable from '~/components/CrudTable';
import crudActions from '~/constants/crudActions';

export default function DeliveryList() {
  return (
    <Card>
      <h2>Gerenciando encomendas</h2>
      <CrudTable
        entity="deliveries"
        actions={[
          crudActions.VIEW,
          crudActions.CREATE,
          crudActions.DELETE,
          crudActions.UPDATE,
        ]}
        searchBar=""
      />
    </Card>
  );
}
