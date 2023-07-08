import React from "react";
import "./cart.css";
import { useSelector } from "react-redux";
import ProductCard from "../productcard/ProductCard";
const Cart = () => {
  const productData = useSelector((state) => state.cart);
  return (
    <div
      className="products-container"
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: "15px",
      }}
    >
      {productData.map((product) => (
        <ProductCard
          product={product}
          btnVariant={"secondary"}
        />
      ))}
    </div>
  );
};

export default Cart;
