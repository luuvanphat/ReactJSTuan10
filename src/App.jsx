import { useState } from 'react';
import { sampleProducts } from './data/sampleProducts';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import './App.css';

function App() {
  const [products, setProducts] = useState(sampleProducts);
  const [notification, setNotification] = useState(null);

  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(null), 3000);
  };

  const deleteProduct = (id) => {
    const productName = products.find(p => p.id === id)?.name;
    setProducts(products.filter(product => product.id !== id));
    showNotification(`Đã xoá sản phẩm "${productName}"`);
  };

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
    showNotification(`Đã thêm sản phẩm "${newProduct.name}"`);
  };

  return (
    <div className="app">
      <h1>Quản lý sản phẩm</h1>
      {notification && (
        <div className="notification">
          {notification}
        </div>
      )}
      <ProductForm onAddProduct={addProduct} />
      <ProductList products={products} onDelete={deleteProduct} />
    </div>
  );
}

export default App;