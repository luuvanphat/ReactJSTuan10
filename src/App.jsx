import { useState } from 'react';
import { sampleProducts } from './data/sampleProducts';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import SearchBar from './components/SearchBar';
import CategoryFilter from './components/CategoryFilter';
import './App.css';

function App() {
  const [products, setProducts] = useState(sampleProducts);
  const [notification, setNotification] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Lấy danh sách các danh mục duy nhất từ sản phẩm
  const categories = [...new Set(products.map(product => product.category))];

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

  // Lọc sản phẩm theo tên và danh mục
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="app">
      <h1>Quản lý sản phẩm</h1>
      {notification && (
        <div className="notification">
          {notification}
        </div>
      )}
      
      <div className="controls">
        <ProductForm onAddProduct={addProduct} categories={categories} />
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        <CategoryFilter 
          categories={categories} 
          selectedCategory={selectedCategory} 
          onCategoryChange={setSelectedCategory} 
        />
      </div>
      
      <ProductList products={filteredProducts} onDelete={deleteProduct} />
    </div>
  );
}

export default App;