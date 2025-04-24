import { useState } from 'react';
import { sampleProducts } from './data/sampleProducts';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import './App.css';

function App() {
  const [products, setProducts] = useState(sampleProducts);

  const deleteProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  return (
    <div className="app">
      <h1>Quản lý sản phẩm</h1>
      <ProductForm onAddProduct={addProduct} />
      <ProductList products={products} onDelete={deleteProduct} />
    </div>
  );
}

export default App;