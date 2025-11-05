function Card({ country, resort, image, rating, price }) {
  
  const ratingClass = rating > 4.0 ? "rating-high" : "rating-low";

  return (
    <div className="card">
      <img src={image} alt={country} />
      <h2>{country}</h2>
      <h3>{resort}</h3>
      <p className={ratingClass}>{rating} ★</p>
      <p className="price">${price}/night</p>
    </div>
  );
}

export default Card;
