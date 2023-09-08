import React, { useState } from 'react';

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

  return (
    <div>
      <h1>Crypto Purchase Interface</h1>
      <div>
        {data.map((item, index) => (
          <div key={index}>
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
      <div>
        <h2>Your Cart</h2>
        {cart.length === 0 ? (
          <p>Your Cart is Empty!</p>
        ) : (
          <div>
            {cart.map((item, index) => (
              <div key={index}>
                <p>{item.name}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Total: ${item.total}</p>
                <button onClick={() => removeFromCart(index)}>Remove</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
