import { useState } from 'react';

const ProductForm = ({ onAddProduct }) => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    category: 'Thời trang',
    stock: ''
  });

  const categories = ['Thời trang', 'Công nghệ', 'Gia dụng', 'Đồ ăn', 'Sách'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      ...formData,
      id: Date.now(),
      price: Number(formData.price),
      stock: Number(formData.stock)
    };
    onAddProduct(newProduct);
    // Reset form
    setFormData({
      name: '',
      price: '',
      category: 'Thời trang',
      stock: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className="product-form">
      <h2>Thêm sản phẩm mới</h2>
      <div className="form-group">
        <label>Tên sản phẩm:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="form-group">
        <label>Giá (VNĐ):</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          min="0"
          required
        />
      </div>
      
      <div className="form-group">
        <label>Danh mục:</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>
      
      <div className="form-group">
        <label>Tồn kho:</label>
        <input
          type="number"
          name="stock"
          value={formData.stock}
          onChange={handleChange}
          min="0"
          required
        />
      </div>
      
      <button type="submit" className="add-btn">
        Thêm sản phẩm
      </button>
    </form>
  );
};

export default ProductForm;