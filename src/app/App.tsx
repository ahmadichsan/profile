import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { RoutePath } from '../interfaces';
import { persistor, store } from './App.store';
import { routerNonContainer } from '../config';
import { SimpleLoading, SweetAlert, ContainerLayout } from '../components';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<SimpleLoading />} persistor={persistor}>
        <BrowserRouter>
          <Suspense fallback={<SimpleLoading />}>
            <SweetAlert />
            <Switch>
              {routerNonContainer.map((route: RoutePath, idx: number) =>
                route.component
                  ? <Route key={idx} path={route.path} exact={route.exact} component={route.component} />
                  : null
              )}
              <Route path="/" component={ContainerLayout} />
            </Switch>
          </Suspense>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}
