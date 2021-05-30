import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { loadProduct } from "../../Redux/Actions/Actions";
import "./Products.css";
import img from "../../Images/04de2e31234507.564a1d23645bf.gif";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => {
    return state.AllProducts.loadProduct;
  });

  const IsLoading = useSelector((sate) => {
    return sate.AllProducts.isLoadProduct;
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
          {IsLoading ? (
            <>
              <div className="mx-auto">
                <img src={img} alt="" />
              </div>
            </>
          ) : (
            <>
              {products.map((products, index) => (
                <ProductCard product={products} key={index + 1}></ProductCard>
              ))}
            </>
          )}
        </Row>
      </Container>
    </main>
  );
};

export default Products;
