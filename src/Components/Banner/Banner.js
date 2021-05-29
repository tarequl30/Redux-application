import React from "react";
import { Carousel } from "react-bootstrap";
import "./Banner.css";
import img1 from "../../Images/slider1.jpg";
import img2 from "../../Images/slide2.jpg";
import img3 from "../../Images/slider2.jpg";

const Banner = () => {
  const carouselItems = [
    {
      img: img1,
      title: "Lounge Chairs",
      describe:
        "Lorem ipsum dolor Lorem ipsum dolor sit amer consented adipisicing elia. Quod",
    },
    {
      img: img3,
      title: "Lounge Chairs",
      describe:
        "Lorem ipsum dolor Lorem ipsum dolor sit amer consented adipisicing elia. Quod",
    },
    {
      img: img2,
      title: "Lounge Chairs",
      describe:
        "Lorem ipsum dolor Lorem ipsum dolor sit amer consented adipisicing elia. Quod",
    },
  ];
  return (
    <header className="mainBanner">
      <Carousel>
        {carouselItems.map((carouselItems, index) => (
          <Carousel.Item key={index + 1}>
            <img
              className="d-block w-100 bannerImg"
              src={carouselItems.img}
              alt="First slide"
            />
            <Carousel.Caption className="mainSliderDetails">
              <div style={{ flex: "1" }}>
                <h5>{carouselItems.title}</h5>
                <p>{carouselItems.describe}</p>
                <button className="btn btn-danger">Get Now</button>
              </div>
              <div style={{ flex: "1" }}></div>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </header>
  );
};

export default Banner;
