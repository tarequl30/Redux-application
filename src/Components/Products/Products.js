import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
// import { IsLoading, loadProducts, products } from "../../Redux/Reducer/Reducer";
import ProductCard from "./ProductCard";
import { loadProduct } from "../../Redux/Actions/Actions";
import "./Products.css";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => {
    return state.AllProducts.loadProduct;
  });

  useEffect(() => {
    dispatch(loadProduct());
  }, []);
  return (
    <main className="Products">
      <Container>
        <div className="d-flex justify-content-center">
          <h2>FEATURED PRODUCTS</h2>
        </div>
        <Row className="py-5">
          {products.map((products, index) => (
            <ProductCard product={products} key={index + 1}></ProductCard>
          ))}
        </Row>
      </Container>
    </main>
  );
};

export default Products;
