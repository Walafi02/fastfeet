import React from 'react';
import Card from '~/components/Card';
import CrudTable from '~/components/CrudTable';
import crudActions from '~/constants/crudActions';

// import { Container } from './styles';

export default function Deliveryman() {
  return (
    <Card>
      <h2>Gerenciando entregadores</h2>
      <CrudTable
        entity="deliveryman"
        actions={[crudActions.CREATE, crudActions.DELETE, crudActions.UPDATE]}
        searchBar=""
      />
    </Card>
  );
}
