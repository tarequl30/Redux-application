import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addToCard } from "../../Redux/Actions/Actions";

const ProductCard = (props) => {
  const { image, price, title } = props.product;
  const dispatch = useDispatch();

  // const addToCardProduct = useSelector((state) => {
  //   // console.log(state.addedProduct.addToCard);
  // });

  return (
    <Col lg={3}>
      <div className="productCard mb-5">
        <div className="productImg">
          <img src={image} className="img-fluid" alt="" />
          <div
            className="addToCard"
            onClick={() => dispatch(addToCard(props.product))}
          >
            <p>
              <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
              Add to Card
            </p>
          </div>
        </div>
        <div className="productDetails">
          <div>
            <h6>{title}</h6>
            <div className="d-flex justify-content-around align-items-center pt-2">
              <p>${price}</p>
              <button className="btn btn-danger">Details</button>
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default ProductCard;
