import React from "react";
import { useEffect, useState } from "react";
import "./products.css";
import { ProductCard } from "../../components";
import { Skeleton } from "@mui/material";


const Product = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
 

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="products-container">
      {isLoading ? (
        <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
          <Skeleton variant="text" sx={{ fontSize: "4rem" }} />
          <Skeleton variant="circular" width={40} height={40} />
          <Skeleton variant="rectangular" width={1100} height={60} />
          <Skeleton variant="rounded" width={1100} height={60} />
          <Skeleton variant="text" sx={{ fontSize: "10rem" }} />
        </div>
      ) : (
        products.map((product) => (
          <ProductCard
            product={product}
            btnVariant="primary"
          />
        ))
      )}
    </div>
  );
};

export default Product;
