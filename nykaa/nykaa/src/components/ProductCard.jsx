function ProductCard({
  name,
  price,
  image,
  onAddToCart
}) {
  return (
    <div className="card">

      <img src={image} alt={name} />

      <h3>{name}</h3>

      <p>₹{price}</p>

      <button onClick={onAddToCart}>
        Add To Cart
      </button>

    </div>
  );
}

export default ProductCard;