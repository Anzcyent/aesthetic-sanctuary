import React from "react";
import "./Product.scss";

const Product = ({name, photo}) => {
  return <div className="product">
    <div className="product-header">
        <img src={photo} alt="product-photo" />
    </div>
    <div className="product-footer">
        <h5>{name}</h5>
    </div>
  </div>;
};

export default Product;
