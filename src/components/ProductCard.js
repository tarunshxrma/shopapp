import React from 'react'
import ProdDesc from "../assets/Group 19.png";

const ProductCard = ({item}) => {
  return (<div className="productCard" >
        <img src={item?.image} alt="item" />
        <img src={ProdDesc} alt="btn" />
        <span>{item.title}</span>
        <span>{item.description.slice(0, 70)}...</span>
        <span>${item.price}</span>
  </div>  )
}

export default ProductCard