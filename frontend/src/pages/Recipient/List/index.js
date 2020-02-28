import React from 'react';
import Card from '~/components/Card';
import CrudTable from '~/components/CrudTable';
import crudActions from '~/constants/crudActions';

export default function RecipientList() {
  return (
    <Card>
      <h2>Gerenciando destinatários</h2>
      <CrudTable
        entity="recipient"
        actions={[crudActions.CREATE, crudActions.DELETE, crudActions.UPDATE]}
        searchBar=""
      />
    </Card>
  );
}
