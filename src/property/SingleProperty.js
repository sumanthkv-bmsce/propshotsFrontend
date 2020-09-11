import React from "react";
import axios from "axios";
import { data } from "jquery";
import rupee from "../picimg/rupee.png";
import location from "../picimg/location.png";
import land from "../picimg/land.png";
import ImageHelper from "./helper/ImageHelper";
class ViewComp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Age: "",
      AreaUnit: "",
      City: "",
      exactType: "",
      datas: "",
      marketValue: "",
      discountPer: "",
      plotArea: "",
      plotUnit: "",
      locations: "",
      SubType: "",
      PropertyFor: "",
      PropertyType: "",
    };
  }

  componentDidMount() {
    const ppId = this.props.location.pathname.split("/")[2];
    console.log("ppid", ppId);

    axios({
      method: "GET",
      url: `http://localhost:8000/api/${ppId}/properties`,
      headers: {
        contentType: "application/json",
      },
    })
      .then((res) => {
        var dta = res.data;
        console.log("data", dta);
        this.setState({
          datas: dta,
        });

        this.setState({ PropertyFor: dta.PropertyFor });
        this.setState({ PropertyType: dta.PropertyType });
        this.setState({ marketValue: dta.marketValue });
        this.setState({ discountPer: dta.discountPer });
        this.setState({ locations: dta.address });
        this.setState({ plotArea: dta.plotArea });
        this.setState({ plotUnit: dta.plotUnit });
      })
      .catch((er) => {
        console.log("error", er);
      });
  }

  render() {
    return (
      <div>
        <div
          // style={{ backgroundImage: <ImageHelper this.state={this.state} /> }}
          className="cards "
          style={{ margin: "3rem 35rem" }}
        >
          <ImageHelper className="prodimage" product={this.state.datas} />
          <h3>
            {this.state.PropertyType} {this.state.exactType} for
            {this.state.PropertyFor}
          </h3>

          <h2>
            <img alt="" className="" width="20px" src={rupee} />
            Market Value {this.state.marketValue}
          </h2>
          <h2>
            <img alt="" className="ml-1" width="10px" src={location} />
            {this.state.locations}
          </h2>
          <h2>
            <img alt="" className="ml-1 mr-2" width="10px" src={land} />
            {this.state.plotArea} {this.state.plotUnit}
          </h2>
          <h2>{this.state.uniqueId}</h2>
          <h2>{this.state.description}</h2>
        </div>

        {/* <h4 className="text-dark">State: {this.state.Age} </h4>
        <h4 className="text-dark">PropertyFor: {this.state.PropertyFor} </h4>
        <h4 className="text-dark">PropertyType: {this.state.PropertyType} </h4>
        <h4 className="text-dark">MarketValue: {this.state.MarketValue}</h4>
        <h4 className="text-dark">
          MaxDiscountPer: {this.state.MaxDiscountPer}
        </h4>
        <h4 className="text-dark">State: {this.state.State}</h4> */}
      </div>
    );
  }
}

export default ViewComp;
