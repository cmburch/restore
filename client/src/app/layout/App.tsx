import { useEffect, useState } from "react";
import { Product } from "../models/product";

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(()=> {
    fetch("https://localhost:5001/api/products")
      .then((response) => response.json())
      .then((productsData) => setProducts(productsData));
  },[]);

  function addProduct(): void{
    setProducts((prevState: Product[]) => [
      ...prevState,
      {
        id: prevState.length + 101,
        name: `product${prevState.length + 1}`,
        price: prevState.length * 100 + 100,
        brand: "some brand",
        description: " description goes here",
        pictureUrl: "http://picsum.photos/200",
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
