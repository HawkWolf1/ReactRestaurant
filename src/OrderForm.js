import React, { useState } from 'react';

const OrderForm = () => {
  const [orderId, setOrderId] = useState('');
  const [chosenPrice, setChosenPrice] = useState('');
  const [chosenDish, setChosenDish] = useState('');
  const [chosenTable, setChosenTable] = useState('');

  const handleOrderIdChange = (e) => {
    setOrderId(e.target.value);
  };

  const handleChosenPriceChange = (e) => {
    setChosenPrice(e.target.value);
  };

  const handleChosenDishChange = (e) => {
    setChosenDish(e.target.value);
  };

  const handleChosenTableChange = (e) => {
    setChosenTable(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const orderData = {
      orderId,
      chosenPrice,
      chosenDish,
      chosenTable
    };
    // Save the orderData to local storage
    localStorage.setItem('orderData', JSON.stringify(orderData));
    console.log('Order submitted:', orderData);
    // Reset the form fields
    setOrderId('');
    setChosenPrice('');
    setChosenDish('');
    setChosenTable('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Order ID:
        <input type="text" value={orderId} onChange={handleOrderIdChange} />
      </label>
      <br />
      <label>
        Choose Price:
        <input
          type="text"
          value={chosenPrice}
          onChange={handleChosenPriceChange}
        />
      </label>
      <br />
      <label>
        Choose Dish:
        <input
          type="text"
          value={chosenDish}
          onChange={handleChosenDishChange}
        />
      </label>
      <br />
      <label>
        Choose Table:
        <select value={chosenTable} onChange={handleChosenTableChange}>
          <option value="">Select a table</option>
          <option value="Table 1">Table 1</option>
          <option value="Table 2">Table 2</option>
          <option value="Table 3">Table 3</option>
        </select>
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default OrderForm;
