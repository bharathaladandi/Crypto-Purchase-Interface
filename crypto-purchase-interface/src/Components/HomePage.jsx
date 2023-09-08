import React, { useState } from 'react';
import './style.css';


const initialData = [
  { name: 'Bitcoin', price: 40000, quantity: 0 },
  { name: 'Ethereum', price: 2800, quantity: 0 },
  { name: 'Litecoin', price: 150, quantity: 0 },
];

export const HomePage = () => {
  const [data , setData] = useState(initialData);

  const [cart, setCart] = useState([]);
  const [selectItem, setSelectItem] = useState(null);
  const [quantity, setQuantity] = useState(0);

  const addToCart = () => {
    if (selectItem && quantity > 0) {
      const newItem = {
        name: selectItem.name,
        quantity,
        total: selectItem.price * quantity,
      };

      setCart([...cart, newItem]);
      setSelectItem(null);
      setQuantity(0);
    }
    else {
      alert("Please Enter a Valit Quantity (Quantity Should be Greater than 0).");
    }
  };

  const removeFromCart = (indexToRemove) => {
    const updatedCart = cart.filter((item, index) => index !== indexToRemove);
    setCart(updatedCart);
  };

  const totalCost = cart.reduce((total, item) => total + item.total, 0);

  return (
    <div>
      <h1>Crypto Purchase Interface</h1>
      <div className="list">
        {data.map((item, index) => (
          <div key={index} className="card">
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
            <button onClick={() => setSelectItem(item)}>Select</button>
            {selectItem === item && (
              <div>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                />
                <button onClick={addToCart}>Buy</button>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="cart">
        <h1>Your Cart</h1>
        {cart.length === 0 ? (
          <p className='emtycart'>Your Cart is Empty!</p>
        ) : (
          <div>
            {cart.map((item, index) => (
              <div key={index} className="item">
                <p>{item.name}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Total: ${item.total}</p>
                <button onClick={() => removeFromCart(index)}>Remove</button>
              </div>
            ))}
            <h2>Total Cost: ${totalCost}</h2>
          </div>
        )}
      </div>
    </div>
  );
};
