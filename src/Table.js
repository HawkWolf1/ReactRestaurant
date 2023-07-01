import React from 'react';
import Order from './Order'

function Table({  orders }) {
    return (
      <div>
        {orders.length > 0 ? (
          orders.map((order) => <Order key={order.OrderID} order={order} />)
        ) : (
          <p> No orders yet. </p>
        )}
      </div>
    );
  }
  


  export default Table;