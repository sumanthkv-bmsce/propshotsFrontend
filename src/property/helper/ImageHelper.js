import React from "react";
import { API } from "../../backend";
import "../../css/Card.css";
import { Carousel } from "react-bootstrap";
const ImageHelper = ({ product }) => {
  let productlength = product.allimglen;

  if(productlength>4) {
    return null
  }
  const imageUrl = product
    ? `${API}/product/photo/${product._id}`
    : `https://images.pexels.com/photos/3532560/pexels-photo-3532560.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`;

  const imageUrl1 = product
    ? `${API}/product/photo1/${product._id}`
    : `https://images.pexels.com/photos/3532560/pexels-photo-3532560.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`;

  const imageUrl2 = product
    ? `${API}/product/photo2/${product._id}`
    : `https://images.pexels.com/photos/3532560/pexels-photo-3532560.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`;

  const imageUrl3 = product
    ? `${API}/product/photo3/${product._id}`
    : `https://images.pexels.com/photos/3532560/pexels-photo-3532560.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`;

  const imageUrl4 = product
    ? `${API}/product/photo4/${product._id}`
    : `https://images.pexels.com/photos/3532560/pexels-photo-3532560.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`;

  
  
  if (productlength === 1) {
    return (
      <div className="cardImage ">
        <Carousel interval={null}>
          <Carousel.Item>
            <img src={imageUrl} alt="photo" className="mb-3 rounded" />;
          </Carousel.Item>
          <Carousel.Item>
            <img src={imageUrl1} alt="photo" className="mb-3 rounded" />;
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
  if (productlength === 2) {
    return (
      <div className="cardImage ">
        <Carousel interval={null}>
          <Carousel.Item>
            <img src={imageUrl} alt="photo" className="mb-3 rounded" />;
          </Carousel.Item>
          <Carousel.Item>
            <img src={imageUrl1} alt="photo" className="mb-3 rounded" />;
          </Carousel.Item>
          <Carousel.Item>
            <img src={imageUrl2} alt="photo" className="mb-3 rounded" />;
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
  if (productlength === 3) {
    return (
      <div className="cardImage ">
        <Carousel interval={null}>
          <Carousel.Item>
            <img src={imageUrl} alt="photo" className="mb-3 rounded" />;
          </Carousel.Item>
          <Carousel.Item>
            <img src={imageUrl1} alt="photo" className="mb-3 rounded" />;
          </Carousel.Item>
          <Carousel.Item>
            <img src={imageUrl2} alt="photo" className="mb-3 rounded" />;
          </Carousel.Item>
          <Carousel.Item>
            <img src={imageUrl3} alt="photo" className="mb-3 rounded" />;
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
  if (productlength === 4) {
    return (
      <div className="cardImage ">
        <Carousel interval={null}>
          <Carousel.Item>
            <img src={imageUrl} alt="photo" className="mb-3 rounded" />;
          </Carousel.Item>
          <Carousel.Item>
            <img src={imageUrl1} alt="photo" className="mb-3 rounded" />;
          </Carousel.Item>
          <Carousel.Item>
            <img src={imageUrl2} alt="photo" className="mb-3 rounded" />;
          </Carousel.Item>
          <Carousel.Item>
            <img src={imageUrl3} alt="photo" className="mb-3 rounded" />;
          </Carousel.Item>
          <Carousel.Item>
            <img src={imageUrl4} alt="photo" className="mb-3 rounded" />;
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
};
export default ImageHelper;
