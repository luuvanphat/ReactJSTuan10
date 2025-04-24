import { FaTrash, FaSearch } from 'react-icons/fa';

const ProductList = ({ products, onDelete }) => {
  const handleDelete = (id, name) => {
    if (window.confirm(`Bạn chắc chắn muốn xoá sản phẩm "${name}"?`)) {
      onDelete(id);
    }
  };

  return (
    <div className="product-list">
      <h2>Danh sách sản phẩm ({products.length})</h2>

      {products.length === 0 ? (
        <div className="no-products">
          <FaSearch size={48} color="#6c757d" />
          <p>Không tìm thấy sản phẩm phù hợp</p>
        </div>
      ) : (
        <table className="product-table">
          <thead>
            <tr>
              <th>Tên sản phẩm</th>
              <th>Giá</th>
              <th>Danh mục</th>
              <th>Tồn kho</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.price.toLocaleString()} VNĐ</td>
                <td>{product.category}</td>
                <td>{product.stock}</td>
                <td>
                  <button
                    onClick={() => handleDelete(product.id, product.name)}
                    className="delete-btn"
                  >
                    <FaTrash style={{ marginRight: '5px' }} />
                    Xoá
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ProductList;
