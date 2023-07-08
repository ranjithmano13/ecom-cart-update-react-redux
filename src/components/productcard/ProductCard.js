import React from "react";
import "./productcard.css";
import { useDispatch } from "react-redux";
import { add, remove } from "../../store/cartSlice";

const ProductCard = ({ product, btnVariant }) => {
  const dispatch = useDispatch();

  const addToCart = (product) => {
    dispatch(add(product));
  };

  const removeFromCart = (id) => {
    dispatch(remove(id));
  };

  const handleButtonClick = () => {
    if (btnVariant === "primary") {
      addToCart(product);
    } else if (btnVariant === "secondary") {
      removeFromCart(product.id);
    }
  };
  const btnStyle = {
    primary: {
      backgroundColor: "#7fff00",
      color: "#000",
    },
    secondary: {
      backgroundColor: "red",
      color: "#FFF",
    },
  };
  const buttonText = () => {
    if (btnVariant === "primary") {
      return "Add to Cart";
    } else if (btnVariant === "secondary") {
      return "Remove from Cart";
    }
  };

  return (
    <article className="product-card">
      <div className="product-card-image">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-card-title">
        <h1>{product.title}</h1>
      </div>
      <div className="product-card-subhead">
        <div className="product-card-info">
          <p style={{ fontSize: "20px", fontWeight: "bold" }}>
            ${product.price}
          </p>
        </div>
        <div className="product-card-rating">
          <p>{product.rating.rate} &#11088;</p>
          <p>{product.rating.count} reviews</p>
        </div>
      </div>
      <div className="product-cart-button">
        <button
          type="button"
          style={btnStyle[btnVariant]}
          onClick={handleButtonClick}
        >
          {buttonText()}
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
