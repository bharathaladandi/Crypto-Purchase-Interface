import React from 'react'

export const HomePage = () => {

    const cryptocurrencies = [
        { name: "Bitcoin", price: 40000 },
        { name: "Ethereum", price: 2800 },
        { name: "Litecoin", price: 150 },
    ];

    return (
        <div>
            <h1>Crypto Purchase Interface</h1>
            <div>
                {cryptocurrencies.map((item, id) => (
                    <div key={id}>
                        <h3>{item.name}</h3>
                        <p>Price: ${item.price}</p>
                        <input type="number" placeholder='add quantity' />
                        <button>Buy</button>
                    </div>
                ))}
            </div>
        </div>
    )
}
