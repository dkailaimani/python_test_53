import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const CustomerDetails = () => {
  const { customerId } = useParams();
  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    fetch(`/api/customers/${customerId}`)
      .then((response) => response.json())
      .then((data) => setCustomer(data))
      .catch((error) => console.error('Error fetching customer:', error));
  }, [customerId]);

  const handleDelete = () => {
    // Implement delete functionality
    fetch(`/api/customers/${customerId}`, {
      method: 'DELETE',
    })
      .then(() => {
      })
      .catch((error) => console.error('Error deleting customer:', error));
  };

  if (!customer) return <div>Loading...</div>;

  return (
    <div>
      <h1>{customer.name}</h1>
      <p>Email: {customer.email}</p>
      <p>Phone: {customer.phone}</p>
      <Button variant="danger" onClick={handleDelete}>
        Delete
      </Button>
    </div>
  );
};

export default CustomerDetails;
