import React, { useState, useEffect } from "react";
import HeaderAndSideBar from "../user/HeaderAndSideBar";
import style from "../css/style.css";
import { loadCart } from "../property/helper/cartHelper";
import Npmcard from "../homes/Npmcard";
import { isAuthenticated } from "../auth/helper/index";
import { Modal, Button } from "react-bootstrap";
import ImageHelper from "../property/helper/ImageHelper";
import rupee from "../picimg/rupee.png";
import location from "../picimg/location.png";
import land from "../picimg/land.png";
import { getUser } from "../property/helper/coreapicalls";
import ContactOTP from "./ContactOTP";
import { Link } from 'react-router-dom'

const ShortlistedPage = () => {
  const user = isAuthenticated();

  const [show, setShow] = useState(false);
  const pageVariants = {
    initial: {
      opacity: 0,
    },
    in: {
      opacity: 1,
    },
    out: {
      opacity: 1,
    },
  };

  const handleClose = () => setShow(false);
  const [products, setProducts] = useState([]);
  const [myproduct, setMyProduct] = useState([]);
  const [error, setError] = useState(false);
  const [users, setUsers] = useState([]);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    const products = user.user.shortlisted;
    setProducts(products);

    getUser().then((data) => {
      if (data?.error) {
        console.log("error", data.error);
        setError(data.error);
      } else {
        setUsers(data.shortlisted);
      }
    });
    // loadProductByCategory();
  }, []);
  const settingproduct = (product) => {
    // console.log("single product", product.username);
  };
  // console.log(">>>>>>>>", users.shortlisted);
  // console.log("shortlistes page", users);
  const short = users.shortlisted;
  // setProducts(products);
  // console.log(">>>>>>>>short", users.shortlisted);

  const showcard = (prduct) => {
    // setMyProduct(product);
    setModal(true);
    setShow(true);
  };
  // console.log("shortlosted prop", products);
  return (
    <div>
      <HeaderAndSideBar />
      <div className=" mb-2 offset-5 ml-10">
        <div className=" headings  ">
          <h2>Shortlisted Properties</h2>
        </div>
      </div>

      <div className="  ">
        <div className="col-md-12">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Property Id</th>
                <th scope="col">Name</th>
                <th scope="col">Address</th>
                <th scope="col">Shortlisted On</th>
                <th scope="col">Owner Mobile No.</th>
              </tr>
            </thead>

            {users.length ? (
              users.map((product, index) => {
                settingproduct(product);
                var date = new Date(product.createdAt).toDateString();

                // let idd=product.uniqueId;

                return (
                  <tbody>
                    <tr>

                      <Link to={{
                        pathname:"/home/shortlist/view",
                        val: {
                          product
                        }
                      }}><th key={product.uniqueId} scope="row">
                      {product.uniqueId}
                    </th></Link>
                    
                      <td key={index}>{product.username}</td>
                      <td key={index}>{product.address}</td>
                      <td key={index}>{date}</td>
                      {/* <td key={index}>{product.userphone}</td> */}
                      <td>
                        <ContactOTP propid={product._id} />
                      </td>
                    </tr>
                    <Modal
                      show={show}
                      title={null}
                      animation={true}
                      onHide={handleClose}
                      backdrop="static"
                      keyboard={false}
                      aria-labelledby="contained-modal-title-vcenter"
                      centered
                    >
                      <div className="modalheader ">
                        <Modal.Header title={null} closeButton>
                          <h6>Property</h6>
                        </Modal.Header>
                      </div>
                      <Modal.Body className="get" closeButton>
                        <div className="modalcard">
                          <ImageHelper product={product} />
                          <h3>
                            {product.PropertyType} {product.exactType} for
                            {product.PropertyFor}
                          </h3>

                          <h2>
                            <img alt="" className="" width="20px" src={rupee} />
                            Market Value {product.marketValue}
                          </h2>
                          <h2>
                            <img
                              alt=""
                              className="ml-1"
                              width="10px"
                              src={location}
                            />{" "}
                            {product.location}
                          </h2>
                          <h2>
                            <img
                              alt=""
                              className="ml-1 mr-2"
                              width="10px"
                              src={land}
                            />
                            {product.plotArea} {product.plotUnit}
                          </h2>
                        </div>
                      </Modal.Body>
                    </Modal>
                  </tbody>
                );
              })
            ) : (
              <h6 className="text-dark ">No property Shortlisted</h6>
            )}
          </table>
        </div>
      </div>
    </div>
  );
};
export default ShortlistedPage;
