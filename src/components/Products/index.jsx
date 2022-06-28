import React from "react";
import { useParams } from "react-router-dom";
import styles from "./products.module.css";
import Product from "./Product";
import { useSelector } from 'react-redux';

function Products() {
  const { categoryId } = useParams();

  const products = useSelector((state) => state.products);

  const filteredProducts = products.filter((product) => {
    if (!categoryId) return true;

    return product.categoryId === Number(categoryId);
  });

  return (
    <div className={styles.products}>
      {filteredProducts.map((product) => {
        return <Product key={product.id} product={product} />;
      })}
    </div>
  );
}

export default Products;
