import { useState } from "react";

import Navbar from "./components/Navbar";
import CategoryBar from "./components/CategoryBar";
import ProductCard from "./components/ProductCard";

import "./App.css";

function App() {

  const [cartCount, setCartCount] = useState(0);

  const [searchTerm, setSearchTerm] = useState("");

  const [category, setCategory] = useState("All");

  const products = [
    {
      id: 1,
      name: "Lipstick",
      price: 499,
      category: "Makeup",
      image:
        "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=300"
    },

    {
      id: 2,
      name: "Face Wash",
      price: 299,
      category: "Skincare",
      image:
        "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=300"
    },

    {
      id: 3,
      name: "Perfume",
      price: 999,
      category: "Perfume",
      image:
        "https://images.unsplash.com/photo-1541643600914-78b084683601?w=300"
    },

    {
      id: 4,
      name: "Dress",
      price: 1299,
      category: "Clothing",
      image:
        "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=300"
    }
  ];

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };

  const filteredProducts = products.filter((product) => {

    const searchMatch =
      product.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

    const categoryMatch =
      category === "All" ||
      product.category === category;

    return searchMatch && categoryMatch;
  });

  return (
    <div>

      <Navbar
        cartCount={cartCount}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <CategoryBar
        setCategory={setCategory}
      />

      <div className="product-container">

        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            onAddToCart={handleAddToCart}
          />
        ))}

      </div>

    </div>
  );
}

export default App;