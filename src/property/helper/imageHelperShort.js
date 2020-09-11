import React from "react";
import "../../css/Card.css";
import { Carousel } from "react-bootstrap";
const ImageHelperShort = ({ product,len }) => {
  
  if (len === 1) {
    return (
      <div className="cardImage ">
        <Carousel interval={null}>
          <Carousel.Item>
            <img src={'data:image/jpeg;base64,'+product.photo.data} alt="photo" className="mb-3 rounded" />;
          </Carousel.Item>
          <Carousel.Item>
            <img src={'data:image/jpeg;base64,'+product.photo1.data} alt="photo" className="mb-3 rounded" />;
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
            <img src={'data:image/jpeg;base64,'+product.photo.data} alt="photo" className="mb-3 rounded" />;
          </Carousel.Item>
          <Carousel.Item>
            <img src={'data:image/jpeg;base64,'+product.photo1.data} alt="photo" className="mb-3 rounded" />;
          </Carousel.Item>
          <Carousel.Item>
            <img src={'data:image/jpeg;base64,'+product.photo2.data} alt="photo" className="mb-3 rounded" />;
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
            <img src={'data:image/jpeg;base64,'+product.photo.data} alt="photo" className="mb-3 rounded" />;
          </Carousel.Item>
          <Carousel.Item>
            <img src={'data:image/jpeg;base64,'+product.photo1.data} alt="photo" className="mb-3 rounded" />;
          </Carousel.Item>
          <Carousel.Item>
            <img src={'data:image/jpeg;base64,'+product.photo2.data} alt="photo" className="mb-3 rounded" />;
          </Carousel.Item>
          <Carousel.Item>
            <img src={'data:image/jpeg;base64,'+product.photo3.data} alt="photo" className="mb-3 rounded" />;
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
            <img src={'data:image/jpeg;base64,'+product.photo.data} alt="photo" className="mb-3 rounded" />;
          </Carousel.Item>
          <Carousel.Item>
            <img src={'data:image/jpeg;base64,'+product.photo1.data} alt="photo" className="mb-3 rounded" />;
          </Carousel.Item>
          <Carousel.Item>
            <img src={'data:image/jpeg;base64,'+product.photo2.data} alt="photo" className="mb-3 rounded" />;
          </Carousel.Item>
          <Carousel.Item>
            <img src={'data:image/jpeg;base64,'+product.photo3.data} alt="photo" className="mb-3 rounded" />;
          </Carousel.Item>
          <Carousel.Item>
            <img src={'data:image/jpeg;base64,'+product.photo4.data} alt="photo" className="mb-3 rounded" />;
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
};
export default ImageHelperShort;
