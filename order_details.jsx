import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const OrderDetails = () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    fetch(`/api/orders/${orderId}`)
      .then((response) => response.json())
      .then((data) => setOrder(data))
      .catch((error) => console.error('Error fetching order:', error));
  }, [orderId]);

  if (!order) return <div>Loading...</div>;

  return (
    <div>
      <h1>Order Details</h1>
      <p>Order ID: {order.id}</p>
      <p>Order Date: {order.date}</p>
      <p>Customer ID: {order.customerId}</p>
      <p>Product ID: {order.productId}</p>
      <p>Quantity: {order.quantity}</p>
      <p>Total Price: ${order.totalPrice}</p>
    </div>
  );
};

export default OrderDetails;
