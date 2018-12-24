import { ConnectedRouter } from 'connected-react-router';
import * as History from 'history';
import * as React from 'react';
import { Route } from 'react-router';
import {
  LandingPage
} from '../pages';

export const Router = ({ history }: { history: History.History }) => (
  <ConnectedRouter history={history}>
    <Route exact={true} path={'/'} component={LandingPage} />
  </ConnectedRouter>
);
