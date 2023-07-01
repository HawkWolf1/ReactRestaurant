import React from 'react';

function Order({ order }) {
  const { OrderID, Price, Dish, Table } = order;

  return (
    <div>
      <h3>{Table}</h3>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Price</th>
            <th>Dish</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{OrderID}</td>
            <td>{Price}</td>
            <td>{Dish}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Order;