const ProductStats = ({ totalProducts, totalStock }) => {
    return (
      <div className="product-stats">
        <div className="stat-item">
          <span className="stat-label">Tổng sản phẩm:</span>
          <span className="stat-value">{totalProducts}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Tổng tồn kho:</span>
          <span className="stat-value">{totalStock}</span>
        </div>
      </div>
    );
  };
  
  export default ProductStats;