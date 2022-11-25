import React from "react";
import { Link, useParams } from "react-router-dom";
import { useStore } from "../../context/StoreContext";
import { ProductCard } from "../ProductCard/ProductCard";

 function ProductDetail() {
  const { productId } = useParams();
  const {products} = useStore()

  function getProductDetails(products, productId) {
    return products.find((product) => product.id === productId);
  }

  const product = getProductDetails(products, productId);

  return (
    <>
      <ProductCard {...product} />
      <Link to="/category"> See All </Link>
    </>
  );
}
export {ProductDetail}
