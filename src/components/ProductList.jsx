import { FaTrash } from 'react-icons/fa';

const ProductList = ({ products, onDelete }) => {
  return (
    <div className="product-list">
      <h2>Danh sách sản phẩm</h2>
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
                  onClick={() => onDelete(product.id)}
                  className="delete-btn"
                >
                  <FaTrash /> Xoá
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;