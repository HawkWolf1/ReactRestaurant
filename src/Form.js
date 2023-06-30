import React, { useState } from 'react';



function Form({ onSubmit }) {
  const [OrderID, setOrderID] = useState('');
  const [Price, setPrice] = useState('');
  const [Dish, setDish] = useState('');
  const [Table, setTable] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ OrderID, Price, Dish, Table });
  };

  return (
    <form onSubmit={handleSubmit}>

      <div className="container">
        <label>
          UNIQUE ORDER ID:
          <input type="number" value={OrderID} onChange={(event) => setOrderID(event.target.value)} />
        </label>

        <label>
          CHOOSE PRICE:
          <input type="number" value={Price} onChange={(event) => setPrice(event.target.value)} />
        </label>

        <label>
          CHOOSE DISH:
          <input type="text" value={Dish} onChange={(event) => setDish(event.target.value)} />
        </label>

        <label>
        CHOOSE TABLE:
        <select value={Table} onChange={setTable}>
          <option value="">Select a table</option>
          <option value="Table 1">Table 1</option>
          <option value="Table 2">Table 2</option>
          <option value="Table 3">Table 3</option>
        </select>
      </label>

        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default Form;