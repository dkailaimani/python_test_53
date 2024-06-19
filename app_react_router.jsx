import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CustomerPage from './pages/CustomerPage';
import ProductPage from './pages/ProductPage';
import OrderPage from './pages/OrderPage';
import { Container } from 'react-bootstrap';

const App = () => {
  return (
    <Router>
      <Container>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/customers" component={CustomerPage} />
          <Route path="/products" component={ProductPage} />
          <Route path="/orders" component={OrderPage} />
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
