import React from 'react'
import TinderCard from "react-tinder-card";
import HeaderAndSideBar from "./HeaderAndSideBar";
import thumbsup from "../images/thumbs-up.png";
import thumbdown from "../images/thumbsdown.png";
import share from "../images/pngwing.com.png";
import location from "../picimg/location.png";
import "../css/prop.css";
import "../css/home.css";
import "../css/Card.css";
import { getPreciseDistance } from 'geolib';
import ImageHelperProp from '../property/helper/imageHelperProp'

import { isAuthenticated } from "../auth/helper/index";


const { user, token } = isAuthenticated();


class ViewProperty extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dist: null
        }
    }

    componentDidMount() {
        var di = getPreciseDistance(
            { latitude: parseInt(user.lat), longitude: parseInt(user.lon)},
            { latitude: parseInt(this.props.location.val.product.lat), longitude: this.props.location.val.product.lng }
        );

        this.setState({
            dist: di/1000.0
        })
    }
    

    render() {
        console.log("from props ", this.props.location.val.product,user,this.state.dist)
        if(this.state.dist!==null) {
            return (
                <div>
                    <HeaderAndSideBar></HeaderAndSideBar>
                    <div className="row offset-6 cardsdata">
                    <TinderCard
                  className="swipe"
                  
                >
                  <div
                    className="cards"
                  >
                    <ImageHelperProp className="prodimage" product={this.props.location.val.product} len={this.props.location.val.product.allimglen} />
                    <h3>
                      {this.props.location.val.product.PropertyType} {this.props.location.val.product.exactType} for
                      {this.props.location.val.product.PropertyFor}
                    </h3>
                     
                      <h2>
                       
                        {parseInt(this.state.dist)} kms away
                      </h2>
                    
        
                    <h2>
                     
                      Property Value ₹{" "}
                      {this.props.location.val.product.marketValue.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}
                    </h2>
                    <h2>
                      {/* <img alt="" className="ml-1" width="10px" src={location} />{" "} */}
                      Discount Offered{" "}
                      <span style={{ color: "#ff3399", fontSize: "16px" }}>
                        {this.props.location.val.product.discountPer}%
                      </span>
                    </h2>
                    <h2>
                      {/* <img alt="" className="ml-1 mr-2" width="10px" src={land} /> */}
                      Property Area{" "}
                      {this.props.location.val.product.plotArea
                        .toString()
                        .replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}{" "}
                      {this.props.location.val.product.plotUnit}
                    </h2>
        
                    <h2>
                      <img alt="" className="ml-1" width="15px" src={location} />{" "}
                      {this.props.location.val.product.address}
                    </h2>
        
                    <h2>{this.props.location.val.product.uniqueId}</h2>
                    <h2>
                      {/* <img alt="" className="ml-1" width="10px" src={desc} />{" "} */}
                      {this.props.location.val.product.description}
                    </h2>
                    {/* <button onClick={swiped("right", product.id)} /> */}
        
                    <div
                      className="row "
                      style={{ position: "absolute", bottom: "0px" }}
                    >
                      <div className="col-md-4">
                        <img
                          style={{ margin: "0px 26px ", cursor: "pointer" }}
                          width="40px"
                          src={thumbdown}
                        />
                        <h6
                          className="ml-4"
                          style={{ color: "#5c5c5c", fontSize: "15px" }}
                        >
                          Ignore
                        </h6>
                      </div>
                      <div className="col-md-4">
                        <img
                          style={{ margin: "9px 31px ", cursor: "pointer" }}
                          width="20px"
                          src={share}
                        />
                        <h6
                          className="ml-4"
                          style={{ color: "#5c5c5c", fontSize: "15px" }}
                        >
                          Share
                        </h6>
                      </div>
                      <div className="col-md-4">
                        <img
                          style={{ margin: "0px 45px ", cursor: "pointer" }}
                          width="40px"
                         
                          src={thumbsup}
                        />
                        <h6
                          style={{
                            color: "#5c5c5c",
                            fontSize: "15px",
                            marginLeft: "38px",
                          }}
                        >
                          Shortlist
                        </h6>
                      </div>
                    </div>
                  </div>
                </TinderCard>
                
                </div>
                </div>
            )
        }
        else {
            return (
                <div></div>
            )
        }
        }
        
}

export default ViewProperty