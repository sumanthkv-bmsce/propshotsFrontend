import React from 'react'
import TinderCard from "react-tinder-card";
import thumbsup from "../../images/thumbs-up.png";
import thumbdown from "../../images/thumbsdown.png";
import share from "../../images/pngwing.com.png";
import HeaderAndSideBar from "../../user/HeaderAndSideBar";
import location from "../../picimg/location.png";
import ImageHelperPre from './imageHelperPre'
import { getCategories, createProduct } from "./adminapicall";
import "../../css/prop.css";
import "../../css/home.css";
import "../../css/Card.css";
import { isAuthenticated } from "../../auth/helper/index";

const { user, token } = isAuthenticated();
var formData = new FormData()
class Preview extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            imgs: []
        }

        this.handleClick = this.handleClick.bind(this)
        
    }

    async handleClick() {
        
       await createProduct(
            user._id,
            // coordinates.lat,
            // coordinates.lng,
      
            token,
            formData
          ).then((data) => {
            if (data?.error) {
            //   setValues({ ...values, error: data.error });
            } else {
              alert("property posted successfully");
              window.location.replace("/home/myproperty");
            }
          });



    }

    componentDidMount() {
        var arr = []

        arr.push(URL.createObjectURL(this.props.values.photo))
        for(var i=0;i<this.props.allImg.length;i++) {
            arr.push(URL.createObjectURL(this.props.allImg[i]))
        }

        this.setState({
            imgs: arr
        })

        formData.set("PropertyFor",this.props.values.PropertyFor)
        formData.set("PropertyType",this.props.values.PropertyType)
        formData.set("address",this.props.values.address)
        formData.set("allimglen",this.props.allImg.length)
        formData.set("city",this.props.values.city)
        formData.set("description",this.props.values.description)
        formData.set("exactType",this.props.values.exactType)
        formData.set("lat",this.props.lat)
        formData.set("lng",this.props.lng)
        formData.set("marketValue",this.props.values.marketValue)
        formData.set("plotArea",this.props.values.plotArea)
        formData.set("plotUnit",this.props.values.plotUnit)
        formData.set("possession",this.props.values.possession)
        formData.set("states",this.props.values.states)
        formData.set("subType",this.props.values.subType)
        formData.set("discountPer",this.props.values.discountPer)
        
        formData.append("myImage", this.props.values.photo);
        for (var i = 0; i < this.props.allImg.length; i++) {
            formData.append("myImage", this.props.allImg[i]);
            // console.log("Appending ", this.props.allImg[i])
        }

    }


    render() {

        if(this.state.imgs.length>0) {
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
                <ImageHelperPre className="prodimage" product={this.state.imgs} len={this.state.imgs.length-1} />
                <h3>
                  {this.props.values.PropertyType} {this.props.values.exactType} for
                  {this.props.values.PropertyFor}
                </h3>
                 
                  <h2>
                   
                    X kms away
                  </h2>
                
    
                <h2>
                 
                  Property Value ₹{" "}
                  {this.props.values.marketValue.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}
                </h2>
                <h2>
                  {/* <img alt="" className="ml-1" width="10px" src={location} />{" "} */}
                  Discount Offered{" "}
                  <span style={{ color: "#ff3399", fontSize: "16px" }}>
                    {this.props.values.discountPer}%
                  </span>
                </h2>
                <h2>
                  {/* <img alt="" className="ml-1 mr-2" width="10px" src={land} /> */}
                  Property Area{" "}
                  {this.props.values.plotArea
                    .toString()
                    .replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}{" "}
                  {this.props.values.plotUnit}
                </h2>
    
                <h2>
                  <img alt="" className="ml-1" width="15px" src={location} />{" "}
                  {this.props.values.address}
                </h2>
    
                <h2>{this.props.values.uniqueId}</h2>
                <h2>
                  {/* <img alt="" className="ml-1" width="10px" src={desc} />{" "} */}
                  {this.props.values.description}
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
            <button  onClick={this.handleClick} 
            style={{background: "#ff3399", color: "#fff",position: "relative", top: "750px", left: "150px",padding:"7px",borderRadius:"5px"}}>PayandPost</button>
            </div>

            
            </div>
            )
        }
        else {
            return (
                <div>
                    
                </div>
            )
        }
    }
}

export default Preview