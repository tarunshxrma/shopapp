import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Components.css";
import Blackstar from "../assets/Star 2.png";
import Arrow1 from "../assets/Arrow 1.png";
import Arrow2 from "../assets/Arrow 2.png";
import ProductCard from "./ProductCard";

const NewProducts = () => {
  const [prods, setProds] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProds(res.data));
  }, []);


  function moveImages(){

  }

  return (
    <div className="newProducts">
      <div className="secondsection">
        <div>
          <h2>New Products</h2>
          <div className="np1">
            <img src={Blackstar} alt="star" />
            <hr id="hai"/>
          </div>
        </div>
        <div className="np2">
          <div ><img src={Arrow2} alt="arrow" /></div>
          <div><img src={Arrow1} alt="arrow"  /></div>
        </div>
      </div>
      <div className="categoriesNproducts">
        <div className="categories">
          <span>Apparel</span>
          <span>Accessories</span>
          <span>Best Sellers</span>
          <span>50% Off</span>
        </div>
        <div className="products" >
          {prods.map((item) => {
            return <ProductCard  key={item.id} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default NewProducts;