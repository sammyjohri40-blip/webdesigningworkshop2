function Navbar({ cartCount, searchTerm, setSearchTerm }) {
  return (
    <>
      <nav className="navbar">
        <h1>NYKAA</h1>

        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="cart">
          Cart ({cartCount})
        </div>
      </nav>
    </>
  );
}

export default Navbar;