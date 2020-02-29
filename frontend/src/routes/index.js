import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';
import { DeliveryForm, DeliveryList } from '~/pages/Deliveries';

import { DeliverymanForm, DeliverymanList } from '~/pages/Deliveryman';

import { RecipientForm, RecipientList } from '~/pages/Recipient';
import { ProblemsList } from '~/pages/Problems';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/deliveries" exact component={DeliveryList} isPrivate />
      <Route path="/deliveries/new" exact component={DeliveryForm} isPrivate />
      <Route
        path="/deliveries/edit/:id"
        exact
        component={DeliveryForm}
        isPrivate
      />

      <Route path="/deliveryman" exact component={DeliverymanList} isPrivate />
      <Route
        path="/deliveryman/new"
        exact
        component={DeliverymanForm}
        isPrivate
      />
      <Route path="/deliveryman" exact component={DeliverymanList} isPrivate />
      <Route
        path="/deliveryman/edit/:id"
        exact
        component={DeliverymanForm}
        isPrivate
      />

      <Route path="/recipient" exact component={RecipientList} isPrivate />
      <Route path="/recipient/new" exact component={RecipientForm} isPrivate />
      <Route
        path="/recipient/edit/:id"
        exact
        component={RecipientForm}
        isPrivate
      />

      <Route path="/problems" exact component={ProblemsList} isPrivate />
    </Switch>
  );
}
