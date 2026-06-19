import React, { useState, useEffect } from "react";
import "./App.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Nykaa Beauty</h1>
      <ul>
        <li>Home</li>
        <li>Makeup</li>
        <li>Skincare</li>
        <li>Haircare</li>
      </ul>
    </nav>
  );
}

function ProductCard({ product }) {
  return (
    <div className="card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title.slice(0, 30)}...</h3>
      <p>₹ {Math.round(product.price * 80)}</p>
      <button>Add to Cart</button>
    </div>
  );
}

function Newsletter() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.includes("@")) {
      setError("Enter a valid email");
      return;
    }

    setError("");
    alert("Subscribed Successfully!");
    setEmail("");
  };

  return (
    <div className="newsletter">
      <h2>Get Beauty Updates</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit">Subscribe</button>
      </form>

      <p className="error">{error}</p>
    </div>
  );
}

export default function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const filteredProducts = products.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Navbar />

      <header className="hero">
        <h1>Welcome To Nykaa</h1>
        <p>Beauty Begins Here</p>
      </header>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search Products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <section className="products">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>

      <Newsletter />
    </div>
  );
}