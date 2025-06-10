import { useState } from "react";

function Fixedheader(){
  const products = [
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
    { title: 'Orange', isFruit: true, id: 4}
  ];

  const listItems = products.map(product =>
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
      {product.title}
    </li>
  );

    return(
        <header className="App-header">
          <button>Click on me</button>
          <ul>{listItems}</ul>
        </header>
    )
}
export default Fixedheader;