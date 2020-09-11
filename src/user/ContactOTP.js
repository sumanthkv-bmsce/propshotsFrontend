import React from "react";
import axios from "axios";
import atob from "atob";
import { isAuthenticated } from "../auth/helper/index";

const user = isAuthenticated();
class ContactOTP extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log("propid", document.getElementById("test").value);
    var val;
    document.getElementById("test").textContent = "abfdv";

    axios
      .get(`http://localhost:8000/api/user/${user.user._id}/totp-generate`)
      .then((resp) => {

        console.log(resp.data)

        axios({
          method: "POST",
          url: `http://localhost:8000/api/user/${user.user._id}/sendcontact`,
          data: resp.data,
          headers: {
            contentType: "application/json",
          },
        }).then((respo) => {
          val = prompt("Enter the otp: ");
          var propId = document.getElementById("test").value;
          if (respo.data.token === val) {
            axios
              .get(
                `http://localhost:8000/api/user/${user.user._id}/${propId}/getdata`
              )
              .then((respon) => {
                document.getElementById("test").disabled = true;
                var val = `${respon.data.phone}`;
                document.getElementById("test").textContent = val;
              });
          } else {
            val = prompt("Enter the otp: (incorrect otp)");
          }
        });
      });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick} value={this.props.propid} id="test">
          View Contact Details
        </button>
      </div>
    );
  }
}

export default ContactOTP;
