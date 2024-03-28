import React from 'react';

function Products({ name, price, color }) {
    let features = ["hi-tech", "low-tech", "given-tech"];
    let user = { name: "nirma", age: "20", gender: "female" };
    // dynamic components styling
    let style = { backgroundColor: "pink" };

    return (
        <div>
            <h1>Product: {name}</h1>
            <p>Feature: {features[2]}</p>
            <p>Price: {price}</p>
            <p>Color: {color}</p>
            <p>User Name: {user.name}, Gender: {user.gender}, Age: {user.age}</p>
            {/* Apply styles using the style attribute */}
            <div style={style}>
                This text has a pink background.
            </div>
        </div>
    );
}

export default Products;
