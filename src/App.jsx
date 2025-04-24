import { useState } from 'react';
import { sampleProducts } from './data/sampleProducts';
import ProductList from './components/ProductList';
import './App.css';

function App() {
  const [products, setProducts] = useState(sampleProducts);

  const deleteProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  return (
    <div className="app">
      <h1>Quản lý sản phẩm</h1>
      <ProductList products={products} onDelete={deleteProduct} />
    </div>
  );
}

export default App;