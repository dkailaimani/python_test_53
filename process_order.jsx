import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const PlaceOrderForm = () => {
  const [customerId, setCustomerId] = useState('');
  const [productId, setProductId] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Order submitted:', { customerId, productId, quantity });
    setCustomerId('');
    setProductId('');
    setQuantity('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formCustomerId">
        <Form.Label>Customer ID</Form.Label>
        <Form.Control
          type="text"
          value={customerId}
          onChange={(e) => setCustomerId(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="formProductId">
        <Form.Label>Product ID</Form.Label>
        <Form.Control
          type="text"
          value={productId}
          onChange={(e) => setProductId(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="formQuantity">
        <Form.Label>Quantity</Form.Label>
        <Form.Control
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Place Order
      </Button>
    </Form>
  );
};

export default PlaceOrderForm;
