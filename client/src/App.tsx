import { useState } from "react";

function App() {
  const [products, setProduct] = useState([
    { name: "product1", price: 100 },
    { name: "product2", price: 200 },
  ]);

  return (
    <div>
      <h1 style={{ color: "red" }}>Re-Store</h1>
      <ul>
        { products.map((product,index)=> (
          <li key={ index }>{product.name} - {product.price}</li>
        )) }
      </ul>
    </div>
  );
}

export default App;
