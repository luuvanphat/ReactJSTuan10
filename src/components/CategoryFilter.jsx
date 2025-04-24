const CategoryFilter = ({ categories, selectedCategory, onCategoryChange }) => {
    return (
      <div className="category-filter">
        <label htmlFor="category-select">Lọc theo danh mục:</label>
        <select
          id="category-select"
          value={selectedCategory}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="category-select"
        >
          <option value="all">Tất cả danh mục</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    );
  };
  
  export default CategoryFilter;