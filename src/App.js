import React, { useState } from 'react';
import Form from'./Form'

import Table from './Table';


function App() {
  const [orders, setOrders] = useState([]);

  const handleSubmit = (order) => {
    setOrders([...orders, order]);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit} />
      <div className="table-container">
        <Table orders={orders.filter((order) => order.Table === 'Table 1')} />
        <Table orders={orders.filter((order) => order.Table === 'Table 2')} />
        <Table orders={orders.filter((order) => order.Table === 'Table 3')} />
      </div>
    </div>
  );
}



export default App;