import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import { routerContainer } from '../../config';
import { SimpleLoading } from '../simple-loading';
import { TopBar } from '../top-bar';
import { Footer } from '../footer';

function ContainerLayout() {
  return (
    <div className="app">
      <Row className="sticky m-0">
        <Col lg={12} md={12} sm={12} xs={12} className="p-0 w-100">
          <TopBar />
        </Col>
      </Row>
      <Row className="m-0 min-h-80vh">
        <Col lg={12} md={12} sm={12} xs={12} className="p-0 w-100">
          <Suspense fallback={<SimpleLoading />}>
            <Switch>
              {routerContainer.map((route, idx) =>
                route.component
                  ? <Route key={idx} path={route.path} exact={route.exact} name={route.name} component={route.component} />
                  : null
              )}
              <Redirect from="/" to="/" />
            </Switch>
          </Suspense>
        </Col>
      </Row>
      <Row className="m-0">
        <Col lg={12} md={12} sm={12} xs={12} className="p-0 w-100">
          <Footer />
        </Col>
      </Row>
    </div>
  );
}

export default ContainerLayout;
