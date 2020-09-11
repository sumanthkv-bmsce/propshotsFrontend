import React from "react";
import "../../css/Card.css";
import { Carousel } from "react-bootstrap";
import { API } from "../../backend";
const ImageHelperProp = ({ product,len }) => {
  
// console.log(" here product  ",product.photo1.data.data)
// console.log("here then ", new Buffer(product.photo1.data.data).toString('base64'))
const imageUrl = product
    ? `${API}/product/photo/${product._id}`
    : `https://images.pexels.com/photos/3532560/pexels-photo-3532560.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`;

  if (len === 1) {
    return (
      <div className="cardImage ">
        <Carousel interval={null}>
        <Carousel.Item>
            <img src={imageUrl} alt="photo" className="mb-3 rounded" />;
          </Carousel.Item>
          <Carousel.Item>
            <img src={'data:image/jpeg;base64,'+new Buffer(product.photo1.data.data).toString('base64')} alt="photo" className="mb-3 rounded" />;
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
            <img src={imageUrl} alt="photo" className="mb-3 rounded" />;
          </Carousel.Item>
          <Carousel.Item>
            <img src={'data:image/jpeg;base64,'+new Buffer(product.photo1.data.data).toString('base64')} alt="photo" className="mb-3 rounded" />;
          </Carousel.Item>
          <Carousel.Item>
            <img src={'data:image/jpeg;base64,'+new Buffer(product.photo2.data.data).toString('base64')} alt="photo" className="mb-3 rounded" />;
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
            <img src={imageUrl} alt="photo" className="mb-3 rounded" />;
          </Carousel.Item>
          <Carousel.Item>
            <img src={'data:image/jpeg;base64,'+new Buffer(product.photo1.data.data).toString('base64')} alt="photo" className="mb-3 rounded" />;
          </Carousel.Item>
          <Carousel.Item>
            <img src={'data:image/jpeg;base64,'+new Buffer(product.photo2.data.data).toString('base64')} alt="photo" className="mb-3 rounded" />;
          </Carousel.Item>
          <Carousel.Item>
            <img src={'data:image/jpeg;base64,'+new Buffer(product.photo3.data.data).toString('base64')} alt="photo" className="mb-3 rounded" />;
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
            <img src={imageUrl} alt="photo" className="mb-3 rounded" />;
          </Carousel.Item>
          <Carousel.Item>
            <img src={'data:image/jpeg;base64,'+new Buffer(product.photo1.data.data).toString('base64')} alt="photo" className="mb-3 rounded" />;
          </Carousel.Item>
          <Carousel.Item>
            <img src={'data:image/jpeg;base64,'+new Buffer(product.photo2.data.data).toString('base64')} alt="photo" className="mb-3 rounded" />;
          </Carousel.Item>
          <Carousel.Item>
            <img src={'data:image/jpeg;base64,'+new Buffer(product.photo3.data.data).toString('base64')} alt="photo" className="mb-3 rounded" />;
          </Carousel.Item>
          <Carousel.Item>
            <img src={'data:image/jpeg;base64,'+new Buffer(product.photo4.data.data).toString('base64')} alt="photo" className="mb-3 rounded" />;
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
};
export default ImageHelperProp;
