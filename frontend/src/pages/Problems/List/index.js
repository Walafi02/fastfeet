import React from 'react';
import Card from '~/components/Card';
import CrudTable from '~/components/CrudTable';
import crudActions from '~/constants/crudActions';

export default function Problems() {
  return (
    <Card>
      <h2>Problemas na entrega</h2>
      <CrudTable
        entity="problems"
        actions={[crudActions.VIEW_PROBLEM, crudActions.CANCEL]}
      />
    </Card>
  );
}
