import { useState } from 'react';
import { sampleProducts } from './data/sampleProducts';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  const [products, setProducts] = useState(sampleProducts);
  const [notification, setNotification] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

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

  // Lọc sản phẩm theo tên (không phân biệt hoa thường)
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <h1>Quản lý sản phẩm</h1>
      {notification && (
        <div className="notification">
          {notification}
        </div>
      )}
      
      <div className="controls">
        <ProductForm onAddProduct={addProduct} />
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      </div>
      
      <ProductList products={filteredProducts} onDelete={deleteProduct} />
    </div>
  );
}

export default App;