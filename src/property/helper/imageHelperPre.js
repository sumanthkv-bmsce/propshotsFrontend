import React from "react";
import "../../css/Card.css";
import { Carousel } from "react-bootstrap";
const ImageHelperPre = ({ product,len }) => {
  
  if (len === 1) {
    return (
      <div className="cardImage ">
        <Carousel interval={null}>
          <Carousel.Item>
            <img src={product[0]} alt="photo" className="mb-3 rounded" />;
          </Carousel.Item>
          <Carousel.Item>
            <img src={product[1]} alt="photo" className="mb-3 rounded" />;
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
  if (len === 2) {
    return (
      <div className="cardImage ">
        <Carousel interval={null}>
          <Carousel.Item>
            <img src={product[0]} alt="photo" className="mb-3 rounded" />;
          </Carousel.Item>
          <Carousel.Item>
            <img src={product[1]} alt="photo" className="mb-3 rounded" />;
          </Carousel.Item>
          <Carousel.Item>
            <img src={product[2]} alt="photo" className="mb-3 rounded" />;
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
  if (len === 3) {
    return (
      <div className="cardImage ">
        <Carousel interval={null}>
          <Carousel.Item>
            <img src={product[0]} alt="photo" className="mb-3 rounded" />;
          </Carousel.Item>
          <Carousel.Item>
            <img src={product[1]} alt="photo" className="mb-3 rounded" />;
          </Carousel.Item>
          <Carousel.Item>
            <img src={product[2]} alt="photo" className="mb-3 rounded" />;
          </Carousel.Item>
          <Carousel.Item>
            <img src={product[3]} alt="photo" className="mb-3 rounded" />;
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
  if (len === 4) {
    return (
      <div className="cardImage ">
        <Carousel interval={null}>
          <Carousel.Item>
            <img src={product[0]} alt="photo" className="mb-3 rounded" />;
          </Carousel.Item>
          <Carousel.Item>
            <img src={product[1]} alt="photo" className="mb-3 rounded" />;
          </Carousel.Item>
          <Carousel.Item>
            <img src={product[2]} alt="photo" className="mb-3 rounded" />;
          </Carousel.Item>
          <Carousel.Item>
            <img src={product[3]} alt="photo" className="mb-3 rounded" />;
          </Carousel.Item>
          <Carousel.Item>
            <img src={product[4]} alt="photo" className="mb-3 rounded" />;
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
};
export default ImageHelperPre;
