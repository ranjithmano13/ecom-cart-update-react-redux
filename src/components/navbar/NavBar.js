import React from "react";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
import "./navbar.css";
import { useSelector } from "react-redux";
const NavBar = () => {
  const cartProduct = useSelector((state) => state.cart);
  return (
    <header>
    <nav>
      <Link
        className="links"
        to={"/"}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "30px",
        }}
      >
        <HomeIcon sx={{ fontSize: 40 }} style={{ cursor: "pointer" }} />
        <p style={{ fontSize: "20px" }}>Products</p>
      </Link>
      <Link
        to={"/cart"}
        className="links"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "flex-start",
          cursor: "pointer",
        }}
      >
        <ShoppingBagIcon sx={{ fontSize: 40 }} />
        <sup
          style={{
            fontSize: "16px",
            fontWeight: "bold",
          }}
        >
          {cartProduct.length}
        </sup>
      </Link>
    </nav>
    </header>
  );
};

export default NavBar;
