const SearchBar = ({ searchTerm, onSearchChange }) => {
    return (
      <div className="search-bar">
        <p style={{fontSize: "20px"}}>Tìm kiếm sản phẩm:</p>
        <input
          type="text"
          placeholder="Nhập tên sản phẩm..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="search-input"
        />
      </div>
    );
  };
  
  export default SearchBar;