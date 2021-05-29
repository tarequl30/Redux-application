import React from "react";
import "./CardItems.css";
import Menubar from "../SharedComponents/NavbarMenu/Menubar";
import { Col, Container, Row } from "react-bootstrap";

const CardItems = () => {
  return (
    <main>
      <Menubar />
      <Container>
        <div className="cardProduct">
          <h1>this is added products</h1>
          <Row>
            <Col lg={8}></Col>
            <Col lg={4}></Col>
          </Row>
        </div>
      </Container>
    </main>
  );
};

export default CardItems;
