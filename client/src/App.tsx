import { useState } from "react";

function App() {
  const [products, setProduct] = useState([
    { name: "product1", price: 100 },
    { name: "product2", price: 200 },
  ]);

  function addProduct(){
    setProduct((prevState) => [
      ...prevState,
      {
        name: `product${prevState.length + 1}`,
        price: prevState.length * 100 + 100,
      },
    ]);
  }

  return (
    <div>
      <h1 style={{ color: "red" }}>Re-Store</h1>
      <ul>
        { products.map((product,index)=> (
          <li key={ index }>{product.name} - {product.price}</li>
        )) }
      </ul>
      <button onClick={ addProduct }> Add Product</button>
    </div>
  );
}

export default App;
