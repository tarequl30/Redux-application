import React from "react";
import { Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { removeToCard } from "../../Redux/Actions/Actions";

const SingleCardItem = ({ cardItem }) => {
  const { title, description, image, price, id } = cardItem;

  const dispatch = useDispatch();
  const removeProduct = (id) => {
    dispatch(removeToCard(id));
  };

  return (
    <Col lg={9} className="singleCardProduct">
      <div className="d-flex">
        <div className="cardProductImg">
          <img src={image} className="img-fluid " alt="" />
        </div>
        <div className="cardDetails">
          <h2>{title}</h2>
          <p>{description}</p>
          <div className="d-flex justify-content-between">
            <div>
              <h6>${price}</h6>
            </div>
            <div>
              <a onClick={() => removeProduct(id)} className="btn btn-danger">
                Remove
              </a>
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default SingleCardItem;
