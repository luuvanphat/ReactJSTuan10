import { FaTrash } from 'react-icons/fa';

const ProductList = ({ products, onDelete }) => {
  const handleDelete = (id, name) => {
    if (window.confirm(`Bạn chắc chắn muốn xoá sản phẩm "${name}"?`)) {
      onDelete(id);
    }
  };

  return (
    <div className="product-list">
      <h2>Danh sách sản phẩm</h2>
      {products.length === 0 ? (
        <p className="no-products">Không có sản phẩm nào</p>
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
                    <FaTrash /> Xoá
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