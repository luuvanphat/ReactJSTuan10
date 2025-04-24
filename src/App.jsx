import { useState } from 'react';
import useLocalStorage from './hooks/useLocalStorage';
import { sampleProducts } from './data/sampleProducts';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import SearchBar from './components/SearchBar';
import CategoryFilter from './components/CategoryFilter';
import ProductStats from './components/ProductStats';
import './App.css';

function App() {
  const [products, setProducts] = useLocalStorage('products', sampleProducts);
  const [notification, setNotification] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [...new Set(products.map(product => product.category))];

  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(null), 3000);
  };

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
    showNotification(`Đã thêm sản phẩm "${newProduct.name}"`);
  };

  const deleteProduct = (id) => {
    const deleted = products.find(p => p.id === id);
    setProducts(products.filter(product => product.id !== id));
    if (deleted) showNotification(`Đã xoá sản phẩm "${deleted.name}"`);
  };

  const resetData = () => {
    if (window.confirm('Bạn có chắc muốn reset dữ liệu về mẫu?')) {
      setProducts(sampleProducts);
      showNotification('Đã reset dữ liệu về mẫu ban đầu');
    }
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const totalProducts = products.length;
  const totalStock = products.reduce((sum, product) => sum + product.stock, 0);

  return (
    <div className="app">
      <h1>Quản lý sản phẩm</h1>

      {notification && <div className="notification">{notification}</div>}

      <div className="controls">
        <ProductForm onAddProduct={addProduct} categories={categories} />
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        <CategoryFilter
          categories={['all', ...categories]}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
        <button onClick={resetData} className="reset-btn">
          Reset dữ liệu
        </button>
      </div>

      <ProductStats totalProducts={totalProducts} totalStock={totalStock} />
      <ProductList products={filteredProducts} onDelete={deleteProduct} />
    </div>
  );
}

export default App;
