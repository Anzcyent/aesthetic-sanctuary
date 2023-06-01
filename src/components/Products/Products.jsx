import React from "react";
import "./Products.scss";

import { products } from "../../api/dummy.json";
import Product from "./Product/Product";

const Products = () => {
  return (
    <section className="products-section" id="products">
      <div className="circle"></div>
      <h2>Skin Care Products</h2>
      <p>
        Explore our curated selection of premium beauty products that are
        designed to enhance your skincare routine, nourish your hair, and
        accentuate your natural features.
      </p>

      <div className="products">
        {products.map((product) => (
          <Product key={product.id} name={product.name} photo={product.photo} />
        ))}
      </div>
    </section>
  );
};

export default Products;
