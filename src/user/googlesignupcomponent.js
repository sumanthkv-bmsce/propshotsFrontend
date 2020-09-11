import React from "react";

import GoogleLogin from "react-google-login";
import GetMobile from "./GetMobile";

class GoogleSignUp extends React.Component {
  constructor(props) {
    super(props);

    this.responseGoogle = this.responseGoogle.bind(this);
  }

  responseGoogle = (response) => {
    console.log(response.profileObj);
  };

  render() {
    if (this.state.email === "" || this.state.name === "") {
      return (
        <div>
          <GoogleLogin
            clientId="748145064-87ac7bk3b0dgrg0tkqmvs8o9msapm7sr.apps.googleusercontent.com"
            buttonText="Signup using me"
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
          ,
        </div>
      );
    } else {
      return (
        <GetMobile name={this.state.name} email={this.state.email}></GetMobile>
      );
    }
  }
}

export default GoogleSignUp;
