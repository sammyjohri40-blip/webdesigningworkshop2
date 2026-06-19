function CategoryBar({ setCategory }) {
  return (
    <div className="category-bar">

      <button onClick={() => setCategory("All")}>
        All
      </button>

      <button onClick={() => setCategory("Makeup")}>
        Makeup
      </button>

      <button onClick={() => setCategory("Skincare")}>
        Skincare
      </button>

      <button onClick={() => setCategory("Clothing")}>
        Clothing
      </button>

      <button onClick={() => setCategory("Perfume")}>
        Perfume
      </button>

    </div>
  );
}

export default CategoryBar;