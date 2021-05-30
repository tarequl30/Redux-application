import React from "react";
import "./CardItems.css";
import Menubar from "../SharedComponents/NavbarMenu/Menubar";
import { Col, Container, Row } from "react-bootstrap";

import { useSelector } from "react-redux";
import SingleCardItem from "./SingleCardItem";

const CardItems = () => {
  const cardItem = useSelector((state) => {
    return state.AllProducts.addToCard;
  });

  return (
    <main>
      <Menubar />
      <Container>
        <div className="cardProduct">
          <div></div>
          <Row>
            {cardItem.length > 0 ? (
              <>
                {cardItem.map((cardItem, index) => (
                  <SingleCardItem
                    cardItem={cardItem}
                    key={index + 1}
                  ></SingleCardItem>
                ))}
              </>
            ) : (
              <>
                <h2 className="text-danger text-uppercase">NO Added Product</h2>
              </>
            )}
          </Row>
        </div>
      </Container>
    </main>
  );
};

export default CardItems;
